/* @flow strict */
import * as React from 'react';

import { createRule } from './utils';

type Cache = {
  [key: string]: void | number,
  ...
};

const usersCache: Cache = {};

function addUser(key: string) {
  usersCache[key] = getUsersCount(key) + 1;
}

function removeUser(key: string) {
  usersCache[key] = Math.max(getUsersCount(key) - 1, 0);
}

function getUsersCount(key: string) {
  return usersCache[key] || 0;
}

export function useCssRule(
  gap: number,
  vertical: boolean,
  gapClassName: string,
) {
  React.useLayoutEffect(() => {
    addUser(gapClassName);

    if (getUsersCount(gapClassName) > 1) {
      return () => removeUser(gapClassName);
    }

    const rule = createRule(gap, vertical, gapClassName);

    rule.apply();

    return () => {
      removeUser(gapClassName);

      if (getUsersCount(gapClassName) === 0) {
        rule.remove();
      }
    };
  }, [gap, vertical, gapClassName]);
}
