/* @flow strict */
import type { SetState } from '../../types';

import { isFunc } from '../is';

export type BaseState =
  | { ... }
  | null
  | string
  | number
  | boolean
  | $ReadOnlyArray<mixed>;

export function setStateAsync<S: BaseState>(
  setter: SetState<S>,
  stateGetter: ((prevState: S) => S) | S,
): Promise<S> {
  let resolver;

  // eslint-disable-next-line promise/avoid-new
  const promise = new Promise(resolve => {
    resolver = resolve;
  });

  setter((prevState: S): S => {
    const nextState = isFunc(stateGetter)
      ? stateGetter(prevState)
      : stateGetter;

    resolver(nextState);

    return nextState;
  });

  return promise;
}
