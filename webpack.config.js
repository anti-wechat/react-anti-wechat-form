const path = require('path');

const libName = 'react-anti-wechat-form';

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: libName + '.js',
    library: libName,
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react'
  }
};
