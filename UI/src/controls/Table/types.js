/* @flow strict */
import * as React from 'react';

import type { Direction } from '../../constants/DIRECTIONS';

export type Sort = {|
  columnKey: string,
  direction: Direction,
|};

export type Column<R> = {|
  key: string,
  width?: number,
  sortable?: boolean,
  name: null | string,
  render: (record: R) => React.Node,
|};

export type Config<R> = {|
  columns: $ReadOnlyArray<Column<R>>,
|};
