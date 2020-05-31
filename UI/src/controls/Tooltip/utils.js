/* @flow strict */
import invariant from 'invariant';

import type { $Partial } from '../../types';
import { isEventOfElement } from '../../lib/DOM';
import { isDef, isNull, isFloat } from '../../lib/is';

import type {
  Rect,
  Edges,
  Props,
  Position,
  AutoShift,
  ArrowStyles,
} from './types';
import {
  MEASURES,
  POSITIONS,
  ARROW_HEIGHT,
  Y_AXIS_POSITIONS,
  ARROW_STYLES_MAP,
} from './constants';

const { max, min } = Math;

function getRect(
  $el: HTMLElement,
  windowWidth: number,
  windowHeight: number,
): Rect {
  const clientRect = $el.getBoundingClientRect();

  return {
    top: clientRect.top,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height,
    right: windowWidth - clientRect.right,
    bottom: windowHeight - clientRect.bottom,
  };
}

// Changes tooltip position if there is not enough space
// on the initialPos and enough space on the other side
function getPosition(
  initialPos: Position,
  tooltipRect: Rect,
  childRect: Rect,
): Position {
  const { width, height } = tooltipRect;
  const { top, left, right, bottom } = childRect;

  switch (initialPos) {
    case POSITIONS.TOP:
      if (height > top && bottom > top) {
        return POSITIONS.BOTTOM;
      }

      return initialPos;

    case POSITIONS.LEFT:
      if (width > left && right > left) {
        return POSITIONS.RIGHT;
      }

      return initialPos;

    case POSITIONS.RIGHT:
      if (width > right && left > right) {
        return POSITIONS.LEFT;
      }

      return initialPos;

    case POSITIONS.BOTTOM:
      if (height > bottom && top > bottom) {
        return POSITIONS.TOP;
      }

      return initialPos;

    default:
      throw new Error('Unknown initial position');
  }
}

function getArrowStyles(position: Position, shift: number): ArrowStyles {
  const styles = ARROW_STYLES_MAP[position];
  const isYAxis = Y_AXIS_POSITIONS.includes(position);

  return isYAxis
    ? {
        ...styles,
        [POSITIONS.LEFT]: shift,
      }
    : {
        ...styles,
        [POSITIONS.TOP]: shift,
      };
}

function getEdges(windowWidth: number, windowHeight: number): Edges {
  const PADDING = 10;

  return {
    top: PADDING,
    left: PADDING,
    right: windowWidth - PADDING,
    bottom: windowHeight - PADDING,
  };
}

function getNewTooltipRect(
  position: Position,
  initialShift: number,
  childRect: Rect,
  tooltipRect: Rect,
): $Partial<Rect> {
  let top: number;
  let left: number;
  let right: number;
  let bottom: number;

  const isYAxis = Y_AXIS_POSITIONS.includes(position);
  const sideName = isYAxis ? MEASURES.WIDTH : MEASURES.HEIGHT;
  const childSideSize = childRect[sideName];
  const halfChildSide = childSideSize / 2;

  const pageOffset = isYAxis
    ? childRect[POSITIONS.LEFT]
    : childRect[POSITIONS.TOP];

  const centerPosition = pageOffset + halfChildSide - ARROW_HEIGHT;
  const sidePosition = centerPosition - initialShift;

  switch (position) {
    case POSITIONS.TOP:
      bottom = childRect.bottom + childRect.height + ARROW_HEIGHT;
      left = sidePosition;
      break;

    case POSITIONS.LEFT:
      right = childRect.right + childRect.width + ARROW_HEIGHT;
      top = sidePosition;
      break;

    case POSITIONS.RIGHT:
      left = childRect.left + childRect.width + ARROW_HEIGHT;
      top = sidePosition;
      break;

    case POSITIONS.BOTTOM:
      top = childRect.top + childRect.height + ARROW_HEIGHT;
      left = sidePosition;
      break;

    default:
      throw new Error(`Unknown position: ${position}`);
  }

  return {
    top,
    left,
    right,
    bottom,
    width: tooltipRect.width,
    height: tooltipRect.height,
  };
}

