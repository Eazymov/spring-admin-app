/* @flow strict */
import * as React from 'react';
import Cancelable from 'cancel.it';

import { isNull } from '../is';
import { useEffectOnce } from './useEffectOnce';

export type PromiseCreator<A: $ReadOnlyArray<mixed>, R> = (
  ...args: A
) => Promise<R>;

export function useCancelable<A: $ReadOnlyArray<mixed>, R>(
  promiseCreator: PromiseCreator<A, R>,
): (...args: A) => Cancelable<R> {
  const cancelableRef = React.useRef(null);

  useEffectOnce(() => () => {
    const cancelable = cancelableRef.current;

    if (isNull(cancelable)) {
      return;
    }

    cancelable.cancel();
  });

  return React.useMemo(
    () => (...args: A) => {
      const promise = promiseCreator(...args);
      const cancelable = Cancelable.from(promise);

      cancelableRef.current = cancelable;

      return cancelable;
    },
    [promiseCreator],
  );
}
