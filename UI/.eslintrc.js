/* @flow strict */
const {
  base,
  react,
  promise,
  jsxA11y,
  unicorn,
  sonarjs,
  prettier,
  flowtype,
  cssModules,
  reactHooks,
  flowtypeErrors,
  importResolver,
} = require('./config/eslint');

const rules = {};
const plugins = [];
const settings = {};
const extendsList = [];

function applyConfig(...configs) {
  configs.forEach(cfg => {
    plugins.push(...cfg.plugins);
    extendsList.push(...cfg.extends);

    Object.assign(rules, cfg.rules);
    Object.assign(settings, cfg.settings);
  });
}

applyConfig(
  base,
  react,
  promise,
  jsxA11y,
  unicorn,
  sonarjs,
  flowtype,
  cssModules,
  reactHooks,
  flowtypeErrors,
  importResolver,
  // [!IMPORTANT] Should be the last
  prettier,
);

const config = {
  extends: extendsList,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins,
  env: {
    jest: true,
    browser: true,
  },
  rules,
  settings,
};

module.exports = config;
