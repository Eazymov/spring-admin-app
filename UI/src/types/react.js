/* @flow strict */

export type SetStateRaw<State> = (nextState: State) => void;

export type SetStateCallback<State> = (
  callback: (prevState: State) => State,
) => void;

export type SetState<State> = SetStateRaw<State> & SetStateCallback<State>;
