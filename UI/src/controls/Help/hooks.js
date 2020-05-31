/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { isNull } from '../../lib/is';

import type { Text } from './types';

export function useRender(text: Text, maxWidth?: number) {
  return React.useCallback(() => {
    if (isNull(text)) {
      return null;
    }

    return (
      <div style={{ maxWidth }} className={styles.text}>
        {text}
      </div>
    );
  }, [text, maxWidth]);
}
