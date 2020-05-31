/* @flow strict */
import * as React from 'react';

import type { ObjectRef } from '../../types';

export function useAutoRef<T>(value: T): ObjectRef<T> {
  const ref = React.useRef<T>(value);

  ref.current = value;

  return ref;
}
