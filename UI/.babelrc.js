/* @flow strict */

const presets = [
  [
    '@babel/preset-env',
    {
      loose: true,
    },
  ],
  '@babel/preset-flow',
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
];

const config = {
  presets,
  plugins,
};

module.exports = config;
