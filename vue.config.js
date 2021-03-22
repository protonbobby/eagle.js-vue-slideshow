module.exports = {
  lintOnSave: 'error',
  // runtimeCompiler: process.env.NODE_ENV !== 'production'
  publicPath: process.env.NODE_ENV === 'production'
  ? '/eaglejs-vue-slideshow/'
  : '/'
}
