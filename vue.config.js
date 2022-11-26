const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

})
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/main.scss";`
      },
    }
  }
}