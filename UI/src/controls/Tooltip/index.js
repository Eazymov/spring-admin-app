/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../lib/string';
import { isFunc, isNull } from '../../lib/is';
import { enforceNonNull } from '../../lib/enforce';
import { applyStyles, removeStyle } from '../../lib/DOM';
import { useToggle, useLayoutDidUpdate } from '../../lib/hooks';

import { getStyles } from './utils';
import type { Props } from './types';
import { useTrigger } from './useTrigger';
import { BodyPortal } from '../BodyPortal';
import { TRIGGERS, POSITIONS, DEFAULT_DELAY } from './constants';
import { useActivated, useShouldMount, useDocListeners } from './hooks';

export function Tooltip(props: Props) {
  const {
    render,
    children,
    tabIndex = -1,
    showArrow = false,
    toggleMode = true,
    transition = true,
    interactive = true,
    mountOnHover = false,
    closeOnScroll = true,
    delay = DEFAULT_DELAY,
    trigger = TRIGGERS.CLICK,
  } = props;
  const [shouldMount, mount] = useShouldMount(mountOnHover);

  const [isActive, active] = useToggle();
  const blur = active.turnOff;
  const focus = active.turnOn;
  const toggle = active.turn;
  const childProps = { blur, isActive };

  const arrowRef = React.useRef(null);
  const tooltipRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const triggerHandlers = useTrigger(trigger, {
    delay,
    toggleMode,
    onBlur: blur,
    onFocus: focus,
    onHover: mount,
    onToggle: toggle,
  });

  function updateStyles() {
    const $arrow = arrowRef.current;
    const $tooltip = tooltipRef.current;
    const $container = enforceNonNull(containerRef.current);

    if (isNull($arrow) || isNull($tooltip)) {
      return;
    }

    removeStyle($arrow);
    removeStyle($tooltip);

    const { arrowStyles, tooltipStyles } = getStyles(
      props,
      $container,
      $tooltip,
    );

    applyStyles($arrow, arrowStyles);
    applyStyles($tooltip, tooltipStyles);
  }

  function renderTooltip() {
    const arrowClassName = CN(styles.arrow, { [styles.isVisible]: showArrow });
    const tooltipChildren = render(childProps);
    const tooltipClassName = CN(styles.Tooltip, {
      [styles.isActive]: isActive,
      [styles.transition]: transition,
      [styles.interactive]: interactive,
    });

    if (isNull(tooltipChildren)) {
      return null;
    }

    return (
      <BodyPortal>
        <div
          ref={tooltipRef}
          data-focused={isActive}
          className={tooltipClassName}
        >
          <div ref={arrowRef} className={arrowClassName} />
          {tooltipChildren}
        </div>
      </BodyPortal>
    );
  }

  useActivated(isActive, updateStyles);
  useLayoutDidUpdate(render, updateStyles);
  useDocListeners(isActive, {
    blur,
    tooltipRef,
    containerRef,
    closeOnScroll,
  });

  return (
    <div
      ref={containerRef}
      tabIndex={tabIndex}
      className={props.className}
      {...triggerHandlers}
    >
      {isFunc(children) ? children(childProps) : children}
      {shouldMount ? renderTooltip() : null}
    </div>
  );
}

Tooltip.triggers = TRIGGERS;
Tooltip.positions = POSITIONS;

export * from './types';
