/* @flow strict */

export type Subscriber<State> = (state: State) => mixed;

export type BaseState =
  | { ... }
  | null
  | string
  | number
  | boolean
  | $ReadOnlyArray<mixed>;

export type Updater<State> = ((prevState: State) => State) | State;

export type Reducer<State, Action> = (state: State, action: Action) => State;

export type Dispatch<Action> = (action: Action) => void;

export type Store<State> = {|
  getState: () => State,
  setState: (updater: Updater<State>) => void,
  subscribe: (subscriber: Subscriber<State>) => () => void,
|};
