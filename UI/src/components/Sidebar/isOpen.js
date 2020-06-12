/* @flow strict */
import * as React from 'react';

import { type Store, useStore, createStore } from '../../lib/store';

type State = boolean;

const isOpen: Store<State> = createStore(true);

export function useIsOpen() {
  const [state, setState] = useStore(isOpen);

  const actions = React.useMemo(
    () => ({
      toggle() {
        setState(prevState => !prevState);
      },
    }),
    [setState],
  );

  return [state, actions];
}
