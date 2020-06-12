/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';

type Props = {|
  className?: string,
  children: React.Node,
|};

export function CardBody(props: Props) {
  return (
    <div className={CN(styles.CardBody, props.className)}>{props.children}</div>
  );
}
