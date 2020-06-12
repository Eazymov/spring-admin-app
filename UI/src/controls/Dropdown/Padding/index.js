/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';

type Props = {|
  className?: string,
  children: React.Node,
  onClick?: () => mixed,
|};

export function DropdownPadding(props: Props) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={props.onClick}
      className={CN(styles.DropdownPadding, props.className)}
    >
      {props.children}
    </div>
  );
}
