/* @flow strict */
import * as React from 'react';

import { isBool, isNull, isArray, isEmpty, isString } from '../is';

export function isEmptyNode(node: React.Node): boolean %checks {
  return (
    isBool(node) ||
    isNull(node) ||
    (isString(node) && isEmpty(node)) ||
    (isArray(node) && node.every(isEmptyNode))
  );
}
