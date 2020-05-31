/* @flow strict */
import * as React from 'react';

export function useCallbackOnce<Args: $ReadOnlyArray<mixed>>(
  callback: (...args: Args) => void,
): (...args: Args) => void {
  const isCalledRef = React.useRef(false);

  return React.useMemo(
    () => (...args: Args) => {
      if (!isCalledRef.current) {
        isCalledRef.current = true;
        callback(...args);
      }
    },
    [callback],
  );
}
