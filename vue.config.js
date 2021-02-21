module.exports = {
    publicPath: '/contribution-map/',
    devServer: {
        proxy: {
            "^/api/": {
                target: "https://snt-lk.herokuapp.com",
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
