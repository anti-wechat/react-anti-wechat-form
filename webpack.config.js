const path = require('path');

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
    filename: 'react-robust-form-controls.js',
    library: 'react-robust-form-controls',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react'
  }
};
