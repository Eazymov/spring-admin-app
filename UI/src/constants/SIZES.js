/* @flow strict */

export const SIZES = {
  BIG: ('big': 'big'),
  SMALL: ('small': 'small'),
  MEDIUM: ('medium': 'medium'),
};

export type Size = $Values<typeof SIZES>;
