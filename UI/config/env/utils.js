/* @flow strict */
const { DEFAULTS } = require('./DEFAULTS');
const { isNotMaybe } = require('../utils/isNotMaybe');

/* ::
type Defaults = typeof DEFAULTS;

type EnvOrDefault = <K: $Keys<Defaults>>(
  key: K,
) => $ElementType<Defaults, K>;

type GetKeysMap = <O: { ... }>(obj: O) => $ObjMapi<O, <K>(K) => K>;
*/

const envOrDefault /* ::: EnvOrDefault */ = key => {
  const env = process.env[key];

  return isNotMaybe(env) ? env : DEFAULTS[key];
};

const getKeysMap /* ::: GetKeysMap */ = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = key;

    return acc;
  }, {});
};

module.exports = { getKeysMap, envOrDefault };
