/* @flow strict */
import * as React from 'react';
import ReactDOM from 'react-dom';

import { isNull } from '../../lib/is';

type Props = {|
  children: React.Node,
|};

export function BodyPortal(props: Props) {
  const { children } = props;
  const { body } = document;

  if (isNull(body)) {
    return null;
  }

  return ReactDOM.createPortal(children, body);
}

BodyPortal.displayName = 'BodyPortal';
