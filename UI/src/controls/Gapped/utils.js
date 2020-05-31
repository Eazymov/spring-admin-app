/* @flow strict */
import { cssRule } from '../../lib/DOM/cssRule';

function getProperty(vertical) {
  return vertical ? 'margin-bottom' : 'margin-right';
}

function getSelector(className) {
  return `.${className} > *:not(:last-child)`;
}

export function createRule(gap: number, vertical: boolean, className: string) {
  const value = `${gap}px`;
  const property = getProperty(vertical);
  const selector = getSelector(className);

  return cssRule(selector, [{ property, value }]);
}
