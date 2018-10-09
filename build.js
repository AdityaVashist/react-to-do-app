process.env.NODE_ENV = 'production';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const WebpackConfig = require('react-scripts/config/webpack.config.prod');

WebpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
        anlyzerMode: 'static',
        reportFileName: 'report.html'
    })
)

require('react-scripts/scripts/build');