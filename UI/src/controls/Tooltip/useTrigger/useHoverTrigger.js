/* @flow strict */
import * as React from 'react';

import { isNotNull } from '../../../lib/is';
import { isSomethingFocused } from '../../../lib/DOM';

import type { Config } from './types';

export function useHoverTrigger(config: Config) {
  const isFocusedRef = React.useRef(false);
  const triggerTimeoutRef = React.useRef(null);

  const clearTriggerTimeout = React.useCallback(() => {
    const triggerTimeout = triggerTimeoutRef.current;

    if (isNotNull(triggerTimeout)) {
      clearTimeout(triggerTimeout);
    }
  }, []);

  function handleBlurOrLeave() {
    if (!isSomethingFocused()) {
      isFocusedRef.current = false;
    }

    if (!isFocusedRef.current) {
      clearTriggerTimeout();
      config.onBlur();
    }
  }

  function handleFocusOrHover() {
    clearTriggerTimeout();
    config.onHover();
    triggerTimeoutRef.current = setTimeout(config.onFocus, config.delay);
  }

  function handleBlur() {
    isFocusedRef.current = false;

    handleBlurOrLeave();
  }

  function handleFocus() {
    isFocusedRef.current = true;

    handleFocusOrHover();
  }

  React.useEffect(() => clearTriggerTimeout, [clearTriggerTimeout]);

  return {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onMouseLeave: handleBlurOrLeave,
    onMouseEnter: handleFocusOrHover,
  };
}
