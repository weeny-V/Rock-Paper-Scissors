const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./js/index.js",
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [miniCss.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
              ]
            ]
          }
        }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ],
  },
  
  plugins: [new miniCss({filename:"style.css"})],
}