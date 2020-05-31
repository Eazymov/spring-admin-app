/* @flow strict */

export const INPUT_TYPES = {
  TEXT: ('text': 'text'),
  BUTTON: ('button': 'button'),
  SUBMIT: ('submit': 'submit'),
  PASSWORD: ('password': 'password'),
};

export type InputType = $Values<typeof INPUT_TYPES>;
