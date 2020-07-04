/* @flow strict */
import styles from './styles.module.scss';

import { CN } from '../../lib/string';

type ClassNameConfig = {
  error?: boolean,
  ...
};

export function getClassName(config: ClassNameConfig) {
  return CN(styles.Input, {
    [styles.error]: config.error,
  });
}
