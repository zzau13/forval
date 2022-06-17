import { resolve } from 'upath';
import { isObject, isString } from './is';

export const dynamicImport = async <T>(
  toImport: T | string,
  from = process.cwd(),
  takeDefault = true,
) => {
  if (!toImport) {
    return toImport as T;
  }

  try {
    if (isString(toImport)) {
      const path = resolve(from, toImport);
      const data = await import(path);
      if (takeDefault && isObject(data) && data.default) {
        return (data as { default: T }).default;
      }

      return data;
    }

    return Promise.resolve<T>(toImport);
  } catch (error) {
    throw `Oups... 🍻. Path: ${toImport} => ${error}`;
  }
};
