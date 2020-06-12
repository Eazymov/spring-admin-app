/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

type Props = {|
  title: string,
  children?: React.Node,
|};

export function CardHeader(props: Props) {
  return (
    <div className={styles.CardHeader}>
      <h4 className={styles.title}>{props.title}</h4>
      <div>{props.children}</div>
    </div>
  );
}
