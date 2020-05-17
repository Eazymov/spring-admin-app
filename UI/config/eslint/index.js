/* @flow strict */
const { base } = require('./base');
const { react } = require('./react');
const { promise } = require('./promise');
const { jsxA11y } = require('./jsxA11y');
const { unicorn } = require('./unicorn');
const { sonarjs } = require('./sonarjs');
const { prettier } = require('./prettier');
const { flowtype } = require('./flowtype');
const { cssModules } = require('./cssModules');
const { reactHooks } = require('./reactHooks');
const { flowtypeErrors } = require('./flowtypeErrors');
const { importResolver } = require('./importResolver');

module.exports = {
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
};
