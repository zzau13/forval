import { ParameterObject, ReferenceObject } from 'openapi3-ts';
import { ContextSpecs } from '../../types';
import { GetterParameters } from '../../types/getters';
import { isReference } from '../../utils/is';
import { resolveRef } from '../resolvers/ref';

export const getParameters = ({
  parameters = [],
  context,
}: {
  parameters: (ReferenceObject | ParameterObject)[];
  context: ContextSpecs;
}) =>
  parameters.reduce(
    (acc, p) => {
      if (isReference(p)) {
        const { schema: parameter, imports } = resolveRef<ParameterObject>(
          p,
          context,
        );

        if (parameter.in === 'path' || parameter.in === 'query') {
          acc[parameter.in].push({ parameter, imports });
        }
      } else {
        if (p.in === 'query' || p.in === 'path') {
          acc[p.in].push({ parameter: p, imports: [] });
        }
      }

      return acc;
    },
    {
      path: [],
      query: [],
    } as GetterParameters,
  );
