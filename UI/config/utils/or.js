/* @flow strict */
const { isNotMaybe } = require('./isNotMaybe');

function or /* ::<T> */(first /* ::: ?T */, fallback /* ::: T */) /* ::: T */ {
  return isNotMaybe(first) ? first : fallback;
}

exports.or = or;
