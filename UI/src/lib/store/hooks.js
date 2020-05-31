/* @flow strict */
import * as React from 'react';

import { useAutoRef } from '../hooks';

import type { Store, Updater } from './types';

function defaultGetter<State>(state: State): State {
  return state;
}

export function useState<State>(store: Store<State>): State {
  return useGetter(store, defaultGetter);
}

export function useStore<State>(
  store: Store<State>,
): [State, (updater: Updater<State>) => void] {
  const state = useState(store);

  return [state, store.setState];
}

function useGetter<State, GetterState>(
  store: Store<State>,
  get: (state: State) => GetterState,
): GetterState {
  const currentState = get(store.getState());
  const [, setState] = React.useState(currentState);
  const callbackRef = useAutoRef(nextStoreState => {
    const nextState = get(nextStoreState);

    if (currentState === nextState) {
      // Update not needed
      return;
    }

    setState(nextState);
  });

  React.useLayoutEffect(() => {
    return store.subscribe(nextState => callbackRef.current(nextState));
  }, [store, callbackRef]);

  return currentState;
}
