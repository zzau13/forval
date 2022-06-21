import omitBy from 'lodash.omitby';
import { VERBS_WITH_BODY } from '../../constants';
import { OutputClient, OutputClientFunc, Verbs } from '../../types';
import {
  GeneratorDependency,
  GeneratorMutator,
  GeneratorOptions,
  GeneratorVerbOptions,
} from '../../types/generator';
import {
  GetterParams,
  GetterProps,
  GetterPropType,
  GetterResponse,
} from '../../types/getters';
import { camel, pascal } from '../../utils/case';
import { isObject } from '../../utils/is';
import { stringify, toObjectString } from '../../utils/string';
import { isSyntheticDefaultImportsAllow } from '../../utils/tsconfig';
import { generateVerbImports } from './imports';
import {
  generateFormDataAndUrlEncodedFunction,
  generateMutatorConfig,
  generateMutatorRequestOptions,
  generateOptions,
} from './options';

const AXIOS_DEPENDENCIES: GeneratorDependency[] = [
  {
    exports: [
      {
        name: 'axios',
        default: true,
        values: true,
        syntheticDefaultImport: true,
      },
      { name: 'AxiosRequestConfig' },
      { name: 'AxiosResponse' },
      { name: 'AxiosError' },
    ],
    dependency: 'axios',
  },
];

const SVELTE_QUERY_DEPENDENCIES: GeneratorDependency[] = [
  {
    exports: [
      { name: 'useQuery', values: true },
      { name: 'useInfiniteQuery', values: true },
      { name: 'useMutation', values: true },
      { name: 'UseQueryOptions' },
      {
        name: 'UseInfiniteQueryOptions',
      },
      { name: 'UseMutationOptions' },
      { name: 'QueryFunction' },
      { name: 'MutationFunction' },
      { name: 'UseQueryStoreResult' },
      { name: 'UseInfiniteQueryStoreResult' },
      { name: 'QueryKey' },
    ],
    dependency: '@sveltestack/svelte-query',
  },
];

export const getSvelteQueryDependencies = (hasGlobalMutator: boolean) => [
  ...(!hasGlobalMutator ? AXIOS_DEPENDENCIES : []),
  ...SVELTE_QUERY_DEPENDENCIES,
];

const REACT_QUERY_DEPENDENCIES: GeneratorDependency[] = [
  {
    exports: [
      { name: 'useQuery', values: true },
      { name: 'useInfiniteQuery', values: true },
      { name: 'useMutation', values: true },
      { name: 'UseQueryOptions' },
      { name: 'UseInfiniteQueryOptions' },
      { name: 'UseMutationOptions' },
      { name: 'QueryFunction' },
      { name: 'MutationFunction' },
      { name: 'UseQueryResult' },
      { name: 'UseInfiniteQueryResult' },
      { name: 'QueryKey' },
    ],
    dependency: 'react-query',
  },
];

export const getReactQueryDependencies = (hasGlobalMutator: boolean) => [
  ...(!hasGlobalMutator ? AXIOS_DEPENDENCIES : []),
  ...REACT_QUERY_DEPENDENCIES,
];

const VUE_QUERY_DEPENDENCIES: GeneratorDependency[] = [
  {
    exports: [
      { name: 'useQuery', values: true },
      { name: 'useInfiniteQuery', values: true },
      { name: 'useMutation', values: true },
    ],
    dependency: 'vue-query',
  },
  {
    exports: [
      { name: 'UseQueryOptions' },
      { name: 'UseInfiniteQueryOptions' },
      { name: 'UseMutationOptions' },
      { name: 'QueryFunction' },
      { name: 'MutationFunction' },
      { name: 'UseQueryResult' },
      { name: 'UseInfiniteQueryResult' },
      { name: 'QueryKey' },
    ],
    dependency: 'vue-query/types',
  },
  {
    exports: [{ name: 'UseQueryReturnType' }],
    dependency: 'vue-query/lib/vue/useBaseQuery',
  },
];

export const getVueQueryDependencies = (hasGlobalMutator: boolean) => [
  ...(!hasGlobalMutator ? AXIOS_DEPENDENCIES : []),
  ...VUE_QUERY_DEPENDENCIES,
];

