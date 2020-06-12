/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { MenuGroup } from '../MenuGroup';
import { Scrollbar } from '../../../controls';
import { navigation } from '../../../navigation';

type Props = {|
  collapsed: boolean,
|};

export function SidebarMenu(props: Props) {
  return (
    <Scrollbar className={styles.SidebarMenu}>
      {navigation.map(group => (
        <MenuGroup
          group={group}
          key={group.title}
          collapsed={props.collapsed}
        />
      ))}
    </Scrollbar>
  );
}
