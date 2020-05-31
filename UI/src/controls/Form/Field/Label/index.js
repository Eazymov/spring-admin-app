/* @flow strict */
import styles from '../styles.module.scss';

import * as React from 'react';

import { isDef } from '../../../../lib/is';
import { CN } from '../../../../lib/string';
import { type Size, LatinSize } from '../../../LatinSize';

type Props = {|
  size?: Size,
  grow?: boolean,
  className?: string,
  required?: boolean,
  children: null | React.Node,
|};

const requiredNode = (
  <span title="Обязательное поле" className={styles.requiredStar}>
    &nbsp;*
  </span>
);

export function Label(props: Props) {
  const { size, required = false } = props;
  const className = CN(styles.Label, props.className, {
    [styles.grow]: props.grow,
    [styles.fixedWidth]: isDef(size),
  });

  return (
    <LatinSize size={props.size} className={className}>
      {props.children}
      {required && requiredNode}
    </LatinSize>
  );
}

Label.sizes = LatinSize.sizes;
Label.validateSize = LatinSize.validateSize;
