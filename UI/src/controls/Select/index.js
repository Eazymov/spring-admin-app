/* @flow strict */
import styles from './styles.scss';

import * as React from 'react';

import { Dropdown } from '../Dropdown';

type Props<T> = {|
  value: T,
  options: $ReadOnlyArray<T>,
  getKey: (option: T) => string,
  onChange: (option: T) => mixed,
  renderOption: (option: T) => React.Node,
|};

export function Select<T>(props: Props<T>) {
  const { getKey, onChange, renderOption } = props;

  return (
    <Dropdown className={styles.Select} label={renderOption(props.value)}>
      {({ blur }) => (
        <Dropdown.Padding onClick={blur}>
          {props.options.map(option => (
            <Dropdown.Item
              key={getKey(option)}
              onClick={() => onChange(option)}
            >
              {renderOption(option)}
            </Dropdown.Item>
          ))}
        </Dropdown.Padding>
      )}
    </Dropdown>
  );
}
