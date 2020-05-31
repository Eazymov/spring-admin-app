/* @flow strict */
import { AUTOCOMPLETE } from '../../constants';

export const INPUT_AUTOCOMPLETE = {
  ...AUTOCOMPLETE,
};

export type InputAutoComplete = $Values<typeof INPUT_AUTOCOMPLETE>;
