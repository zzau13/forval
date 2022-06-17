const isObject = (obj: unknown) => obj && typeof obj === 'object';

export function mergeDeep<T extends Record<string, unknown>>(
  source: T,
  target: T,
): T {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  return Object.entries(target).reduce((acc, [key, value]) => {
    const sourceValue = acc[key];

    if (Array.isArray(sourceValue) && Array.isArray(value)) {
      (acc[key] as unknown) = [...sourceValue, ...value];
    } else if (isObject(sourceValue) && isObject(value)) {
      (acc[key] as unknown) = mergeDeep(sourceValue, value);
    } else {
      (acc[key] as unknown) = value;
    }

    return acc;
  }, source);
}
