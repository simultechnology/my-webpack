const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: `./src/index.js`,
    quiz: `./src/quiz.js`
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {url: false}}
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 39000,
    open: true
  }
}
