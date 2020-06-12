/* @flow strict */
import * as React from 'react';

import type { Props } from './types';

export function ChevronDown(props: Props) {
  return (
    <svg viewBox="4 5 8 9" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        // eslint-disable-next-line max-len
        d="M8,10.0009766 L11.0009766,7 C11.3746763,7 11.6321608,7.10937391 11.7734375,7.328125 C11.9147142,7.54687609 11.9899088,7.73828043 11.9990234,7.90234375 L11.9990234,7.99804688 L8,11.9970703 L4.00097656,7.99804688 L4.00097656,7.88867188 C4.03743508,7.5195294 4.20833181,7.25976638 4.51367188,7.109375 C4.65039131,7.03645797 4.81217354,7 4.99902344,7 L8,10.0009766 Z"
      />
    </svg>
  );
}
