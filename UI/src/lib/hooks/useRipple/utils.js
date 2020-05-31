/* @flow strict */
import styles from './styles.module.scss';

import { DURATION } from './constants';
import { TAG_NAMES } from '../../../constants';
import { type Styles, applyStyles } from '../../DOM/applyStyles';

export function createRipple() {
  const $ripple = document.createElement(TAG_NAMES.SPAN);
  const $container = document.createElement(TAG_NAMES.SPAN);

  $container.appendChild($ripple);
  $ripple.className = styles.ripple;
  $container.className = styles.container;

  function remove() {
    $container.remove();
  }

  function setStyle(style: Styles) {
    applyStyles($ripple, style);
  }

  function appendTo($target: HTMLElement) {
    $target.appendChild($container);
  }

  return { remove, appendTo, setStyle };
}

export function getStyle(event: SyntheticMouseEvent<HTMLElement>) {
  const { currentTarget: $target } = event;
  const rect = $target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const clickLeft = event.clientX - rect.left;
  const clickTop = event.clientY - rect.top;
  const halfSize = size / 2;
  const left = clickLeft - halfSize;
  const top = clickTop - halfSize;

  return {
    top,
    left,
    width: size,
    height: size,
    'animation-duration': `${DURATION}ms`,
  };
}
