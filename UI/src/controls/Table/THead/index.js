/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { TH } from '../TH';
import type { Column } from '../types';

type Props<R> = {|
  columns: $ReadOnlyArray<Column<R>>,
|};

export function THead<R>(props: Props<R>) {
  const { columns } = props;

  return (
    <thead className={styles.THead}>
      <tr className={styles.row}>
        {columns.map(column => (
          <TH column={column} key={column.key} />
        ))}
      </tr>
    </thead>
  );
}
