import { ReferenceObject } from 'openapi3-ts';
import { extname } from 'upath';
import { Verbs } from '../types';

/**
 * Discriminator helper for `ReferenceObject`
 *
 * @param property
 */
export const isReference = (property: unknown): property is ReferenceObject => {
  return Boolean(
    (
      property as {
        $ref: unknown;
      }
    ).$ref,
  );
};

export const isDirectory = (path: string) => {
  return !extname(path);
};

export function isObject(x: unknown): x is Record<string, unknown> {
  return Object.prototype.toString.call(x) === '[object Object]';
}

export function isString(x: unknown): x is string {
  return typeof x === 'string';
}

export function isNumber(x: unknown): x is number {
  return typeof x === 'number';
}

export function isBoolean(x: unknown): x is boolean {
  return typeof x === 'boolean';
}

// TODO
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(x: unknown): x is Function {
  return typeof x === 'function';
}

export function isUndefined(x: unknown): x is undefined {
  return typeof x === 'undefined';
}

export function isNull(x: unknown): x is null {
  return typeof x === null;
}

export const isVerb = (verb: string): verb is Verbs =>
  Object.values(Verbs).includes(verb as Verbs);
