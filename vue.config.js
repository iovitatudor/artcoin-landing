const Dotenv = require('dotenv-webpack');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    allowedHosts: ["all"],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`
      },
    }
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}