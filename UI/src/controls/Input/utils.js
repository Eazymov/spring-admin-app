/* @flow strict */
import styles from './styles.module.scss';

import { CN } from '../../lib/string';

type ClassNameConfig = {
  error?: boolean,
  disabled?: boolean,
  className?: string,
  ...
};

export function getClassName(config: ClassNameConfig) {
  return CN(styles.Input, config.className, {
    [styles.error]: config.error,
    [styles.disabled]: config.disabled,
  });
}
