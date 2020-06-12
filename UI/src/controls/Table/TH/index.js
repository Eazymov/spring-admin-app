/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';
import type { Sort, Column } from '../types';
import { isDef, isTrue } from '../../../lib/is';
import { DIRECTIONS } from '../../../constants/DIRECTIONS';

type Props<R> = {|
  sort?: null | Sort,
  column: Column<R>,
  onSort?: (column: Column<R>) => mixed,
|};

export function TH<R>(props: Props<R>) {
  const { sort, onSort, column } = props;
  const sortable = isDef(sort) && isDef(onSort) && isTrue(column.sortable);
  const handleSort = React.useCallback(() => {
    if (!onSort) {
      return;
    }

    if (isTrue(column.sortable)) {
      onSort(column);
    }
  }, [onSort, column]);

  return (
    <th
      onClick={handleSort}
      className={CN(styles.TH, {
        [styles.sortable]: sortable,
        [styles.sorted]: sort?.columnKey === column.key,
        [styles.asc]: sort?.direction === DIRECTIONS.ASC,
        [styles.desc]: sort?.direction === DIRECTIONS.DESC,
      })}
    >
      {column.name}
    </th>
  );
}
