/* @flow strict */
const fs = require("fs");
const path = require("path");

function getDirContent(dirPath) {
  return fs.readdirSync(dirPath).reduce((acc, file) => {
    const curPath = path.join(dirPath, file);
    const stat = fs.statSync(curPath);

    if (stat.isDirectory()) {
      return acc + getDirContent(curPath);
    }

    const content = fs.readFileSync(curPath);

    return `${acc}\nФайл ${curPath}\n\n${content.toString()}`;
  }, "");
}

const dir = path.join(__dirname, "API/src");
const result = getDirContent(dir);

fs.writeFileSync(path.join(__dirname, "data.txt"), result, {
  encoding: "UTF-8",
});
