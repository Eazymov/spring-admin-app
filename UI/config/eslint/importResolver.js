/* @flow strict */

const importResolver = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'import/first': 2,
    'import/export': 2,
    'import/default': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-useless-path-segments': 2,
    'import/no-unresolved': 2,
    'import/no-unassigned-import': 2,
    'import/no-self-import': 2,
    'import/no-mutable-exports': 2,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 0,
    'import/no-anonymous-default-export': 2,
    'import/no-amd': 2,
    'import/no-absolute-path': 2,
    'import/newline-after-import': 2,
    'import/order': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [2, { js: 'never', json: 'always' }],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  plugins: [],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.js.flow'],
          },
        },
      },
    },
  },
};

exports.importResolver = importResolver;
