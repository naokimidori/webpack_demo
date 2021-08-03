const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 自定义插件：去除js文件中的/********/注释
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      for (const name in compilation.assets) {
        console.log()
        if (name.endsWith('.js')) {
          const content = compilation.assets[name].source()
          const withoutComments = content.replace(/\/\*+\*\//g, '')

          compilation.assets[name] = {
            source: () => withoutComments,
            size: withoutComments.length,
          }
        }
      }
    })
  }
}

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env' // es5
            ]
          }
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10kb
          }
        }
      },
      {
        test: /.md$/,
        use: [
          'html-loader',
          './markdown-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'vino',
      template: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: ''}
      ]
    }),
    new MyPlugin()
  ]
}