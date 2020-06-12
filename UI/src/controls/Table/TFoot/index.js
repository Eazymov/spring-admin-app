/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { TH } from '../TH';
import type { Column } from '../types';

type Props<R> = {|
  columns: $ReadOnlyArray<Column<R>>,
|};

export function TFoot<R>(props: Props<R>) {
  const { columns } = props;

  return (
    <tfoot className={styles.TFoot}>
      <tr>
        {columns.map(column => (
          <TH key={column.key} column={column} />
        ))}
      </tr>
    </tfoot>
  );
}
