/* @flow strict */
import * as React from 'react';

import { TRIGGERS, POSITIONS } from './constants';

export type Trigger = $Values<typeof TRIGGERS>;
export type Position = $Values<typeof POSITIONS>;

export type Edges = {|
  top: number,
  left: number,
  right: number,
  bottom: number,
|};

export type Rect = {|
  ...$Exact<Edges>,
  width: number,
  height: number,
|};

export type AutoShift = {|
  value: number,
  position: 'top' | 'left',
|};

export type ChildProps = {|
  isActive: boolean,
  blur: () => void,
|};

export type ArrowStyles = {|
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
  transform: string,
|};

export type Props = {|
  pos?: Position,
  delay?: number,
  shift?: number,
  width?: number,
  tabIndex?: number,
  trigger?: Trigger,
  className?: string,
  showArrow?: boolean,
  transition?: boolean,
  toggleMode?: boolean,
  interactive?: boolean,
  mountOnHover?: boolean,
  closeOnScroll?: boolean,
  children: React.Node | ((props: ChildProps) => React.Node),
  render: (props: ChildProps) => React.Node,
|};
