module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/";`
      },
    }
  },
  configureWebpack: {
    output: {
        crossOriginLoading: 'anonymous'
    }
  }
};