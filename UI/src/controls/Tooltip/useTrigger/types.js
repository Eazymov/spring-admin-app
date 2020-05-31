/* @flow strict */

export type Config = {|
  delay: number,
  toggleMode: boolean,
  onBlur: () => mixed,
  onFocus: () => mixed,
  onHover: () => mixed,
  onToggle: () => mixed,
|};
