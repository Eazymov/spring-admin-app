/* @flow strict */
/* eslint-disable */
const fs = require('fs');
const url = require('url');
const path = require('path');
const invariant = require('invariant');

const { or } = require('./utils/or');
const { isNotMaybe } = require('./utils/isNotMaybe');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(inputPath /* ::: string */, needsSlash /* ::: boolean */) {
  const hasSlash = inputPath.endsWith('/');

  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  }

  if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  }

  return inputPath;
}

const getPublicUrl = appPackageJson =>
  // $FlowFixMe
  or(envPublicUrl, require(appPackageJson).homepage);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const fallback = publicUrl ? url.parse(publicUrl).pathname : '/';
  const servedUrl = or(envPublicUrl, fallback);

  invariant(isNotMaybe(servedUrl), 'servedUrl is not string');

  return ensureSlash(servedUrl, true);
}

const moduleFileExtensions = ['js'];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(ext =>
    fs.existsSync(resolveFn(`${filePath}.${ext}`)),
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

const appPackageJson = resolveApp('package.json');

// Config after eject: we're in ./config/
const paths = {
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  yarnLockFile: resolveApp('yarn.lock'),
  appHtml: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules'),

  appPackageJson,
  moduleFileExtensions,
  publicUrl: getPublicUrl(appPackageJson),
  servedPath: getServedPath(appPackageJson),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
};

exports.paths = paths;
