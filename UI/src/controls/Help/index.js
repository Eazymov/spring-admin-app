/* @flow strict */
import * as React from 'react';

import type { Text } from './types';
import { useRender } from './hooks';
import { type Position, Tooltip } from '../Tooltip';

type Props = {|
  text: Text,
  pos?: Position,
  tabIndex?: number,
  maxWidth?: number,
  className?: string,
  children: React.Node,
|};

export function Help(props: Props) {
  const { pos = Tooltip.positions.TOP } = props;
  const render = useRender(props.text, props.maxWidth);

  return (
    <Tooltip
      pos={pos}
      showArrow
      transition
      mountOnHover
      closeOnScroll
      render={render}
      interactive={false}
      tabIndex={props.tabIndex}
      className={props.className}
      trigger={Tooltip.triggers.HOVER}
    >
      {props.children}
    </Tooltip>
  );
}

Help.positions = Tooltip.positions;
