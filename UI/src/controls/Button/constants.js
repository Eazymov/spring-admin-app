/* @flow strict */
import { SIZES, THEMES, INPUT_TYPES } from '../../constants';

export const BUTTON_SIZES = {
  BIG: SIZES.BIG,
  SMALL: SIZES.SMALL,
  MEDIUM: SIZES.MEDIUM,
};

export const BUTTON_THEMES = {
  DANGER: THEMES.DANGER,
  DEFAULT: THEMES.DEFAULT,
  PRIMARY: THEMES.PRIMARY,
  WARNING: THEMES.WARNING,
};

export const BUTTON_TYPES = {
  BUTTON: INPUT_TYPES.BUTTON,
  SUBMIT: INPUT_TYPES.SUBMIT,
};

export const DEFAULT_TYPE = BUTTON_TYPES.BUTTON;

export const DEFAULT_SIZE = BUTTON_SIZES.MEDIUM;

export const DEFAULT_THEME = BUTTON_THEMES.DEFAULT;