const generateQueryRequestFunction = (
  {
    queryParams,
    operationName,
    response,
    mutator,
    body,
    props,
    verb,
    formData,
    formUrlEncoded,
    override,
  }: GeneratorVerbOptions,
  { route, context }: GeneratorOptions,
) => {
  const isRequestOptions = override?.requestOptions !== false;
  const isFormData = override?.formData !== false;
  const isFormUrlEncoded = override?.formUrlEncoded !== false;

  const isSyntheticDefaultImportsAllowed = isSyntheticDefaultImportsAllow(
    context.tsconfig,
  );
  const isBodyVerb = VERBS_WITH_BODY.includes(verb);

  const bodyForm = generateFormDataAndUrlEncodedFunction({
    formData,
    formUrlEncoded,
    body,
    isFormData,
    isFormUrlEncoded,
  });

  if (mutator) {
    const mutatorConfig = generateMutatorConfig({
      route,
      body,
      queryParams,
      response,
      verb,
      isFormData,
      isFormUrlEncoded,
      isBodyVerb,
      hasSignal: true,
    });

    const propsImplementation =
      mutator?.bodyTypeName && body.definition
        ? toObjectString(props, 'implementation').replace(
            new RegExp(`(\\w*):\\s?${body.definition}`),
            `$1: ${mutator.bodyTypeName}<${body.definition}>`,
          )
        : toObjectString(props, 'implementation');

    const requestOptions = isRequestOptions
      ? generateMutatorRequestOptions(
          override?.requestOptions,
          mutator.hasSecondArg,
        )
      : '';

    if (mutator.isHook) {
      return `export const use${pascal(operationName)}Hook = () => {
        const ${operationName} = ${mutator.name}<${
        response.definition.success || 'unknown'
      }>();

        return (\n    ${propsImplementation}\n${
        !isBodyVerb ? 'signal?: AbortSignal,\n' : ''
      } ${
        isRequestOptions && mutator.hasSecondArg
          ? `options?: SecondParameter<typeof ${mutator.name}>`
          : ''
      }) => {${bodyForm}
        return ${operationName}(
          ${mutatorConfig},
          ${requestOptions});
        }
      }
    `;
    }

    return `export const ${operationName} = (\n    ${propsImplementation}\n ${
      isRequestOptions && mutator.hasSecondArg
        ? `options?: SecondParameter<typeof ${mutator.name}>,`
        : ''
    }${!isBodyVerb ? 'signal?: AbortSignal\n' : '\n'}) => {${bodyForm}
      return ${mutator.name}<${response.definition.success || 'unknown'}>(
      ${mutatorConfig},
      ${requestOptions});
    }
  `;
  }

  const options = generateOptions({
    route,
    body,
    queryParams,
    response,
    verb,
    requestOptions: override?.requestOptions,
    isFormData,
    isFormUrlEncoded,
  });

  return `export const ${operationName} = (\n    ${toObjectString(
    props,
    'implementation',
  )} ${
    isRequestOptions ? `options?: AxiosRequestConfig\n` : ''
  } ): Promise<AxiosResponse<${
    response.definition.success || 'unknown'
  }>> => {${bodyForm}
    return axios${
      !isSyntheticDefaultImportsAllowed ? '.default' : ''
    }.${verb}(${options});
  }
`;
};

type QueryType = 'infiniteQuery' | 'query';

const QueryType = {
  INFINITE: 'infiniteQuery' as QueryType,
  QUERY: 'query' as QueryType,
};

const INFINITE_QUERY_PROPERTIES = ['getNextPageParam', 'getPreviousPageParam'];

const generateQueryOptions = ({
  params,
  options,
  type,
}: {
  params: GetterParams;
  options?: object | boolean;
  type: QueryType;
}) => {
  if (options === false) {
    return '';
  }

  const queryConfig = isObject(options)
    ? ` ${stringify(
        omitBy(options, (_, key) => {
          return (
            type !== QueryType.INFINITE &&
            INFINITE_QUERY_PROPERTIES.includes(key)
          );
        }),
      )?.slice(1, -1)}`
    : '';

  if (!params.length) {
    if (options) {
      return `{${queryConfig} ...queryOptions}`;
    }

    return 'queryOptions';
  }

  return `{${
    !isObject(options) || !options.hasOwnProperty('enabled')
      ? `enabled: !!(${params.map(({ name }) => name).join(' && ')}),`
      : ''
  }${queryConfig} ...queryOptions}`;
};

const generateQueryArguments = ({
  operationName,
  definitions,
  mutator,
  isRequestOptions,
  type,
}: {
  operationName: string;
  definitions: string;
  mutator?: GeneratorMutator;
  isRequestOptions: boolean;
  type?: QueryType;
}) => {
  const tData = `${pascal(operationName)}QueryResult`;
  const tError = `${pascal(operationName)}QueryError`;

  const isMutatorHook = mutator?.isHook;
  const definition = type
    ? `Use${pascal(type)}Options<${tData}, ${tError}, ${tData}>`
    : `UseMutationOptions<Awaited<ReturnType<${
        isMutatorHook
          ? `ReturnType<typeof use${pascal(operationName)}Hook>`
          : `typeof ${operationName}`
      }>>, TError,${
        definitions ? `{${definitions}}` : 'TVariables'
      }, TContext>`;

  if (!isRequestOptions) {
    return `${type ? 'queryOptions' : 'mutationOptions'}?: ${definition}`;
  }

  const mutators = !mutator
    ? `axios?: AxiosRequestConfig`
    : mutator?.hasSecondArg
    ? `request?: SecondParameter<typeof ${mutator.name}>`
    : '';
  if (type)
    return `options?: { query?: Omit<${definition}, 'queryKey'>, ${mutators}}\n`;

  return `options?: { mutation?:${definition}, ${mutators}}\n`;
};

