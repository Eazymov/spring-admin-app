/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CN } from '../../../lib/string';
import { isDef, isString } from '../../../lib/is';

type Props = {|
  path?: string,
  title?: string,
  icon?: React.Node,
  className?: string,
  disabled?: boolean,
  children: React.Node,
  interactive?: boolean,
  onClick?: () => mixed,
|};

function getButtonTitle(title, children) {
  if (isDef(title)) {
    return title;
  }

  if (isString(children)) {
    return children;
  }

  return '';
}

export function DropdownItem(props: Props) {
  const { icon, children, disabled = false, interactive = true } = props;
  const buttonTitle = getButtonTitle(props.title, children);
  const className = CN(styles.DropdownItem, props.className, {
    [styles.disabled]: disabled,
    [styles.interactive]: interactive,
  });

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      title={buttonTitle}
      disabled={disabled}
      className={className}
      onClick={props.onClick}
    >
      {isDef(icon) ? <div className={styles.icon}>{icon}</div> : null}
      <div className={styles.text}>{children}</div>
    </div>
  );
}
