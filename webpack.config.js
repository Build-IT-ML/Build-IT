const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resource/js')
        },
        extensions: ['.js', '.jsx', '.php']
    }
};