const generateQueryImplementation = ({
  queryOption: { name, queryParam, options, type },
  operationName,
  queryProps,
  queryKeyFnName,
  properties,
  params,
  props,
  mutator,
  isRequestOptions,
  response,
}: {
  queryOption: {
    name: string;
    options?: object | boolean;
    type: QueryType;
    queryParam?: string;
  };
  isRequestOptions: boolean;
  operationName: string;
  queryProps: string;
  queryKeyFnName: string;
  properties: string;
  params: GetterParams;
  props: GetterProps;
  response: GetterResponse;
  mutator?: GeneratorMutator;
  outputClient: OutputClient | OutputClientFunc;
}) => {
  const httpFunctionProps = queryParam
    ? props
        .map(({ name }) =>
          name === 'params' ? `{ ${queryParam}: pageParam, ...params }` : name,
        )
        .join(',')
    : properties;

  let errorType = `AxiosError<${response.definition.errors || 'unknown'}>`;

  if (mutator) {
    errorType = mutator.hasErrorType
      ? `${mutator.default ? pascal(operationName) : ''}ErrorType<${
          response.definition.errors || 'unknown'
        }>`
      : response.definition.errors || 'unknown';
  }

  const dataType = mutator?.isHook
    ? `ReturnType<typeof use${pascal(operationName)}Hook>`
    : `typeof ${operationName}`;
  const tData = `${pascal(name)}QueryResult`;
  const tError = `${pascal(name)}QueryError`;

  return `
export type ${tData} = Awaited<ReturnType<${dataType}>>
export type ${tError} = ${errorType}

export const ${camel(`use-${name}`)} = (
    ${queryProps} 
    ${generateQueryArguments({
      operationName,
      definitions: '',
      mutator,
      isRequestOptions,
      type,
    })}): UseQueryResult<${tData}, ${tError}> => {

  ${
    isRequestOptions
      ? `const {query: queryOptions${
          !mutator
            ? `, axios: axiosOptions`
            : mutator.hasSecondArg
            ? ', request: requestOptions'
            : ''
        }} = options ?? {}`
      : ''
  }

  ${
    mutator?.isHook
      ? `const ${operationName} =  use${pascal(operationName)}Hook()`
      : ''
  }

  const queryFn: QueryFunction<${tData}> = (${
    queryParam && props.some(({ type }) => type === 'queryParam')
      ? `{ signal, pageParam }`
      : '{ signal }'
  }) => ${operationName}(${httpFunctionProps}${httpFunctionProps ? ', ' : ''}${
    isRequestOptions
      ? !mutator
        ? `{ signal, ...axiosOptions }`
        : mutator.hasSecondArg
        ? 'requestOptions, signal'
        : 'signal'
      : ''
  });

  return ${camel(
    `use-${type}`,
  )}<${tData}, ${tError}, ${tData}>(${queryKeyFnName}(${properties}), queryFn, ${generateQueryOptions(
    {
      params,
      options,
      type,
    },
  )});
}\n`;
};

