/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../lib/string';

type Props = {|
  active: boolean,
  className?: string,
  onClick?: () => mixed,
|};

export function BurgerButton(props: Props) {
  const className = CN(styles.BurgerButton, props.className, {
    [styles.active]: props.active,
  });

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={className} onClick={props.onClick}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  );
}
