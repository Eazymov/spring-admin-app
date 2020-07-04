/* @flow strict */
import { TextInput } from './Text';
import { EmailInput } from './Email';
import { PasswordInput } from './Password';
import { INPUT_AUTOCOMPLETE } from './constants';

export const Input = {
  Text: TextInput,
  Email: EmailInput,
  Password: PasswordInput,
  autoComplete: INPUT_AUTOCOMPLETE,
};
