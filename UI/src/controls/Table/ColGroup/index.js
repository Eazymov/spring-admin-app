/* @flow strict */
import * as React from 'react';

import type { Column } from '../types';

type Props<R> = {|
  columns: $ReadOnlyArray<Column<R>>,
|};

export function ColGroup<R>(props: Props<R>) {
  const { columns } = props;

  return (
    <colgroup>
      {columns.map(column => (
        <col key={column.key} style={{ width: column.width }} />
      ))}
    </colgroup>
  );
}
