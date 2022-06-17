import { ComponentsObject, ParameterObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { GeneratorSchema } from '../../types/generator';
import { asyncReduce } from '../../utils/async-reduce';
import { pascal } from '../../utils/case';
import { jsDoc } from '../../utils/doc';
import { resolveObject } from '../resolvers/object';
import { resolveRef } from '../resolvers/ref';

// TODO: madre mia el follon que lleva con los tipos
export const generateParameterDefinition = <
  P extends ComponentsObject['parameters'],
>(
  parameters: P,
  context: ContextSpecs,
  suffix: string,
) => {
  return asyncReduce(
    Object.entries(parameters),
    async (acc, [parameterName, parameter]) => {
      const modelName = `${pascal(parameterName)}${suffix}`;
      const { schema, imports } = resolveRef(parameter, context);

      // TODO: madre mia el follon que lleva con los tipos
      if ((schema as any).in !== 'query') {
        return acc;
      }

      if (imports.length) {
        acc.push({
          name: modelName,
          imports: imports.length
            ? [
                {
                  name: imports[0].name,
                  specKey: imports[0].specKey,
                  schemaName: imports[0].schemaName,
                },
              ]
            : [],
          model: `export type ${modelName} = Readonly<${
            imports.length ? imports[0].name : 'unknown'
          }>;\n`,
        });

        return acc;
      }

      const resolvedObject = await resolveObject({
        // TODO: madre mia el follon que lleva con los tipos
        schema: (schema as any).schema,
        propName: modelName,
        context,
      });

      const doc = jsDoc(parameter as ParameterObject);

      const model = `${doc}export type ${modelName} = Readonly<${
        resolvedObject.value || 'unknown'
      }>;\n`;

      acc.push(...resolvedObject.schemas);

      if (modelName !== resolvedObject.value) {
        acc.push({
          name: modelName,
          model,
          imports: resolvedObject.imports,
        });
      }

      return acc;
    },
    [] as GeneratorSchema[],
  );
};
