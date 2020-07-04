/* @flow strict */
import * as React from 'react';

import { Select } from '../Select';
import { User } from '../../contracts';

type Props = {|
  value: User.Role,
  onChange: (role: User.Role) => mixed,
|};

const options = User.rolesEnum.toArray();

function getKey(option) {
  return option.value;
}

function renderOption(option) {
  return option.label;
}

export function UserRoleSelect(props: Props) {
  const { value, onChange } = props;

  const handleChange = React.useCallback(option => onChange(option.value), [
    onChange,
  ]);

  return (
    <Select
      getKey={getKey}
      options={options}
      onChange={handleChange}
      renderOption={renderOption}
      value={User.rolesEnum.getByValue(value)}
    />
  );
}
