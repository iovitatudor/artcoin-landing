const Dotenv = require('dotenv-webpack');

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

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}