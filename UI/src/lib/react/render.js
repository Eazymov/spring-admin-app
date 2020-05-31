/* @flow strict */
import * as React from 'react';
import invariant from 'invariant';
import * as ReactDOM from 'react-dom';

import { isNotNull } from '../is';

export function render<E: React.ElementType>(
  node: React.Element<E>,
  $element: HTMLElement | null,
) {
  invariant(
    isNotNull($element),
    "Can't render component because element is null",
  );

  ReactDOM.render(<React.StrictMode>{node}</React.StrictMode>, $element);
}
