const path = require('path');

module.exports = {
  entry: './js/src/popup/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, '../js/dist/bundles')
  }
};
