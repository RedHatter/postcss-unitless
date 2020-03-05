let postcss = require('postcss')

const remRegex = /([0-9.]+)rem\b/g
function replace(value, rootValue, precision) {
  return value.replace(
    remRegex,
    (_, value) =>
      Math.round(parseFloat(value) * rootValue * Math.pow(10, precision)) /
      Math.pow(10, precision)
  )
}

module.exports = postcss.plugin('postcss-unitless', (opts = {}) => {
  const { rootValue = 18, precision = 2 } = opts

  return (root, result) => {
    root.walkDecls(
      (decl, i) => (decl.value = replace(decl.value, rootValue, precision))
    )

    root.walkAtRules(
      'media',
      rule => (rule.params = replace(rule.params, rootValue, precision))
    )
  }
})
