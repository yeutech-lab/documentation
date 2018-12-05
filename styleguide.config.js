const { createConfig } = require('@rollup-umd/documentation');
module.exports = createConfig(undefined, {
  loaders: require('./src/loaders'), // eslint-disable-line global-require
  loader: 'yeutech',
  favicons: require('./src/favicons'), // eslint-disable-line global-require
  favicon: 'yeutech',
});
