import isEmpty from 'lodash.isempty';
import { SchemasObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { GeneratorSchema } from '../../types/generator';
import { pascal } from '../../utils/case';
import { jsDoc } from '../../utils/doc';
import { isReference } from '../../utils/is';
import { getSpecName } from '../../utils/path';
import { getEnum } from '../getters/enum';
import { resolveValue } from '../resolvers/value';
import { generateInterface } from './interface';

/**
 * Extract all types from #/components/schemas
 */
export const generateSchemasDefinition = (
  schemas: SchemasObject = {},
  context: ContextSpecs,
  suffix: string,
) => {
  if (isEmpty(schemas)) {
    return [];
  }

  return Object.entries(schemas).reduce((acc, [name, schema]) => {
    const schemaName = pascal(name) + suffix;
    if (
      (!schema.type || schema.type === 'object') &&
      !schema.allOf &&
      !schema.oneOf &&
      !schema.anyOf &&
      !isReference(schema) &&
      !schema.nullable
    ) {
      acc.push(
        ...generateInterface({
          name: schemaName,
          schema,
          context,
          suffix,
        }),
      );

      return acc;
    } else {
      const resolvedValue = resolveValue({
        schema,
        name: schemaName,
        context,
      });

      let output = '';

      let imports = resolvedValue.imports;

      output += jsDoc(schema);

      if (resolvedValue.isEnum && !resolvedValue.isRef) {
        output += getEnum(resolvedValue.value, resolvedValue.type, schemaName);
      } else if (schemaName === resolvedValue.value && resolvedValue.isRef) {
        const imp = resolvedValue.imports.find(
          (imp) => imp.name === schemaName,
        );

        if (!imp) {
          output += `export type ${schemaName} = Readonly<${resolvedValue.value}>;\n`;
        } else {
          const alias = imp?.specKey
            ? `${pascal(getSpecName(imp.specKey, context.specKey))}${
                resolvedValue.value
              }`
            : `${resolvedValue.value}Bis`;

          output += `export type ${schemaName} = Readonly<${alias}>;\n`;

          imports = imports.map((imp) =>
            imp.name === schemaName ? { ...imp, alias } : imp,
          );
        }
      } else {
        output += `export type ${schemaName} = Readonly<${resolvedValue.value}>;\n`;
      }

      acc.push(...resolvedValue.schemas, {
        name: schemaName,
        model: output,
        imports,
      });

      return acc;
    }
  }, [] as GeneratorSchema[]);
};
