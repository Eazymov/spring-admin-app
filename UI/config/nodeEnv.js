/* @flow strict */

const { NODE_ENV } = process.env;
const nodeEnv = {
  isDev: NODE_ENV === 'development',
  isProd: NODE_ENV === 'production',
};

module.exports = nodeEnv;
