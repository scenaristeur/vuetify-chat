module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/shighl-vuejs/'
  : '/'
  ,
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false
}
