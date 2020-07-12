/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { useRipple, useTabFocus } from '../../lib/hooks';

import { ButtonIcon } from './Icon';
import { ButtonText } from './Text';
import type { Props } from './types';
import { ButtonLoader } from './Loader';
import { getTitle, getButtonCn, handleTabFocus } from './utils';
import { DEFAULT_TYPE, BUTTON_SIZES, BUTTON_THEMES } from './constants';

export function Button(props: Props) {
  const {
    loading = false,
    leftIcon = null,
    rightIcon = null,
    disabled = false,
    type = DEFAULT_TYPE,
  } = props;
  const ripple = useRipple();
  const title = getTitle(props);
  const className = getButtonCn(props);
  const asDisabled = disabled || loading;
  const onTabFocus = useTabFocus(handleTabFocus);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      tabIndex="0"
      title={title}
      onFocus={onTabFocus}
      disabled={asDisabled}
      className={className}
      onClick={props.onClick}
      aria-disabled={asDisabled}
      onMouseDown={ripple.onMouseDown}
    >
      {loading && <ButtonLoader />}
      <span className={styles.children}>
        <ButtonIcon icon={leftIcon} className={styles.leftIcon} />
        <ButtonText>{props.children}</ButtonText>
        <ButtonIcon icon={rightIcon} className={styles.rightIcon} />
      </span>
    </button>
  );
}

Button.sizes = BUTTON_SIZES;
Button.themes = BUTTON_THEMES;
