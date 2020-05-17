/* @flow strict */

const cssModules = {
  extends: ['plugin:css-modules/recommended'],
  rules: {
    'css-modules/no-unused-class': 0,
    'css-modules/no-undef-class': 2,
  },
  plugins: ['css-modules'],
  settings: {},
};

exports.cssModules = cssModules;
