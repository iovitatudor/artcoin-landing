module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}


module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`
      },
    }
  }
}