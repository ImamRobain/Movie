// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// // const { GenerateSW } = require('workbox-webpack-plugin');
// const { InjectManifest } = require('workbox-webpack-plugin');
// const path = require('path');

// module.exports = {
//   entry: {
//     app: path.resolve(__dirname, 'src/scripts/index.js'),
//     sw: path.resolve(__dirname, 'src/scripts/sw.js'),
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader',
//           },
//           {
//             loader: 'css-loader',
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new InjectManifest({
//       swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
//       swDest: './sw.js',
//     }),
//     // new GenerateSW({
//     //   swDest: './sw.budle.js',
//     // }),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.resolve(__dirname, 'src/templates/index.html'),
//     }),
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, 'src/public/'),
//           to: path.resolve(__dirname, 'dist/'),
//         },
//       ],
//     }),
//   ],
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new InjectManifest({
    //   swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    //   swDest: './sw.js',
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
  ],
};
