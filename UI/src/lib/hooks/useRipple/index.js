/* @flow strict */
import * as React from 'react';

import { DURATION } from './constants';
import { EVENTS } from '../../../constants';
import { getStyle, createRipple } from './utils';

export function useRipple() {
  const rippleRef = React.useRef(null);

  const onMouseDown = React.useCallback(
    (event: SyntheticMouseEvent<HTMLButtonElement>) => {
      const { currentTarget: $currentTarget } = event;
      const removeTimeout = setTimeout(remove, DURATION);
      const ripple = createRipple();
      const style = getStyle(event);

      rippleRef.current = ripple;
      ripple.setStyle(style);
      ripple.appendTo($currentTarget);
      $currentTarget.addEventListener(EVENTS.MOUSE_DOWN, remove);

      function remove() {
        clearTimeout(removeTimeout);
        ripple.remove();
        $currentTarget.removeEventListener(EVENTS.MOUSE_DOWN, remove);
      }
    },
    [],
  );

  return { onMouseDown };
}
