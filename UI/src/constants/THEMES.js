/* @flow strict */

export const THEMES = {
  DANGER: ('danger': 'danger'),
  DEFAULT: ('default': 'default'),
  PRIMARY: ('primary': 'primary'),
  WARNING: ('warning': 'warning'),
};

export type Theme = $Values<typeof THEMES>;
