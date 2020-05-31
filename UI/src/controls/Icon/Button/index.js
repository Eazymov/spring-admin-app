/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';
import typeof * as Icons from '../icons';
import typeof { IconSize } from '../Size';

export type IconVariant = $Values<Icons>;

export type Props = {|
  title?: string,
  className?: string,
  children: React.Element<IconSize> | React.Element<IconVariant>,
  onClick?: (event: SyntheticEvent<HTMLElement>) => mixed,
|};

export function IconButton(props: Props) {
  return (
    <button
      tabIndex={0}
      type="button"
      title={props.title}
      onClick={props.onClick}
      className={CN(styles.IconButton, props.className)}
    >
      {props.children}
    </button>
  );
}
