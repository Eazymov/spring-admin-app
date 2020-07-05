/* @flow strict */
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { isString } from '../is';

export function useSubmit<F, R>(
  onSubmit: (form: F) => Promise<R | Error>,
  backRoute: string | ((result: R) => string),
): (form: F, isValid: boolean) => void {
  const history = useHistory();

  return React.useCallback(
    (form, isValid) => {
      if (isValid) {
        onSubmit(form).then(result => {
          if (result instanceof Error) {
            return result;
          }

          const route = isString(backRoute) ? backRoute : backRoute(result);

          return history.push(route);
        });
      }
    },
    [history, onSubmit, backRoute],
  );
}