const generateQueryHook = (
  {
    queryParams,
    operationName,
    body,
    props,
    verb,
    params,
    override,
    mutator,
    response,
    operationId,
  }: GeneratorVerbOptions,
  { route, override: { operations = {} } }: GeneratorOptions,
  outputClient: OutputClient | OutputClientFunc,
) => {
  const query = override?.query;
  const isRequestOptions = override?.requestOptions !== false;
  const operationQueryOptions = operations[operationId]?.query;

  if (
    verb === Verbs.GET ||
    operationQueryOptions?.useInfinite ||
    operationQueryOptions?.useQuery
  ) {
    const properties = props
      .map(({ name, type }) =>
        type === GetterPropType.BODY ? body.implementation : name,
      )
      .join(',');

    const queries = [
      ...(query?.useInfinite
        ? [
            {
              name: camel(`${operationName}-infinite`),
              options: query?.options,
              type: QueryType.INFINITE,
              queryParam: query?.useInfiniteQueryParam,
            },
          ]
        : []),
      ...((!query?.useQuery && !query?.useInfinite) || query?.useQuery
        ? [
            {
              name: operationName,
              options: query?.options,
              type: QueryType.QUERY,
            },
          ]
        : []),
    ];

    const fields = queryParams?.schema?.fields;
    const queryKeyFnName = camel(`get-${operationName}-queryKey`);
    // TODO
    const queryProps = toObjectString(props, 'implementation').replace(
      'params?',
      'params',
    );
    const keyProps = fields?.length
      ? queryProps.replace('params', `{ ${fields.join(', ')} }`)
      : queryProps;

    return `export const ${queryKeyFnName} = (${keyProps}) => [\`${route}\`${
      fields?.length ? `, ${fields.join(', ')}` : ''
    }${body.implementation ? `, ${body.implementation}` : ''}];

    ${queries.reduce(
      (acc, queryOption) =>
        acc +
        generateQueryImplementation({
          // TODO: madre mia el follon que lleva con los tipos
          queryOption: queryOption as any,
          operationName,
          queryProps,
          queryKeyFnName,
          properties,
          params,
          props,
          mutator,
          isRequestOptions,
          response,
          outputClient,
        }),
      '',
    )}
`;
  }

  const definitions = props
    .map(({ definition, type }) =>
      type === GetterPropType.BODY
        ? mutator?.bodyTypeName
          ? `data: ${mutator.bodyTypeName}<${body.definition}>`
          : `data: ${body.definition}`
        : definition,
    )
    .join(';');

  const properties = props
    .map(({ name, type }) => (type === GetterPropType.BODY ? 'data' : name))
    .join(',');

  let errorType = `AxiosError<${response.definition.errors || 'unknown'}>`;

  if (mutator) {
    errorType = mutator.hasErrorType
      ? `${mutator.default ? pascal(operationName) : ''}ErrorType<${
          response.definition.errors || 'unknown'
        }>`
      : response.definition.errors || 'unknown';
  }

  const dataType = mutator?.isHook
    ? `ReturnType<typeof use${pascal(operationName)}Hook>`
    : `typeof ${operationName}`;

  return `
    export type ${pascal(
      operationName,
    )}MutationResult = NonNullable<Awaited<ReturnType<${dataType}>>>
    ${
      body.definition
        ? `export type ${pascal(operationName)}MutationBody = Readonly<${
            mutator?.bodyTypeName
              ? `${mutator.bodyTypeName}<${body.definition}>`
              : body.definition
          }>;`
        : ''
    }
    export type ${pascal(operationName)}MutationError = ${errorType}

    export const ${camel(`use-${operationName}`)} = <TError = ${errorType},
    ${!definitions ? `TVariables = void,` : ''}
    TContext = unknown>(${generateQueryArguments({
      operationName,
      definitions,
      mutator,
      isRequestOptions,
    })}) => {
      ${
        isRequestOptions
          ? `const {mutation: mutationOptions${
              !mutator
                ? `, axios: axiosOptions`
                : mutator?.hasSecondArg
                ? ', request: requestOptions'
                : ''
            }} = options ?? {}`
          : ''
      }

      ${
        mutator?.isHook
          ? `const ${operationName} =  use${pascal(operationName)}Hook()`
          : ''
      }


      const mutationFn: MutationFunction<Awaited<ReturnType<${dataType}>>, ${
    definitions ? `{${definitions}}` : 'TVariables'
  }> = (${properties ? 'props' : ''}) => {
          ${properties ? `const {${properties}} = props ?? {}` : ''};

          return  ${operationName}(${properties}${properties ? ',' : ''}${
    isRequestOptions
      ? !mutator
        ? `axiosOptions`
        : mutator?.hasSecondArg
        ? 'requestOptions'
        : ''
      : ''
  })
        }

      return useMutation<Awaited<ReturnType<typeof ${operationName}>>, TError, ${
    definitions ? `{${definitions}}` : 'TVariables'
  }, TContext>(mutationFn, mutationOptions)
    }
    `;
};

export const generateQueryTitle = () => '';

export const generateQueryHeader = ({
  isRequestOptions,
  isMutator,
  hasAwaitedType,
}: {
  isRequestOptions: boolean;
  isMutator: boolean;
  hasAwaitedType: boolean;
}) => {
  return `${
    !hasAwaitedType
      ? `type AwaitedInput<T> = PromiseLike<T> | T;\n
      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;\n\n`
      : ''
  }
${
  isRequestOptions && isMutator
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;\n\n`
    : ''
}`;
};

export const generateQueryFooter = () => '';

export const generateQuery = (
  verbOptions: GeneratorVerbOptions,
  options: GeneratorOptions,
  outputClient: OutputClient | OutputClientFunc,
) => {
  const imports = generateVerbImports(verbOptions);
  const functionImplementation = generateQueryRequestFunction(
    verbOptions,
    options,
  );
  const hookImplementation = generateQueryHook(
    verbOptions,
    options,
    outputClient,
  );

  return {
    implementation: `${functionImplementation}\n\n${hookImplementation}`,
    imports,
  };
};
