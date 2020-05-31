/* @flow strict */
const nodeEnv = require('../utils/nodeEnv');

const flowtypeErrors = {
  extends: [],
  rules: {
    'flowtype-errors/show-errors': 0,
    'flowtype-errors/show-warnings': 0,
    // TeamCity CI build is hanging up for some reason when this rule enabled
    // so we enable it only when NODE_ENV !== 'production'
    'flowtype-errors/enforce-min-coverage': nodeEnv.isProd ? 0 : [2, 85],
  },
  plugins: ['flowtype-errors'],
  settings: {},
};

exports.flowtypeErrors = flowtypeErrors;
