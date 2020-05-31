/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { isNull } from '../../../lib/is';
import type { Children } from '../types';

type Props = {|
  children: Children,
|};

export function ButtonText(props: Props) {
  const { children } = props;

  if (isNull(children)) {
    return null;
  }

  return <span className={styles.ButtonText}>{children}</span>;
}
