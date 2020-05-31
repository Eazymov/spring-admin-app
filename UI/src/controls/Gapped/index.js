/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { useCssRule } from './hooks';
import { CN } from '../../lib/string';

type Props = {|
  gap: number,
  vertical?: boolean,
  className?: string,
  children: React.Node,
  dataComponent?: string,
|};

const vClassName = styles.GappedVertical;
const hClassName = styles.GappedHorizontal;

export const Gapped = React.forwardRef<Props, HTMLDivElement>((props, ref) => {
  const { gap, vertical = false } = props;
  const baseClassName = vertical ? vClassName : hClassName;
  const gapClassName = `${baseClassName}-${gap}`;
  const className = CN(baseClassName, gapClassName, props.className);

  useCssRule(gap, vertical, gapClassName);

  return (
    <div ref={ref} className={className}>
      {props.children}
    </div>
  );
});
