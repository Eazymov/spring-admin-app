/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';

type Props = {|
  active: boolean,
|};

export function SidebarLayer(props: Props) {
  const className = CN(styles.SidebarLayer, { [styles.active]: props.active });

  return <div className={className} />;
}
