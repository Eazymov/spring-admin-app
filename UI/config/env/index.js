/* @flow strict */
const { GLOBALS } = require('./GLOBALS');
const { isNotMaybe } = require('../utils/isNotMaybe');

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('../paths')];

const raw = {
  ...process.env,
  // Load our globals
  ...GLOBALS,
};

// Stringify all values so we can feed into Webpack DefinePlugin
const stringified = {
  'process.env': Object.keys(raw).reduce((env, key) => {
    const value = raw[key];

    if (!isNotMaybe(value)) {
      return env;
    }

    env[key] = JSON.stringify(value.toString());

    return env;
  }, {}),
};

const env = { raw, stringified };

exports.env = env;

Object.assign(process.env, raw);
