/* @flow strict */
import * as React from 'react';

import { formatError } from '../error';

export function useError() {
  const [error, setError] = React.useState(null);

  const handleError = React.useCallback((thrown: mixed) => {
    const err = formatError(thrown);

    setError(err);

    return err;
  }, []);

  return [error, handleError];
}
