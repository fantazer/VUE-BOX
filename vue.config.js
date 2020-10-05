module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : '/',

  assetsDir: '',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        //data:`@import '~@/assets/css/config.styl';`,
        use: [require('rupture')()],
        import: [
          '~@/assets/css/config.styl',
          '~rupture/rupture/index.styl',
        ]
      }
    }
  },
  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons/',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true
      }
    }
  },
  /*chainWebpack: config => {
    config.module
        .rule('svg-sprite')
        .use('svgo-loader')
        .loader('svgo-loader')
  }*/
}
