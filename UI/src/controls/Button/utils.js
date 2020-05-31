/* @flow strict */
import sizes from './sizes.module.scss';
import themes from './themes.module.scss';
import styles from './styles.module.scss';

import {
  DEFAULT_SIZE,
  BUTTON_SIZES,
  DEFAULT_THEME,
  BUTTON_THEMES,
} from './constants';
import type { Props } from './types';
import { CN } from '../../lib/string';
import { isDef, isNull } from '../../lib/is';

const sizesMap = {
  [BUTTON_SIZES.BIG]: sizes.big,
  [BUTTON_SIZES.SMALL]: sizes.small,
  [BUTTON_SIZES.MEDIUM]: sizes.medium,
};

const themesMap = {
  [BUTTON_THEMES.DANGER]: themes.danger,
  [BUTTON_THEMES.DEFAULT]: themes.default,
  [BUTTON_THEMES.PRIMARY]: themes.primary,
  [BUTTON_THEMES.WARNING]: themes.warning,
};

export function getButtonCn(props: Props) {
  const { size = DEFAULT_SIZE, theme = DEFAULT_THEME } = props;
  const iconExist = isDef(props.leftIcon) || isDef(props.rightIcon);
  const onlyIcon = iconExist && isNull(props.children);

  return CN(styles.Button, sizesMap[size], props.className, themesMap[theme], {
    [themes.bold]: props.bold,
    [styles.onlyIcon]: onlyIcon,
    [styles.narrow]: props.narrow,
    [styles.loading]: props.loading,
    [styles.stretch]: props.stretch,
    [styles.disabled]: props.disabled,
  });
}

export function getTitle(props: Props) {
  const { title, disabled = false, isLoading = false } = props;

  if (isDef(title)) {
    return title;
  }

  if (isLoading) {
    return 'Загрузка...';
  }

  if (disabled) {
    return 'Действие недоступно';
  }

  return null;
}

export function handleTabFocus(event: SyntheticEvent<HTMLButtonElement>) {
  const { currentTarget: $button } = event;

  $button.classList.add(styles.tabFocused);

  return () => {
    $button.classList.remove(styles.tabFocused);
  };
}
