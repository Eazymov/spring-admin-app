/* @flow strict */
import * as React from 'react';
import emailMask from 'text-mask-addons/dist/emailMask';

import { MaskedInput } from '../Masked';

export type Props = {|
  value: string,
  error?: boolean,
  disabled?: boolean,
  placeholder?: string,
  onChange?: (value: string) => mixed,
|};

export function EmailInput(props: Props) {
  return (
    <MaskedInput
      mask={emailMask}
      error={props.error}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
    />
  );
}
