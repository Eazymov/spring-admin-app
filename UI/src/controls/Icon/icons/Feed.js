/* @flow strict */
import * as React from 'react';

import type { Props } from './types';

export function Feed(props: Props) {
  return (
    <svg viewBox="0 0 22 20" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-103.000000, -113.000000)"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <g transform="translate(104.000000, 114.000000)">
            <path
              // eslint-disable-next-line max-len
              d="M4.00001126,4.12569527e-13 L20,0 L20,16 C20,17.1045695 19.1045695,18 18,18 L2,18.0000023 C0.8954305,18.0000023 1.3527075e-16,17.1045718 0,16.0000023 C-9.58042122e-23,16.0000016 4.58670139e-13,16.0000008 1.37645451e-12,16 L1.40782881e-05,5.99995307 L4.00001126,5.99995307 L4.00001126,4.12569527e-13 Z"
              strokeLinecap="round"
            />
            <path
              // eslint-disable-next-line max-len
              d="M4,6 L3.97885465,16.0253147 C3.97655296,17.1165764 3.09126406,18 2,18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              // eslint-disable-next-line max-len
              d="M9,5 L15,5"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              // eslint-disable-next-line max-len
              d="M9,9 L15,9"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              // eslint-disable-next-line max-len
              d="M9,13 L11,13"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
