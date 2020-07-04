/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import type { Column } from '../types';

type Props<R> = {|
  column: Column<R>,
|};

export function TH<R>(props: Props<R>) {
  const { column } = props;

  return <th className={styles.TH}>{column.name}</th>;
}
