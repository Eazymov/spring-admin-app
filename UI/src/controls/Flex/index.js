/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../lib/string';
import { type Align, type Justify, ALIGN, JUSTIFY } from './constants';

type Props = {|
  id?: string,
  grow?: number,
  align?: Align,
  title?: string,
  wrap?: boolean,
  inline?: boolean,
  justify?: Justify,
  className?: string,
  vertical?: boolean,
  children: React.Node,
  dataComponent?: string,
|};

export function Flex(props: Props) {
  const className = CN(styles.Flex, props.className, {
    [styles.wrap]: props.wrap,
    [styles.inline]: props.inline,
    [styles.vertical]: props.vertical,
  });
  const style = {
    flexGrow: props.grow,
    alignItems: props.align,
    justifyContent: props.justify,
  };

  return (
    <div id={props.id} style={style} title={props.title} className={className}>
      {props.children}
    </div>
  );
}

Flex.justify = JUSTIFY;
Flex.alignItems = ALIGN;
