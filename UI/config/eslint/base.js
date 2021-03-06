/* @flow strict */
/* eslint-disable sonarjs/no-duplicate-string */

const base = {
  extends: ['airbnb', 'react-app'],
  rules: {
    yoda: 2,
    'yield-star-spacing': [2, 'after'],
    'wrap-iife': [2, 'inside'],
    'vars-on-top': 2,
    'valid-typeof': 2,
    'use-isnan': 2,
    'unicode-bom': [2, 'never'],
    'template-tag-spacing': [2, 'never'],
    'template-curly-spacing': 2,
    'symbol-description': 2,
    'switch-colon-spacing': [2, { after: true, before: false }],
    strict: [2, 'never'],
    'spaced-comment': [2, 'always'],
    'space-unary-ops': 2,
    'space-infix-ops': 2,
    'space-in-parens': [2, 'never'],
    'space-before-blocks': [2, 'always'],
    'object-shorthand': 2,
    semi: [2, 'always'],
    'semi-style': [2, 'last'],
    'semi-spacing': [2, { before: false, after: true }],
    'rest-spread-spacing': [2, 'never'],
    'require-yield': 2,
    'require-await': 2,
    'require-atomic-updates': 2,
    radix: 2,
    quotes: [2, 'single', { avoidEscape: true }],
    'quote-props': [2, 'as-needed'],
    'prefer-template': 2,
    'prefer-spread': 2,
    'prefer-rest-params': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-object-spread': 2,
    'prefer-numeric-literals': 2,
    'prefer-destructuring': 2,
    'prefer-const': 2,
    'prefer-arrow-callback': 2,
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['let'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: ['*'], next: 'return' },
      { blankLine: 'always', prev: ['block-like'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: 'block-like' },
      { blankLine: 'always', prev: ['*'], next: 'continue' },
      { blankLine: 'always', prev: ['case'], next: 'case' },
      { blankLine: 'always', prev: ['*'], next: 'default' },
      { blankLine: 'always', prev: ['export'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: 'export' },
      { blankLine: 'any', prev: ['export'], next: 'export' },
      { blankLine: 'always', prev: ['import'], next: '*' },
      { blankLine: 'any', prev: ['import'], next: 'import' },
      { blankLine: 'always', prev: ['*'], next: 'throw' },
    ],
    'padded-blocks': [2, 'never'],
    'operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } },
    ],
    'operator-assignment': [2, 'always'],
    'one-var': [2, 'never'],
    'object-property-newline': 2,
    'object-curly-spacing': [2, 'always'],
    curly: [2, 'all'],
    'no-with': 2,
    'no-whitespace-before-property': 2,
    'no-warning-comments': 1,
    'no-void': 2,
    'no-var': 2,
    'no-useless-return': 2,
    'no-useless-rename': 2,
    'no-useless-escape': 2,
    'no-useless-constructor': 2,
    'no-useless-concat': 2,
    'no-useless-computed-key': 2,
    'no-useless-catch': 2,
    'no-useless-call': 2,
    'no-use-before-define': 2,
    'no-unused-vars': 2,
    'no-unused-expressions': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-finally': 2,
    'no-unreachable': 2,
    'no-unneeded-ternary': 2,
    'no-unmodified-loop-condition': 2,
    'no-unexpected-multiline': 2,
    'no-underscore-dangle': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-trailing-spaces': 2,
    'no-throw-literal': 2,
    'no-this-before-super': 2,
    'no-template-curly-in-string': 2,
    'no-tabs': 2,
    'no-sparse-arrays': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-sequences': 2,
    'no-self-compare': 2,
    'no-self-assign': 2,
    'no-script-url': 2,
    'no-return-await': 2,
    'no-return-assign': 2,
    'no-regex-spaces': 2,
    'no-redeclare': 2,
    'no-proto': 2,
    'no-plusplus': 2,
    'no-path-concat': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-obj-calls': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-new-symbol': 2,
    'no-new-require': 2,
    'no-new-object': 2,
    'no-new-func': 2,
    'no-nested-ternary': 2,
    'no-negated-condition': 2,
    'no-native-reassign': 2,
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'no-multi-spaces': 2,
    'no-multi-assign': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-misleading-character-class': 2,
    'no-loop-func': 2,
    'no-lonely-if': 2,
    'no-lone-blocks': 2,
    'no-labels': 2,
    'no-iterator': 2,
    'no-invalid-regexp': 2,
    'no-inner-declarations': 2,
    'no-implied-eval': 2,
    'no-implicit-coercion': 2,
    'no-global-assign': 2,
    'no-func-assign': 2,
    'no-floating-decimal': 2,
    'no-fallthrough': 2,
    'no-extra-semi': 2,
    'no-extra-boolean-cast': 2,
    'no-extend-native': 2,
    'no-ex-assign': 2,
    'no-eval': 2,
    'no-eq-null': 2,
    'no-empty': 2,
    'no-empty-pattern': 2,
    'no-empty-function': 2,
    'no-empty-character-class': 2,
    'no-else-return': 2,
    'no-duplicate-imports': 2,
    'no-duplicate-case': 2,
    'no-dupe-keys': 2,
    'no-dupe-class-members': 2,
    'no-dupe-args': 2,
    'no-div-regex': 2,
    'no-delete-var': 2,
    'no-debugger': 1,
    'no-continue': 0,
    'no-control-regex': 2,
    'no-constant-condition': 2,
    'no-const-assign': 2,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-cond-assign': 2,
    'no-compare-neg-zero': 2,
    'no-class-assign': 2,
    'no-catch-shadow': 2,
    'no-case-declarations': 0,
    'no-caller': 2,
    'no-buffer-constructor': 2,
    'no-bitwise': 2,
    'no-await-in-loop': 2,
    'no-async-promise-executor': 2,
    'no-array-constructor': 2,
    'no-alert': 2,
    'newline-per-chained-call': 2,
    'new-parens': 2,
    'new-cap': 2,
    'max-len': [
      2,
      {
        code: 80,
        tabWidth: 2,
      },
    ],
    'lines-between-class-members': [
      2,
      'always',
      { exceptAfterSingleLine: true },
    ],
    'linebreak-style': [2, 'unix'],
    'no-param-reassign': 0,
    'handle-callback-err': 2,
    'guard-for-in': 2,
    'getter-return': 2,
    'generator-star-spacing': [
      2,
      {
        before: false,
        after: true,
        anonymous: 'neither',
        method: { before: true, after: true },
      },
    ],
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'func-names': [2, 'always'],
    'func-call-spacing': [2, 'never'],
    'for-direction': 2,
    eqeqeq: 2,
    'eol-last': 2,
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'default-case': 2,
    'constructor-super': 2,
    'consistent-return': 2,
    'computed-property-spacing': [2, 'never'],
    'accessor-pairs': [2, { getWithoutSet: true }],
    'comma-style': [2, 'last'],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'class-methods-use-this': 2,
    'capitalized-comments': [
      2,
      'always',
      {
        ignorePattern: 'pragma|ignored|flowlint',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    ],
    camelcase: 2,
    'brace-style': ['error', '1tbs'],
    'block-spacing': [2, 'always'],
    'block-scoped-var': 2,
    'arrow-spacing': [2, { before: true, after: true }],
    'array-callback-return': 2,
    'array-bracket-spacing': [2, 'never'],
    'global-require': 0,
    'no-prototype-builtins': 0,
  },
  plugins: [],
  settings: {},
};

exports.base = base;
