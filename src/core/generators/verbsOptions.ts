import {
  ComponentsObject,
  OperationObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
} from 'openapi3-ts';
import {
  ContextSpecs,
  NormalizedOperationOptions,
  NormalizedOutputOptions,
  Verbs,
} from '../../types';
import { GeneratorVerbOptions } from '../../types/generator';
import { camel } from '../../utils/case';
import { jsDoc } from '../../utils/doc';
import { dynamicImport } from '../../utils/imports';
import { isObject, isString, isVerb } from '../../utils/is';
import { mergeDeep } from '../../utils/mergeDeep';
import { getBody } from '../getters/body';
import { getOperationId } from '../getters/operation';
import { getParameters } from '../getters/parameters';
import { getParams } from '../getters/params';
import { getProps } from '../getters/props';
import { getQueryParams } from '../getters/queryParams';
import { getResponse } from '../getters/response';
import { generateMutator } from './mutator';
import { sanitize } from '../../utils/string';

const generateVerbOptions = async ({
  verb,
  output,
  operation,
  route,
  verbParameters = [],
  context,
}: {
  verb: Verbs;
  output: NormalizedOutputOptions;
  operation: OperationObject;
  route: string;
  verbParameters?: Array<ReferenceObject | ParameterObject>;
  components?: ComponentsObject;
  context: ContextSpecs;
}) => {
  const {
    responses,
    requestBody,
    parameters: operationParameters,
    tags = [],
    deprecated,
    description,
    summary,
  } = operation;

  const operationId = getOperationId(operation, route, verb);

  const overrideOperation = output.override.operations[operation.operationId!];
  const overrideTag = Object.entries(
    output.override.tags,
  ).reduce<NormalizedOperationOptions>(
    (acc, [tag, options]) =>
      tags.includes(tag) ? mergeDeep(acc, options) : acc,
    {} as NormalizedOperationOptions,
  );

  const override: NormalizedOperationOptions = {
    ...output.override,
    ...overrideTag,
    ...overrideOperation,
  };

  const overrideOperationName =
    overrideOperation?.operationName || output.override?.operationName;
  const overriddenOperationName = overrideOperationName
    ? overrideOperationName(operation, route, verb)
    : camel(operationId);
  const operationName = sanitize(overriddenOperationName, { es5keyword: true });

  const response = getResponse(responses, operationName, context);

  const body = getBody(requestBody!, operationName, context);
  const parameters = getParameters({
    parameters: [...verbParameters, ...(operationParameters ?? [])],
    context,
  });

  const queryParams = getQueryParams({
    queryParams: parameters.query,
    operationName,
    context,
  });

  const params = getParams({
    route,
    pathParams: parameters.path,
    operationId: operationId!,
    context,
  });

  const props = getProps({ body, queryParams: queryParams?.schema, params });

  const mutator = await generateMutator({
    output: output.target,
    name: operationName,
    mutator: override?.mutator,
    workspace: context.workspace,
    tsconfig: context.tsconfig,
  });

  const formData =
    isString(override?.formData) || isObject(override?.formData)
      ? await generateMutator({
          output: output.target,
          name: operationName,
          mutator: override.formData,
          workspace: context.workspace,
          tsconfig: context.tsconfig,
        })
      : undefined;

  const formUrlEncoded =
    isString(override?.formUrlEncoded) || isObject(override?.formUrlEncoded)
      ? await generateMutator({
          output: output.target,
          name: operationName,
          mutator: override.formUrlEncoded,
          workspace: context.workspace,
          tsconfig: context.tsconfig,
        })
      : undefined;

  const doc = jsDoc({ description, deprecated, summary });

  const verbOption: GeneratorVerbOptions = {
    verb: verb as Verbs,
    tags,
    summary: operation.summary,
    operationId: operationId!,
    operationName,
    response,
    body,
    queryParams,
    params,
    props,
    mutator,
    formData,
    formUrlEncoded,
    override,
    doc,
  };

  const transformer = await dynamicImport(
    override?.transformer,
    context.workspace,
  );

  return transformer ? transformer(verbOption) : verbOption;
};

export const generateVerbsOptions = ({
  verbs,
  output,
  route,
  context,
}: {
  verbs: PathItemObject;
  output: NormalizedOutputOptions;
  route: string;
  context: ContextSpecs;
}) =>
  Promise.all(
    Object.entries(verbs)
      .filter(([verb]) => isVerb(verb))
      .map(([verb, operation]: [Verbs, OperationObject]) =>
        generateVerbOptions({
          verb,
          output,
          verbParameters: verbs.parameters,
          route,
          operation,
          context,
        }),
      ),
  );
