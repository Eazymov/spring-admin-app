/* @flow strict */
import * as React from 'react';

import type { Props } from './types';

export function Add(props: Props) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 1h1v18h-1z" />
        <path d="M19 10v1H1v-1z" />
      </g>
    </svg>
  );
}
