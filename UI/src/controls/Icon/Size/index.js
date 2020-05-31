/* @flow strict */
import * as React from 'react';

import type { IconVariant } from '../types';

export type Props = {|
  size: number,
  icon: IconVariant,
  className?: string,
|};

export function IconSize(props: Props) {
  return (
    <props.icon
      width={props.size}
      height={props.size}
      className={props.className}
    />
  );
}
