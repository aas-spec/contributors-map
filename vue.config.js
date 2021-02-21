module.exports = {
    devServer: {
        proxy: {
            "^/api/": {
                target: "http://127.0.0.1:3300",
                changeOrigin: true,
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Contribution Map Loader'
                return args
            })
    }
}
