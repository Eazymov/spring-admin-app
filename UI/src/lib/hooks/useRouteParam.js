/* @flow strict */
import { useRouteMatch } from 'react-router-dom';

export function useRouteParam<R>(
  paramName: string,
  transform: (value: null | string) => R,
): R {
  const { params } = useRouteMatch();
  const value = params[paramName] ?? null;

  return transform(value);
}
