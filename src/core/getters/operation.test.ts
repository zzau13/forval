import { it, describe, expect } from 'vitest';
import { OperationObject } from 'openapi3-ts';

import { getOperationId } from './operation';

describe('getOperationId getter', () => {
  [
    ['/api/test/{id}', 'PostApiTestId'],
    ['/api/test/{user_id}', 'PostApiTestUserId'],
    ['/api/test/{locale}.js', 'PostApiTestLocaleJs'],
    ['/api/test/i18n-{locale}.js', 'PostApiTestI18nLocaleJs'],
    ['/api/test/{param1}-{param2}.js', 'PostApiTestParam1Param2Js'],
    // TODO: what
    ['/api/test/user{param1}-{param2}.html', 'PostApiTestUserparam1Param2Html'],
  ].forEach(([input, expected]) => {
    it(`should process ${input} to ${expected}`, () => {
      expect(getOperationId({} as OperationObject, input, 'post')).toBe(
        expected,
      );
    });
  });
});
