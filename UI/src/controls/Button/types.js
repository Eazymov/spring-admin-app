/* @flow strict */
import * as React from 'react';

import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_THEMES } from './constants';

export type ButtonSize = $Values<typeof BUTTON_SIZES>;
export type ButtonType = $Values<typeof BUTTON_TYPES>;
export type ButtonTheme = $Values<typeof BUTTON_THEMES>;

export type Children = null | string | number | Iterable<string | number>;

export type Props = {|
  bold?: boolean,
  narrow?: boolean,
  type?: ButtonType,
  size?: ButtonSize,
  stretch?: boolean,
  loading?: boolean,
  children: Children,
  className?: string,
  disabled?: boolean,
  theme?: ButtonTheme,
  title?: null | string,
  leftIcon?: React.Node,
  rightIcon?: React.Node,
  onClick?: (event: SyntheticMouseEvent<HTMLElement>) => mixed,
|};
