/* @flow strict */
import styles from '../styles.module.scss';

import * as React from 'react';

import { Help } from '../../../Help';
import { CN } from '../../../../lib/string';
import type { Position } from '../../../Tooltip';

type Props = {|
  pos?: Position,
  error?: string,
  grow?: boolean,
  className?: string,
  children: React.Node,
|};

export function Control(props: Props) {
  const { error = null, pos = Help.positions.TOP } = props;
  const className = CN(styles.Control, props.className, {
    [styles.grow]: props.grow,
  });

  return (
    <Help pos={pos} text={error} maxWidth={250} className={className}>
      {props.children}
    </Help>
  );
}

Control.positions = Help.positions;
