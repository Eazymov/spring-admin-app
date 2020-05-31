/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../lib/string';
import { isDef } from '../../lib/is';
import { validateSize } from './utils';
import { type Size, SIZES } from './constants';

type Props = {|
  size?: Size,
  className?: string,
  children: React.Node,
|};

export function LatinSize(props: Props) {
  const { size } = props;
  const sizeClass = isDef(size) ? styles[`size-${size}`] : null;

  return <div className={CN(props.className, sizeClass)}>{props.children}</div>;
}

LatinSize.sizes = SIZES;
LatinSize.validateSize = validateSize;

export type { Size } from './constants';
