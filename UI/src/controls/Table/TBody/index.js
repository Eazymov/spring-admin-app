/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { TD } from '../TD';
import type { Column } from '../types';
import { isEmpty } from '../../../lib/is';

type Props<R> = {|
  records: $ReadOnlyArray<R>,
  columns: $ReadOnlyArray<Column<R>>,
|};

export function TBody<R>(props: Props<R>) {
  const { records, columns } = props;

  return (
    <tbody>
      {isEmpty(records) ? (
        <tr className={styles.row}>
          <td colSpan={columns.length} className={styles.nothingFound}>
            Nothing found
          </td>
        </tr>
      ) : (
        records.map((record, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={idx} className={styles.row}>
            {columns.map(column => (
              <TD key={column.key} column={column} record={record} />
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
