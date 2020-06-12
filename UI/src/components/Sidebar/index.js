/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { useIsOpen } from './isOpen';
import { SidebarMenu } from './Menu';
import { CN } from '../../lib/string';
import { SidebarLayer } from './Layer';
import { useToggle } from '../../lib/hooks';
import { BurgerButton } from '../BurgerButton';

type Props = {||};

export function Sidebar(props: Props) {
  const [isHovered, hover] = useToggle();
  const [isOpen, actions] = useIsOpen();
  const className = CN(styles.Sidebar, {
    [styles.isOpen]: isOpen,
    [styles.isHovered]: isHovered,
  });

  return (
    <>
      <nav
        className={className}
        onMouseEnter={hover.turnOn}
        onMouseLeave={hover.turnOff}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Admin</h2>
          <BurgerButton
            active={!isOpen}
            onClick={actions.toggle}
            className={styles.burgerButton}
          />
        </div>
        <SidebarMenu collapsed={!isOpen && !isHovered} />
      </nav>
      <SidebarLayer active={!isOpen && isHovered} />
    </>
  );
}
