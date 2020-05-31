/* @flow strict */
import * as React from 'react';

export function useToggle(initial: boolean = false) {
  const [state, setState] = React.useState(initial);
  const actions = React.useMemo(
    () => ({
      turnOn() {
        setState(true);
      },

      turnOff() {
        setState(false);
      },

      turn() {
        setState(prevState => !prevState);
      },
    }),
    [],
  );

  return [state, actions];
}
