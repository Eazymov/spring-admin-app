/* @flow strict */

function toNumber(value /* ::: string */) {
  return parseInt(value, 10);
}

function toBoolean(value /* ::: string */) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  throw new Error(`Unexpected value: ${value}`);
}

exports.toNumber = toNumber;
exports.toBoolean = toBoolean;
