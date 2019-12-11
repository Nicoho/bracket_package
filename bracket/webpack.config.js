var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/export.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        // test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,

        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },

    ],
  },
  externals: {
    react: 'commonjs react',
  },
};