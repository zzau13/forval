import { it, describe, expect } from 'vitest';
import { getRoute } from './route';

describe('getRoute getter', () => {
  [
    ['/api/test/{id}', '/api/test/${id}'],
    ['/api/test/{user_id}', '/api/test/${userId}'],
    ['/api/test/{locale}.js', '/api/test/${locale}.js'],
    ['/api/test/i18n-{locale}.js', '/api/test/i18n-${locale}.js'],
    ['/api/test/{param1}-{param2}.js', '/api/test/${param1}-${param2}.js'],
    [
      '/api/test/user{param1}-{param2}.html',
      '/api/test/user${param1}-${param2}.html',
    ],
  ].forEach(([input, expected]) => {
    it(`should process ${input} to ${expected}`, () => {
      expect(getRoute(input)).toBe(expected);
    });
  });
});