function getTooltipAutoShift(
  tooltipPosition: Position,
  tooltipRect: $Partial<Rect>,
  edges: Edges,
): AutoShift {
  const { top, left } = tooltipRect;

  let value = 0;
  let position;

  const isYAxis = Y_AXIS_POSITIONS.includes(tooltipPosition);

  /* eslint-disable no-case-declarations */
  switch (true) {
    case isYAxis:
      invariant(isDef(left), 'tooltipRect.left is not defined');

      const right = left + tooltipRect.width;
      const leftOverflow = min(0, left - edges[POSITIONS.LEFT]);
      const rightOverflow = max(0, right - edges[POSITIONS.RIGHT]);

      position = POSITIONS.LEFT;

      if (leftOverflow < 0) {
        value = leftOverflow;
      } else if (rightOverflow > 0) {
        value = rightOverflow;
      }

      break;

    case !isYAxis:
      invariant(isDef(top), 'tooltipRect.top is not defined');

      const bottom = top + tooltipRect.height;
      const topOverflow = min(0, top - edges[POSITIONS.TOP]);
      const bottomOverflow = max(0, bottom - edges[POSITIONS.BOTTOM]);

      position = POSITIONS.TOP;

      if (topOverflow < 0) {
        value = topOverflow;
      } else if (bottomOverflow > 0) {
        value = bottomOverflow;
      }

      break;

    default:
      throw new Error('Unexpected default case');
  }
  /* eslint-enable no-case-declarations */

  return { value, position };
}

function getDefaultShift(position: Position, tooltipRect: Rect): number {
  const isYAxis = [POSITIONS.TOP, POSITIONS.BOTTOM].includes(position);
  const sideName = isYAxis ? MEASURES.WIDTH : MEASURES.HEIGHT;
  const halfSideSize = tooltipRect[sideName] / 2;

  return halfSideSize - ARROW_HEIGHT;
}

export function getStyles(
  props: Props,
  $child: HTMLElement,
  $tooltip: HTMLElement,
) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const { width, pos = POSITIONS.BOTTOM } = props;
  const edges = getEdges(windowWidth, windowHeight);
  const childRect = getRect($child, windowWidth, windowHeight);
  const tooltipRect = getRect($tooltip, windowWidth, windowHeight);

  if (isDef(width)) {
    tooltipRect.width = width;
  }

  const tooltipPosition = getPosition(pos, tooltipRect, childRect);
  const { shift = getDefaultShift(tooltipPosition, tooltipRect) } = props;
  const arrowStyles = getArrowStyles(tooltipPosition, shift);
  const newTooltipRect = getNewTooltipRect(
    tooltipPosition,
    shift,
    childRect,
    tooltipRect,
  );
  // Get shift if the tooltip overflows the window border
  const autoShift = getTooltipAutoShift(tooltipPosition, newTooltipRect, edges);
  const shiftPosition = autoShift.position;
  const shiftValue = autoShift.value;

  if (isFloat(arrowStyles[shiftPosition])) {
    arrowStyles[shiftPosition] += shiftValue;
  }

  // Round width and omit height
  const tooltipStyles = {
    top: newTooltipRect.top,
    left: newTooltipRect.left,
    right: newTooltipRect.right,
    bottom: newTooltipRect.bottom,
    width: Math.ceil(newTooltipRect.width || 0),
  };

  if (isFloat(tooltipStyles[shiftPosition])) {
    tooltipStyles[shiftPosition] -= shiftValue;
  }

  return { arrowStyles, tooltipStyles };
}

export function isEventOf(event: Event, $of: null | HTMLElement) {
  if (isNull($of)) {
    return false;
  }

  return isEventOfElement(event, $of);
}
