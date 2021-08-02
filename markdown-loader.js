const marked = require('marked')

module.exports = source => {
  const html = marked(source)

  // 返回html交给下一个loader处理
  return html
}
