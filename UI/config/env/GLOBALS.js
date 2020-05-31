/* @flow strict */
require('dotenv').config();

const { DEFAULTS } = require('./DEFAULTS');
const { getKeysMap, envOrDefault } = require('./utils');

const keys = getKeysMap(DEFAULTS);

const PORT = envOrDefault(keys.PORT);
const HTTPS = envOrDefault(keys.HTTPS);
const PROTOCOL = envOrDefault(keys.PROTOCOL);
const PUBLIC_URL = envOrDefault(keys.PUBLIC_URL);
const LOCAL_HOST_NAME = envOrDefault(keys.LOCAL_HOST_NAME);
const CHECK_DEAD_CODE = envOrDefault(keys.CHECK_DEAD_CODE);

const GLOBALS = {
  PORT,
  HTTPS,
  PROTOCOL,
  PUBLIC_URL,
  LOCAL_HOST_NAME,
  CHECK_DEAD_CODE,
};

exports.GLOBALS = GLOBALS;
