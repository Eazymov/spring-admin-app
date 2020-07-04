/* @flow strict */
import * as React from 'react';

type SetState<S> = <T: S>(value: T) => T;

export function useState<S>(initial: S): [S, SetState<S>] {
  const [error, setState] = React.useState(initial);

  const patchedSetState = React.useCallback(<T: S>(arg: T) => {
    setState(arg);

    return arg;
  }, []);

  return [error, patchedSetState];
}
