/* @flow strict */
const fs = require('fs');
const path = require('path');
const invariant = require('invariant');

const { paths } = require('../paths');

function ensureExist(
  filePaths /* ::: string[] */,
  errMessage /* ::: (path: string) => string */,
) {
  filePaths.forEach(filePath => {
    const absolutePath = path.join(paths.appPublic, filePath);
    const isExist = fs.existsSync(absolutePath);
    const outputMsg = errMessage(absolutePath);

    invariant(isExist, outputMsg);
  });
}

exports.ensureExist = ensureExist;
