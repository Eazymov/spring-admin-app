/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { TBody } from './TBody';
import { TFoot } from './TFoot';
import { THead } from './THead';
import { TLoader } from './TLoader';
import { ColGroup } from './ColGroup';
import type { Sort, Config } from './types';

type Props<R> = {|
  config: Config<R>,
  initialSort?: Sort,
  isLoading?: boolean,
  records: $ReadOnlyArray<R>,
  onSort?: (sort: Sort) => mixed,
|};

export function Table<R>(props: Props<R>) {
  const { isLoading = false, initialSort = null } = props;
  const { columns } = props.config;

  return (
    <div className={styles.container}>
      <table className={styles.Table}>
        <ColGroup columns={columns} />
        <THead
          columns={columns}
          onSort={props.onSort}
          initialSort={initialSort}
        />
        <TBody columns={columns} records={props.records} />
        <TFoot columns={columns} />
      </table>
      {isLoading && <TLoader />}
    </div>
  );
}
