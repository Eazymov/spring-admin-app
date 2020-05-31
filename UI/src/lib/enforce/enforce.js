/* @flow strict */
import invariant from 'invariant';

export function enforce<T, P: $Pred<1>>(
  value: T,
  predicate: P,
  errText: string = `Unexpected ${typeof value}`,
): $Refine<T, P, 1> {
  invariant(predicate(value), errText);

  return value;
}
