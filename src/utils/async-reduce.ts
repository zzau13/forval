export const asyncReduce = <Result, Item = unknown>(
  arr: Item[],
  func: (acc: Result, it: Item, index: number, arr: Item[]) => Promise<Result>,
  acc: Result,
) =>
  arr.reduce<Promise<Result>>(
    async (acc, ...rest) => func(await acc, ...rest),
    Promise.resolve(acc),
  );
