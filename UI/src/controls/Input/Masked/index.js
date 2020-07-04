/* @flow strict */
import * as React from 'react';
import TextMask, { type Mask } from 'react-text-mask';

import { getClassName } from '../utils';
import { noop } from '../../../lib/func';
import { INPUT_TYPES } from '../../../constants';
import { enforceNonNull } from '../../../lib/enforce';

export type Props = {|
  mask: Mask,
  error?: boolean,
  disabled?: boolean,
  value: null | string,
  placeholder?: string,
  onChange?: (value: string) => mixed,
|};

export function MaskedInput(props: Props) {
  const { onChange = noop } = props;
  const ref = React.useRef(null);

  function handleChange(event: SyntheticEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    onChange(value);
  }

  React.useEffect(() => {
    enforceNonNull(ref.current).textMaskInputElement.update();
  });

  return (
    <TextMask
      ref={ref}
      guide={false}
      mask={props.mask}
      value={props.value}
      // It's important to use also onBlur
      // See https://github.com/text-mask/text-mask/issues/992
      onBlur={handleChange}
      onChange={handleChange}
      type={INPUT_TYPES.TEXT}
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={getClassName(props)}
    />
  );
}
