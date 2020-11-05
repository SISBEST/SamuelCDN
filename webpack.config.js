module.exports = {
    mode: 'production',
    entry: {
        upstream: './src/upstream/index.js',
        samuel: './src/samuel/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist',
    },
    output: {
        filename: '[name].min.js',
        path: `${__dirname}/dist/`,
    },
};