const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    airley: {
      import: path.resolve(__dirname, 'src/main.ts'),
      library: {
        name: 'Airley',
        type: 'umd',
        umdNamedDefine: true,
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/, // Update the file extensions to include TypeScript files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'styleTag',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.ts$/, // Add a rule for TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js', '.css'], // Add '.ts' to the list of extensions
  },
  optimization: {
    minimize: true, // Since isProduction is always true for minimizing in production mode
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
}
