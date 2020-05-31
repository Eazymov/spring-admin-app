/* @flow strict */
import { KEY_CODES } from '../../constants';

export function isTabEvent(event: KeyboardEvent) {
  return event.keyCode === KEY_CODES.TAB;
}
