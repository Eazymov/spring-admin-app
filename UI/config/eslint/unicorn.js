/* @flow strict */

const unicorn = {
  extends: [],
  rules: {
    'unicorn/no-unused-properties': 2,
    'unicorn/no-unreadable-array-destructuring': 2,
    'unicorn/no-console-spaces': 2,
    'unicorn/prefer-exponentiation-operator': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/no-unsafe-regex': 2,
    'unicorn/error-message': 2,
    'unicorn/prefer-spread': 0,
    'unicorn/regex-shorthand': 2,
    'unicorn/new-for-builtins': 2,
    'unicorn/import-index': 2,
    'unicorn/no-fn-reference-in-iterator': 0,
    'unicorn/prefer-type-error': 2,
    'unicorn/prefer-starts-ends-with': 2,
    'unicorn/custom-error-definition': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-array-instanceof': 2,
    'unicorn/escape-case': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/throw-new-error': 2,
    'unicorn/no-process-exit': 2,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/filename-case': 0,
    'unicorn/explicit-length-check': 2,
    'unicorn/catch-error-name': [2, { name: 'thrown' }],
    'unicorn/prefer-node-append': 0,
    'unicorn/prefer-query-selector': 0,
  },
  plugins: ['unicorn'],
  settings: {},
};

exports.unicorn = unicorn;
