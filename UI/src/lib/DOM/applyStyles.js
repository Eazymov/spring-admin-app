/* @flow strict */
// eslint-disable-next-line import/no-unresolved
import type { StandardLonghandPropertiesHyphen } from 'csstype';

import { getKeys } from '../object';
import { isNull, isNumber } from '../is';

type P = $ObjMap<
  StandardLonghandPropertiesHyphen<string | number>,
  <V>(V) => null | V,
>;

export type Styles = $Shape<P>;

export function applyStyles($element: HTMLElement, cssStyles: null | Styles) {
  if (isNull(cssStyles)) {
    return $element.removeAttribute('style');
  }

  return getKeys(cssStyles).forEach(prop => {
    const value = cssStyles[prop];

    $element.style.setProperty(
      prop,
      isNumber(value) ? `${value.toString()}px` : value,
    );
  });
}
