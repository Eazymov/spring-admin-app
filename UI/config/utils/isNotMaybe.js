/* @flow strict */

function isNotMaybe(arg /* ::: mixed */) /* ::: boolean %checks */ {
  return arg !== null && typeof arg !== 'undefined';
}

exports.isNotMaybe = isNotMaybe;
