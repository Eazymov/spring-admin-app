/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';
import { isEmptyNode } from '../../../lib/react';

type Props = {|
  icon: React.Node,
  className: string,
|};

export function ButtonIcon(props: Props) {
  const { icon } = props;
  const className = CN(styles.ButtonIcon, props.className);

  if (isEmptyNode(icon)) {
    return null;
  }

  return <span className={className}>{icon}</span>;
}
