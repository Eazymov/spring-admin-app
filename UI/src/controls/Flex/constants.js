/* @flow strict */

export const ALIGN = {
  CENTER: ('center': 'center'),
  START: ('flex-start': 'flex-start'),
};

export const JUSTIFY = {
  CENTER: ('center': 'center'),
};

export type Align = $Values<typeof ALIGN>;
export type Justify = $Values<typeof JUSTIFY>;
