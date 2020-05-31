/* @flow strict */

export function isEventOfElement(event: Event, $el: HTMLElement) {
  const { target } = event;

  if (target instanceof Node) {
    return $el.contains(target);
  }

  return false;
}
