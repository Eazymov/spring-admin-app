/* @flow strict */

export function getKeys<O: { ... }>(obj: O): $Keys<O>[] {
  const keys: $Keys<O>[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // $FlowFixMe
      keys.push(key);
    }
  }

  return keys;
}
