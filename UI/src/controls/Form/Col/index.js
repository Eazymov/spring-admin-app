/* @flow strict */
import styles from './styles.scss';

import * as React from 'react';

import { type Size, LatinSize } from '../../LatinSize';

type Props = {|
  size?: Size,
  children: React.Node,
|};

const { sizes } = LatinSize;

export function Col(props: Props) {
  const { size = sizes.XII } = props;

  return (
    <LatinSize size={size} className={styles.Col}>
      {props.children}
    </LatinSize>
  );
}

Col.sizes = sizes;
