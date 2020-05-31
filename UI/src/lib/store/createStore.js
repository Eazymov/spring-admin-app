/* @flow strict */
import { isFunc } from '../is';

import type { Store, BaseState } from './types';

export function createStore<State: BaseState>(
  initialState: State,
): Store<State> {
  let state = initialState;
  const subscribers = new Set();
  const store = { setState, getState, subscribe };

  function subscribe(subscriber) {
    if (subscribers.has(subscriber)) {
      throw new Error('[store] subscriber already exist');
    }

    subscribers.add(subscriber);

    return function unsubscribe() {
      subscribers.delete(subscriber);
    };
  }

  function getState() {
    return state;
  }

  function setState(updater) {
    if (isFunc(updater)) {
      state = updater(state);
    } else {
      state = updater;
    }

    subscribers.forEach(subscriber => subscriber(state));
  }

  return store;
}
