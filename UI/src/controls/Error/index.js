/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { isEmpty } from '../../lib/is';
import { BusinessError } from '../../lib/error';

type Props = {|
  error: BusinessError,
|};

export function Error(props: Props) {
  const { code, message } = props.error;
  const text = isEmpty(message) ? code : message;

  return <div className={styles.Error}>{text}</div>;
}
