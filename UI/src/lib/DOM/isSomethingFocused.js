/* @flow strict */

export function isSomethingFocused() {
  const { body, activeElement } = document;

  return activeElement !== body && activeElement !== null;
}
