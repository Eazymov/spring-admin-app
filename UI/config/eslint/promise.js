/* @flow strict */

const promise = {
  extends: ['plugin:promise/recommended'],
  rules: {
    'promise/catch-or-return': 0,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/always-return': 2,
    'promise/no-nesting': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-callback-in-promise': 2,
    'promise/avoid-new': 2,
    'promise/no-new-statics': 2,
    'promise/no-return-in-finally': 2,
    'promise/valid-params': 2,
  },
  plugins: ['promise'],
  settings: {},
};

exports.promise = promise;
