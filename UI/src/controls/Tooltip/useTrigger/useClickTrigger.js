/* @flow strict */
import { isNode } from '../../../lib/is';

import type { Config } from './types';

export function useClickTrigger(config: Config) {
  const { onHover, onFocus, onToggle, toggleMode } = config;

  function handleClick(event: SyntheticMouseEvent<HTMLDivElement>) {
    const { target, currentTarget } = event;

    if (!isNode(target)) {
      return;
    }

    if (currentTarget.contains(target)) {
      const handler = toggleMode ? onToggle : onFocus;

      handler();
    }
  }

  return {
    onFocus: onHover,
    onClick: handleClick,
    onMouseEnter: onHover,
  };
}
