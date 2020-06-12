/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { TH } from '../TH';
import { noop } from '../../../lib/func';
import { isNotNull } from '../../../lib/is';
import type { Sort, Column } from '../types';
import { useDidUpdate } from '../../../lib/hooks';
import { DIRECTIONS } from '../../../constants/DIRECTIONS';

type Props<R> = {|
  initialSort: null | Sort,
  columns: $ReadOnlyArray<Column<R>>,
  onSort?: (sort: Sort) => mixed,
|};

export function THead<R>(props: Props<R>) {
  const { columns, initialSort, onSort = noop } = props;
  const [sort, setSort] = React.useState(initialSort);

  const handleSort = React.useCallback((column: Column<R>) => {
    setSort(prevSort => ({
      columnKey: column.key,
      direction:
        prevSort?.direction === DIRECTIONS.ASC
          ? DIRECTIONS.DESC
          : DIRECTIONS.ASC,
    }));
  }, []);

  useDidUpdate(sort, () => {
    if (isNotNull(sort)) {
      onSort(sort);
    }
  });

  return (
    <thead className={styles.THead}>
      <tr className={styles.row}>
        {columns.map(column => (
          <TH
            sort={sort}
            column={column}
            key={column.key}
            onSort={handleSort}
          />
        ))}
      </tr>
    </thead>
  );
}
