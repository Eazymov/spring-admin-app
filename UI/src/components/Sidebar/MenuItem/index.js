/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { CN } from '../../../lib/string';
import { isString } from '../../../lib/is';
import type { SidebarRoute } from '../../../navigation';

type Props = {|
  item: SidebarRoute,
  collapsed: boolean,
|};

export function MenuItem(props: Props) {
  const { item } = props;
  const { path } = item;
  const className = CN(styles.MenuItem, {
    [styles.isCollapsed]: props.collapsed,
  });
  const pathValue = isString(path) ? path : path();

  return (
    <NavLink
      to={pathValue}
      className={className}
      activeClassName={styles.active}
    >
      <item.icon className={styles.icon} />
      <span className={styles.text}>{item.title}</span>
    </NavLink>
  );
}
