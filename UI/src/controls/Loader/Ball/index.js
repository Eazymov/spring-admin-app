/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';
import { type BallSize, BALL_SIZES } from './constants';

type Props = {|
  size?: BallSize,
  className?: string,
|};

export function BallLoader(props: Props) {
  const { size = BALL_SIZES.SMALL } = props;
  const className = CN(styles.BallLoader, props.className, styles[size]);

  return (
    <span className={className}>
      <span className={styles.piece} />
      <span className={styles.piece} />
      <span className={styles.piece} />
    </span>
  );
}

BallLoader.sizes = BALL_SIZES;
