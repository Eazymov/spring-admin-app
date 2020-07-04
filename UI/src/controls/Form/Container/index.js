/* @flow strict */
import styles from './styles.scss';

import * as React from 'react';

import { Col } from '../Col';

type Props = {|
  children: React.ChildrenArray<null | false | React.Element<typeof Col>>,
|};

export function Container(props: Props) {
  return <div className={styles.Container}>{props.children}</div>;
}
