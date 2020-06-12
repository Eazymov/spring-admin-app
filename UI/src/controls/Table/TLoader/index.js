/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { Loader } from '../../Loader';

type Props = {||};

export function TLoader(props: Props) {
  return (
    <div className={styles.TLoader}>
      <Loader.Ball size={Loader.Ball.sizes.MEDIUM} />
    </div>
  );
}
