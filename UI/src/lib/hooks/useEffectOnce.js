/* @flow strict */
import * as React from 'react';

const emptyArr = [];

type Callback = () => void | (() => void);

export function useEffectOnce(callback: Callback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, emptyArr);
}
