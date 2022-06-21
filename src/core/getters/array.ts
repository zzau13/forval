import { SchemaObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { resolveObject } from '../resolvers/object';

/**
 * Return the output type from an array
 */
export const getArray = async ({
  schema,
  name,
  context,
}: {
  schema: SchemaObject;
  name?: string;
  context: ContextSpecs;
}) => {
  if (schema.items) {
    const resolvedObject = await resolveObject({
      schema: schema.items,
      propName: name + 'Item',
      context,
    });
    return {
      value: `readonly ${resolvedObject.value}[]`,
      imports: resolvedObject.imports,
      schemas: resolvedObject.schemas,
      isEnum: false,
      type: 'array',
      isRef: false,
    };
  } else {
    throw new Error('All arrays must have an `items` key define');
  }
};
