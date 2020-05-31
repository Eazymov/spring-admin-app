/* @flow strict */
import { TextInput } from './Text';
import { PasswordInput } from './Password';
import { INPUT_AUTOCOMPLETE } from './constants';

export const Input = {
  Text: TextInput,
  Password: PasswordInput,
  autoComplete: INPUT_AUTOCOMPLETE,
};
