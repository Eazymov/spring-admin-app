/* @flow strict */
import * as React from 'react';

import { EVENTS } from '../../constants';

import { isUndef } from '../is';
import { isTabPressed } from '../window';

type OnBlur = () => mixed;
type OnFocus<E> = (event: SyntheticEvent<E>) => void | OnBlur;

export function useTabFocus<E: HTMLElement>(onFocus: OnFocus<E>) {
  return React.useCallback(
    (event: SyntheticEvent<E>) => {
      if (!isTabPressed()) {
        return;
      }

      const { currentTarget: $currentTarget } = event;
      const onBlur = onFocus(event);

      if (isUndef(onBlur)) {
        return;
      }

      function handleBlur() {
        onBlur();
        $currentTarget.removeEventListener(EVENTS.BLUR, handleBlur);
      }

      $currentTarget.addEventListener(EVENTS.BLUR, handleBlur);
    },
    [onFocus],
  );
}
