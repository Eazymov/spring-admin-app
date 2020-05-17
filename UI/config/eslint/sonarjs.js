/* @flow strict */

const sonarjs = {
  extends: ['plugin:sonarjs/recommended'],
  rules: {
    'sonarjs/prefer-while': 2,
    'sonarjs/prefer-single-boolean-return': 2,
    'sonarjs/prefer-object-literal': 2,
    'sonarjs/prefer-immediate-return': 2,
    'sonarjs/no-useless-catch': 2,
    'sonarjs/no-use-of-empty-return-value': 2,
    'sonarjs/no-small-switch': 2,
    'sonarjs/no-redundant-boolean': 2,
    'sonarjs/no-one-iteration-loop': 2,
    'sonarjs/no-inverted-boolean-check': 2,
    'sonarjs/no-identical-functions': 2,
    'sonarjs/no-identical-expressions': 2,
    'sonarjs/no-identical-conditions': 2,
    'sonarjs/no-extra-arguments': 2,
    'sonarjs/no-element-overwrite': 2,
    'sonarjs/no-duplicated-branches': 2,
    'sonarjs/no-duplicate-string': 2,
    'sonarjs/no-all-duplicated-branches': 2,
  },
  plugins: ['sonarjs'],
  settings: {},
};

exports.sonarjs = sonarjs;
