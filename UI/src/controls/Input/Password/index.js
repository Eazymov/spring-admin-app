/* @flow strict */
import * as React from 'react';

import { getClassName } from '../utils';
import { noop } from '../../../lib/func';
import { INPUT_TYPES } from '../../../constants';
import type { InputAutoComplete } from '../constants';

export type Props = {|
  error?: boolean,
  className?: string,
  disabled?: boolean,
  value: null | string,
  placeholder?: string,
  autoComplete?: InputAutoComplete,
  onChange?: (value: string) => mixed,
|};

export function PasswordInput(props: Props) {
  const { onChange = noop } = props;

  function handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    onChange(value);
  }

  return (
    <input
      value={props.value}
      onChange={handleChange}
      disabled={props.disabled}
      type={INPUT_TYPES.PASSWORD}
      placeholder={props.placeholder}
      className={getClassName(props)}
      autoComplete={props.autoComplete}
    />
  );
}
