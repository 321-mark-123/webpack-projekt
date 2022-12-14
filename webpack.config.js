module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    // contentBase: './dist',
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|\jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|\jsx)$/,
        exclude: /node_modules/,
        use: ['eslint-webpack-plugin'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
