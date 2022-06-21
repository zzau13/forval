import { PathItemObject } from 'openapi3-ts';
import { ContextSpecs, NormalizedOutputOptions } from '../../types';
import { GeneratorApiResponse, GeneratorSchema } from '../../types/generator';
import { isReference } from '../../utils/is';
import { getRoute } from '../getters/route';
import { resolveRef } from '../resolvers/ref';
import { generateClient } from './client';
import { generateVerbsOptions } from './verbsOptions';

export const generateApi = async ({
  output,
  context,
}: {
  output: NormalizedOutputOptions;
  context: ContextSpecs;
}) => {
  let operations: GeneratorApiResponse['operations'] = {};
  const schemas: GeneratorApiResponse['schemas'] = [];

  (await Promise.all(Object.entries(context.specs[context.specKey].paths))).map(
    async ([pathRoute, verbs]: [string, PathItemObject]) => {
      const route = getRoute(pathRoute);

      let resolvedVerbs = verbs;
      let resolvedContext = context;

      if (isReference(verbs as unknown)) {
        const { schema, imports } = resolveRef(verbs, context);

        resolvedVerbs = schema;

        resolvedContext = {
          ...context,
          ...(imports.length
            ? {
                specKey: imports[0].specKey,
              }
            : {}),
        };
      }

      const verbsOptions = await generateVerbsOptions({
        verbs: resolvedVerbs,
        output,
        route,
        context: resolvedContext,
      });

      const schemas = verbsOptions.reduce<GeneratorSchema[]>(
        (acc, { queryParams, body, response }) => {
          if (queryParams) {
            acc.push(queryParams.schema, ...queryParams.deps);
          }

          acc.push(...body.schemas);
          acc.push(...response.schemas);

          return acc;
        },
        [],
      );

      const client = await generateClient(output.client, verbsOptions, {
        route,
        pathRoute,
        override: output.override,
        context: resolvedContext,
        mock: !!output.mock,
      });

      schemas.push(...schemas);
      operations = { ...operations, ...client };
    },
  );

  return {
    operations,
    schemas,
  };
};
