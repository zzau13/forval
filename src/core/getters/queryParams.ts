import { ContentObject, SchemaObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { GeneratorImport, GeneratorSchema } from '../../types/generator';
import { GetterParameters } from '../../types/getters';
import { pascal } from '../../utils/case';
import { resolveValue } from '../resolvers/value';
import { getEnum } from './enum';
import { getKey } from './keys';

type QueryParamsType = {
  definition: string;
  imports: GeneratorImport[];
  schemas: GeneratorSchema[];
};

const getQueryParamsTypes = (
  queryParams: GetterParameters['query'],
  operationName: string,
  context: ContextSpecs,
): Promise<QueryParamsType[]> => {
  return Promise.all(
    queryParams.map(async ({ parameter, imports: parameterImports }) => {
      const { name, required, schema, content } = parameter as {
        name: string;
        required: boolean;
        schema: SchemaObject;
        content: ContentObject;
      };

      const { value, imports, isEnum, type, schemas, isRef } =
        await resolveValue({
          schema: (schema || content['application/json'].schema)!,
          context,
          name: pascal(operationName) + pascal(name),
        });

      const key = getKey(name);

      if (parameterImports.length) {
        return {
          definition: `${key}${!required || schema.default ? '?' : ''}: ${
            parameterImports[0].name
          }`,
          imports: parameterImports,
          schemas: [],
        };
      }

      if (isEnum && !isRef) {
        const enumName = pascal(operationName) + pascal(name);
        const enumValue = getEnum(value, type, enumName);

        return {
          definition: `${key}${
            !required || schema.default ? '?' : ''
          }: ${enumName}`,
          imports: [{ name: enumName }],
          schemas: [...schemas, { name: enumName, model: enumValue, imports }],
        };
      }

      const definition = `${key}${
        !required || schema.default ? '?' : ''
      }: ${value}`;

      return {
        definition,
        imports,
        schemas,
      };
    }),
  );
};

export const getQueryParams = async ({
  queryParams = [],
  operationName,
  context,
}: {
  queryParams: GetterParameters['query'];
  operationName: string;
  context: ContextSpecs;
}): Promise<
  { schema: GeneratorSchema; deps: GeneratorSchema[] } | undefined
> => {
  if (!queryParams.length) {
    return;
  }
  const types = await getQueryParamsTypes(queryParams, operationName, context);
  const imports = types.flatMap(({ imports }) => imports);
  const schemas = types.flatMap(({ schemas }) => schemas);
  const name = `${pascal(operationName)}Params`;

  const type = types.map(({ definition }) => definition).join('; ');

  const schema = {
    name,
    model: `export type ${name} = Readonly<{ ${type} }>;\n`,
    imports,
  };

  return {
    schema,
    deps: schemas,
  };
};
