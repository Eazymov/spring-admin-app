/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { Loader } from '../../Loader';

type Props = {||};

export function ButtonLoader(props: Props) {
  return <Loader.Ball className={styles.ButtonLoader} />;
}
