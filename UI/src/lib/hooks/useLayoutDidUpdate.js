/* @flow strict */
import * as React from 'react';

export function useLayoutDidUpdate<V>(
  value: V,
  callback: (prevValue: V) => mixed,
) {
  const prevValueRef = React.useRef(value);

  React.useLayoutEffect(() => {
    const prevValue = prevValueRef.current;

    prevValueRef.current = value;

    if (prevValue !== value) {
      callback(prevValue);
    }
  }, [value, callback]);
}
