/* @flow strict */

export const EVENTS = {
  BLUR: ('blur': 'blur'),
  CLICK: ('click': 'click'),
  KEY_UP: ('keyup': 'keyup'),
  SCROLL: ('scroll': 'scroll'),
  KEY_DOWN: ('keydown': 'keydown'),
  MOUSE_DOWN: ('mousedown': 'mousedown'),
};

export type Event = $Values<typeof EVENTS>;
