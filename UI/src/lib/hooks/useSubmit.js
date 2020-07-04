/* @flow strict */
import * as React from 'react';
import { useHistory } from 'react-router-dom';

export function useSubmit<F, R>(
  onSubmit: (form: F) => Promise<R | Error>,
  getBackRoute: (result: R) => string,
): (form: F, isValid: boolean) => void {
  const history = useHistory();

  return React.useCallback(
    (form, isValid) => {
      if (isValid) {
        onSubmit(form).then(result => {
          if (result instanceof Error) {
            return result;
          }

          return history.push(getBackRoute(result));
        });
      }
    },
    [history, onSubmit, getBackRoute],
  );
}
