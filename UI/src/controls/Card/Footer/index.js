/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';

type Props = {|
  className?: string,
  children: React.Node,
|};

export function CardFooter(props: Props) {
  return (
    <div className={CN(styles.CardFooter, props.className)}>
      {props.children}
    </div>
  );
}
