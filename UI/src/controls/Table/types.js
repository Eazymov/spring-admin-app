/* @flow strict */
import * as React from 'react';

export type Column<R> = {|
  key: string,
  width?: number,
  name: null | string,
  render: (record: R) => React.Node,
|};

export type Config<R> = {|
  columns: $ReadOnlyArray<Column<R>>,
|};
