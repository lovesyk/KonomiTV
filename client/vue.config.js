
process.env.VUE_APP_VERSION = process.env.npm_package_version
module.exports = {
    // 開発用サーバー
    devServer: {
        port: 7001,
        disableHostCheck: true,
    },
    // Safari でホットリロードが機能しない問題の回避策
    // ref: https://github.com/vuejs/vue-cli/issues/1132#issuecomment-409916879
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
          config.output.filename('[name].[hash].js').end();
        }
    },
    // 出力フォルダ
    outputDir: 'dist/',
    assetsDir: 'assets/',
    publicPath: '/',
    // Vuetify
    transpileDependencies: ['vuetify'],
    // PWA 設定
    pwa: {
        name: 'KonomiTV',
        themeColor: '#0D0807',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        // アイコンのパス
        iconPaths: {
            faviconSVG: 'assets/images/icons/favicon.svg',
            favicon32: 'assets/images/icons/favicon-32px.png',
            favicon16: 'assets/images/icons/favicon-16px.png',
            appleTouchIcon: 'assets/images/icons/apple-touch-icon.png',
            maskIcon: null,  // 設定しない
            msTileImage: null,  // 設定しない
        },
        // manifest.json の内容
        manifestOptions: {
            'name': 'KonomiTV',
            'short_name': 'KonomiTV',
            'start_url': '.',
            'display': 'standalone',
            'theme_color': '#0D0807',
            'background_color': '#1E1310',
            'icons': [
                {
                    'src': '/assets/images/icons/icon-192px.png',
                    'sizes': '192x192',
                    'type': 'image/png',
                },
                {
                    'src': '/assets/images/icons/icon-512px.png',
                    'sizes': '512x512',
                    'type': 'image/png',
                },
                {
                    'src': '/assets/images/icons/icon-maskable-192px.png',
                    'sizes': '192x192',
                    'type': 'image/png',
                    'purpose': 'maskable',
                },
                {
                    'src': '/assets/images/icons/icon-maskable-512px.png',
                    'sizes': '512x512',
                    'type': 'image/png',
                    'purpose': 'maskable',
                }
            ]
        }
    }
};
