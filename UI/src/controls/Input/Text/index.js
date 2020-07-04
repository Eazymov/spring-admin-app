/* @flow strict */
import * as React from 'react';

import { getClassName } from '../utils';
import { noop } from '../../../lib/func';
import { INPUT_TYPES } from '../../../constants';
import type { InputAutoComplete } from '../constants';

export type Props = {|
  value: string,
  error?: boolean,
  readOnly?: boolean,
  placeholder?: string,
  autoComplete?: InputAutoComplete,
  onChange?: (value: string) => mixed,
|};

export function TextInput(props: Props) {
  const { onChange = noop } = props;

  function handleChange(event: SyntheticInputEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    onChange(value);
  }

  return (
    <input
      value={props.value}
      onChange={handleChange}
      type={INPUT_TYPES.TEXT}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      className={getClassName(props)}
      autoComplete={props.autoComplete}
    />
  );
}
