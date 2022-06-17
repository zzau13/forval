import { SchemaObject } from 'openapi3-ts';
import { generalJSTypesWithArray } from '../../constants';
import { ContextSpecs } from '../../types';
import { jsDoc } from '../../utils/doc';
import { getScalar } from '../getters/scalar';

/**
 * Generate the interface string
 * A eslint|tslint comment is insert if the resulted object is empty
 */
export const generateInterface = async ({
  name,
  schema,
  context,
}: {
  name: string;
  schema: SchemaObject;
  context: ContextSpecs;
  suffix: string;
}) => {
  const scalar = await getScalar({
    item: schema,
    name,
    context,
  });
  const isEmptyObject = scalar.value === '{}';

  let model = '';

  model += jsDoc(schema);

  if (isEmptyObject) {
    if (context.tslint) {
      model += '// tslint:disable-next-line:no-empty-interface\n';
    } else {
      model +=
        '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n';
    }
  }

  if (
    !generalJSTypesWithArray.includes(scalar.value) &&
    !context?.override?.useTypeOverInterfaces
  ) {
    model += `export type ${name} = Readonly<${scalar.value}>;\n`;
  } else {
    model += `export type ${name} = Readonly<${scalar.value}>;\n`;
  }

  // Filter out imports that refer to the type defined in current file (OpenAPI recursive schema definitions)
  const externalModulesImportsOnly = scalar.imports.filter(
    (importName) => importName.name !== name,
  );

  return [
    ...scalar.schemas,
    {
      name,
      model,
      imports: externalModulesImportsOnly,
    },
  ];
};
