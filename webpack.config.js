const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resource/js')
        },
        extensions: ['.js', '.jsx', '.php']
    },
    node: {
        global: true,
        __filename: false,
        __dirname: false,
      },
      resolve: {
        fallback: {
          "vm": false
        }
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
        ],
      },
      devtool: 'source-map',
};
