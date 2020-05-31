/* @flow strict */
import invariant from 'invariant';

import { isNotNull } from '../is';
import { isTabEvent } from '../event';
import { EVENTS } from '../../constants';

let isPressed = false;
const { body: $body } = document;

invariant(isNotNull($body), 'Unexpected null body');

function onKeyDown(event: KeyboardEvent) {
  if (isTabEvent(event)) {
    isPressed = true;
  }
}

function onKeyUp(event: KeyboardEvent) {
  if (isTabEvent(event)) {
    isPressed = false;
  }
}

$body.addEventListener(EVENTS.KEY_DOWN, onKeyDown, true);
$body.addEventListener(EVENTS.KEY_UP, onKeyUp, true);

export function isTabPressed() {
  return isPressed;
}
