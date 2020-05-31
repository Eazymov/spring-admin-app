/* @flow strict */

type Base = {
  +[key: string]: mixed,
  ...
};

export function getValues<O: Base>(obj: O): $Values<O>[] {
  const values: $Values<O>[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value: $Values<O> = obj[key];

      values.push(value);
    }
  }

  return values;
}
