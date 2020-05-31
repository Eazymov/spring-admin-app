/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';

type Props = {|
  children: string,
  className?: string,
|};

export function Title(props: Props) {
  return (
    <div className={CN(styles.Title, props.className)}>{props.children}</div>
  );
}
