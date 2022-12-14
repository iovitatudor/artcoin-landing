module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = {
  devServer: {
    allowedHosts: "all"
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`
      },
    }
  }
}