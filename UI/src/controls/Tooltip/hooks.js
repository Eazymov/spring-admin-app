/* @flow strict */
import * as React from 'react';

import {
  useAutoRef,
  useCallbackOnce,
  useLayoutDidUpdate,
} from '../../lib/hooks';
import { isEventOf } from './utils';
import { EVENTS } from '../../constants';
import type { ObjectRef } from '../../types';
import { isEventOfElement } from '../../lib/DOM';
import { enforceNonNull } from '../../lib/enforce';

type Config = {|
  closeOnScroll: boolean,
  tooltipRef: ObjectRef<HTMLElement | null>,
  containerRef: ObjectRef<HTMLElement | null>,
  blur: () => mixed,
|};

export function useDocListeners(isActive: boolean, config: Config) {
  const configRef = useAutoRef(config);

  React.useEffect(() => {
    function handleScroll(event: Event) {
      const { blur, tooltipRef, closeOnScroll } = configRef.current;
      const $tooltip = tooltipRef.current;
      const isTooltipEvent = isEventOf(event, $tooltip);

      if (closeOnScroll && !isTooltipEvent) {
        blur();
      }
    }

    function handleClick(event: MouseEvent) {
      const { blur, tooltipRef, containerRef } = configRef.current;
      const $tooltip = tooltipRef.current;
      const isTooltipEvent = isEventOf(event, $tooltip);
      const $container = enforceNonNull(containerRef.current);
      const isChildEvent = isEventOfElement(event, $container);
      const isOuterClick = !isChildEvent && !isTooltipEvent;

      if (isOuterClick) {
        blur();
      }
    }

    if (isActive) {
      document.addEventListener(EVENTS.CLICK, handleClick);
      document.addEventListener(EVENTS.SCROLL, handleScroll, true);
    }

    return () => {
      if (isActive) {
        document.removeEventListener(EVENTS.CLICK, handleClick);
        document.removeEventListener(EVENTS.SCROLL, handleScroll, true);
      }
    };
  }, [isActive, configRef]);
}

export function useShouldMount(mountOnHover: boolean) {
  const [shouldMount, setShouldMount] = React.useState(!mountOnHover);
  const mount = React.useCallback(() => setShouldMount(true), []);
  const mountOnce = useCallbackOnce<[]>(mount);

  return [shouldMount, mountOnce];
}

export function useActivated(isActive: boolean, onActivated: () => mixed) {
  useLayoutDidUpdate(isActive, prevIsActive => {
    // `isActive` is changed from false to true
    const isActivated = isActive && !prevIsActive;

    if (isActivated) {
      onActivated();
    }
  });
}
