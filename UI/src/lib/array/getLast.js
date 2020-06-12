/* @flow strict */

export function getLast<T, A: $ReadOnlyArray<T>>(arr: A): void | T {
  return arr[arr.length - 1];
}
