/* @flow strict */
import invariant from 'invariant';

import { TAG_NAMES } from '../../constants';
import { isNotNull, isNotMaybe } from '../is';

type Declaration = {|
  value: string,
  property: string,
|};

const RULE_INDEX = 0;

function getHead() {
  const { head } = document;

  invariant(isNotNull(head), 'Unexpected document.head === null');

  return head;
}

function createStyle() {
  const $style = document.createElement(TAG_NAMES.STYLE);

  $style.type = 'text/css';

  return $style;
}

export function cssRule(
  selector: string,
  declarations: $ReadOnlyArray<Declaration>,
) {
  const $head = getHead();
  const $style = createStyle();
  const rule = `
    ${selector} {
      ${declarations
        .map(declaration => `${declaration.property}: ${declaration.value};`)
        .join('')}
    }
  `;

  function apply() {
    $head.appendChild($style);

    const { sheet } = $style;

    invariant(
      isNotMaybe(sheet),
      `Unexpected HTMLStyleElement.sheet === ${String(sheet)}`,
    );

    sheet.insertRule(rule, RULE_INDEX);
  }

  function remove() {
    if ($head.contains($style)) {
      $head.removeChild($style);
    }
  }

  return {
    apply,
    remove,
  };
}
