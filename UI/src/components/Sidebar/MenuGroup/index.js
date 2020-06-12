/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { MenuItem } from '../MenuItem';
import { CN } from '../../../lib/string';
import { isEmpty } from '../../../lib/is';
import type { Group } from '../../../navigation';

type Props = {|
  group: Group,
  collapsed: boolean,
|};

function useMenuRoutes(routes) {
  return React.useMemo(
    () =>
      routes.reduce((acc, cur) => {
        if (!cur.showInSidebar) {
          return acc;
        }

        acc.push(cur);

        return acc;
      }, []),
    [routes],
  );
}

export function MenuGroup(props: Props) {
  const { group, collapsed } = props;
  const menuRoutes = useMenuRoutes(group.routes);
  const className = CN(styles.MenuGroup, {
    [styles.isCollapsed]: collapsed,
  });

  if (isEmpty(menuRoutes)) {
    return null;
  }

  return (
    <div className={className}>
      <div className={styles.title}>{group.title}</div>
      <div className={styles.items}>
        {menuRoutes.map(menuItem => (
          <MenuItem
            item={menuItem}
            key={menuItem.title}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
}
