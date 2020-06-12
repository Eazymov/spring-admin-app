/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import type { Column } from '../types';

type Props<R> = {|
  record: R,
  column: Column<R>,
|};

export function TD<R>(props: Props<R>) {
  const { record, column } = props;

  return <td className={styles.TD}>{column.render(record)}</td>;
}
