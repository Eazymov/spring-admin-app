/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import {
  type Trigger as TooltipTrigger,
  type Position as TooltipPosition,
  Tooltip,
} from '../Tooltip';
import { Icon } from '../Icon';
import { CN } from '../../lib/string';
import { DropdownItem } from './Item';
import { DropdownPadding } from './Padding';

type ChildProps = {|
  isActive: boolean,
  blur: () => void,
|};

type Props = {|
  label: React.Node,
  className?: string,
  children: (props: ChildProps) => React.Node,
|};

const chevronDownIconNode = <Icon.icons.ChevronDown className={styles.icon} />;

export function Dropdown(props: Props) {
  const className = CN(styles.Dropdown, props.className);

  return (
    <Tooltip showArrow className={className} render={props.children}>
      {({ isActive }) => (
        <div className={styles.label}>
          <span className={styles.text}>{props.label}</span>
          {chevronDownIconNode}
        </div>
      )}
    </Tooltip>
  );
}

export type Trigger = TooltipTrigger;
export type Position = TooltipPosition;

Dropdown.Item = DropdownItem;
Dropdown.Padding = DropdownPadding;
Dropdown.triggers = Tooltip.triggers;
Dropdown.positions = Tooltip.positions;
