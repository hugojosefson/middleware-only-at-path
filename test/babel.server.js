require('babel-polyfill');

require('babel-core/register')({
    only: /src/,
    presets: [
        'es2015'
    ]
});

if (require('is-production')() || require('piping')()) {
    try {
        require('./src');
    } catch (error) {
        console.error(error.stack);
    }
}
