/* @flow strict */

const flowtype = {
  extends: ['plugin:flowtype/recommended'],
  rules: {
    // 'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]*)+T$'],
    'flowtype/array-style-simple-type': [2, 'shorthand'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/type-import-style': 0,
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      {
        annotationStyle: 'block',
      },
    ],
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/no-weak-types': [
      2,
      {
        any: false,
        Object: true,
        Function: true,
      },
    ],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-types-missing-file-annotation': 2,
  },
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};

exports.flowtype = flowtype;
