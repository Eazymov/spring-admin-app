/* @flow strict */

const INLINE = {
  SPAN: ('span': 'span'),
};

const NO_DISPLAY = {
  STYLE: ('style': 'style'),
};

export const TAG_NAMES = {
  ...INLINE,
  ...NO_DISPLAY,
};

export type TagName = $Values<typeof TAG_NAMES>;
