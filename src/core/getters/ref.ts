import get from 'lodash.get';
import { ReferenceObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { pascal } from '../../utils/case';

type RefComponent = 'schemas' | 'responses' | 'parameters' | 'requestBodies';

export const RefComponentSuffix: Record<RefComponent, string> = {
  schemas: '',
  responses: 'Response',
  parameters: 'Parameter',
  requestBodies: 'Body',
};

const regex = new RegExp('~1', 'g');

/**
 * Return the output type from the $ref
 */
export const getRefInfo = (
  $ref: ReferenceObject['$ref'],
  context: ContextSpecs,
) => {
  const [pathname, ref] = $ref.split('#');

  const refPaths = ref
    .slice(1)
    .split('/')
    .map((part) => part.replace(regex, '/'));

  const suffix = get(context.override, [...refPaths.slice(0, 2), 'suffix'], '');

  const originalName = refPaths[refPaths.length - 1];

  if (!pathname) {
    return {
      name: pascal(originalName) + suffix,
      originalName,
      refPaths,
    };
  }

  const path = new URL(context.specKey, pathname).toString();

  return {
    name: pascal(originalName) + suffix,
    originalName,
    specKey: path,
    refPaths,
  };
};
