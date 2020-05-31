/* @flow strict */
import * as React from 'react';

import { useToggle } from './useToggle';
import { useCancelable } from './useCancelable';

export function usePending<Args: $ReadOnlyArray<mixed>, R>(
  promiseCreator: (...args: Args) => Promise<R>,
): [(...args: Args) => Promise<R>, boolean] {
  const [isPending, pending] = useToggle();
  const cancelable = useCancelable(promiseCreator);
  const proxified = React.useMemo(
    () => (...args: Args) => {
      pending.turnOn();

      return cancelable(...args).finally(pending.turnOff);
    },
    [pending, cancelable],
  );

  return [proxified, isPending];
}
