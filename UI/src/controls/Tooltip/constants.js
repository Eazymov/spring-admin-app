/* @flow strict */

export const DEFAULT_DELAY = 0;

export const POSITIONS = {
  TOP: ('top': 'top'),
  LEFT: ('left': 'left'),
  RIGHT: ('right': 'right'),
  BOTTOM: ('bottom': 'bottom'),
};

export const TRIGGERS = {
  CLICK: ('click': 'click'),
  HOVER: ('hover': 'hover'),
};

export const ARROW_SIZE = 18;

export const ARROW_HEIGHT = ARROW_SIZE / 2;

export const MEASURES = {
  WIDTH: ('width': 'width'),
  HEIGHT: ('height': 'height'),
};

export const Y_AXIS_POSITIONS = [POSITIONS.TOP, POSITIONS.BOTTOM];

export const ARROW_STYLES_MAP = {
  [POSITIONS.TOP]: {
    bottom: 0,
    transform: 'rotateZ(180deg)',
  },
  [POSITIONS.LEFT]: {
    right: -ARROW_HEIGHT,
    transform: 'rotateZ(90deg)',
  },
  [POSITIONS.RIGHT]: {
    left: -ARROW_HEIGHT,
    transform: 'rotateZ(-90deg)',
  },
  [POSITIONS.BOTTOM]: {
    top: -ARROW_HEIGHT,
    transform: 'rotateZ(0deg)',
  },
};
