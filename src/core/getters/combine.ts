import { ReferenceObject, SchemaObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { GeneratorImport } from '../../types/generator';
import { ResolverValue } from '../../types/resolvers';
import { pascal } from '../../utils/case';
import { getNumberWord } from '../../utils/string';
import { resolveObject } from '../resolvers/object';
import { getEnumImplementation } from './enum';

type CombinedData = Omit<
  ResolverValue,
  'isRef' | 'isEnum' | 'value' | 'type'
> & {
  values: string[];
  isRef: boolean[];
  isEnum: boolean[];
  types: string[];
};

const SEPARATOR = {
  allOf: '&',
  oneOf: '|',
  anyOf: '|',
};

export const combineSchemas = ({
  name,
  items,
  separator,
  context,
  nullable,
}: {
  name?: string;
  items: (SchemaObject | ReferenceObject)[];
  separator: keyof typeof SEPARATOR;
  context: ContextSpecs;
  nullable: string;
}) => {
  const resolvedData = items.reduce(
    (acc, schema) => {
      let propName = name ? name + pascal(separator) : undefined;

      if (propName && acc.schemas.length) {
        propName = propName + pascal(getNumberWord(acc.schemas.length + 1));
      }

      const resolvedValue = resolveObject({
        schema,
        propName,
        combined: true,
        context,
      });

      acc.values.push(resolvedValue.value);
      acc.imports.push(...resolvedValue.imports);
      acc.schemas.push(...resolvedValue.schemas);
      acc.isEnum.push(resolvedValue.isEnum);
      acc.types.push(resolvedValue.type);
      acc.isRef.push(resolvedValue.isRef);

      return acc;
    },
    {
      values: [],
      imports: [],
      schemas: [],
      isEnum: [], // check if only enums
      isRef: [],
      types: [],
    } as CombinedData,
  );

  const isAllEnums = resolvedData.isEnum.every((v) => v);

  const value = resolvedData.values.join(
    ` ${!isAllEnums ? SEPARATOR[separator] : '|'} `,
  );

  if (isAllEnums && name && items.length > 1) {
    const newEnum = `\n\n// eslint-disable-next-line @typescript-eslint/no-redeclare\nexport const ${pascal(
      name,
    )} = ${getCombineEnumValue(resolvedData)}`;

    return {
      value:
        `typeof ${pascal(name)}[keyof typeof ${pascal(name)}] ${nullable};` +
        newEnum,
      imports: resolvedData.imports.map<GeneratorImport>((toImport) => ({
        ...toImport,
        values: true,
      })),
      schemas: resolvedData.schemas,
      isEnum: false,
      type: 'object',
      isRef: false,
    };
  }

  return {
    value: value + nullable,
    imports: resolvedData.imports,
    schemas: resolvedData.schemas,
    isEnum: false,
    type: 'object',
    isRef: false,
  };
};

const getCombineEnumValue = ({ values, isRef, types }: CombinedData) => {
  if (values.length === 1) {
    if (isRef[0]) {
      return values[0];
    }

    return `{${getEnumImplementation(values[0], types[0])}} as const`;
  }

  const enums = values
    .map((e, i) => {
      if (isRef[i]) {
        return `...${e},`;
      }

      return getEnumImplementation(e, types[i]);
    })
    .join('');

  return `{${enums}} as const`;
};
