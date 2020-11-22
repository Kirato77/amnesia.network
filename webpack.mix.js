const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.tsx', 'public/js')
    .webpackConfig({
        "resolve": {
            "alias": {
                "react": "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
            },
        }
    })
    .babelConfig({
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
                "@babel/plugin-transform-react-jsx", {
                "pragma": "h",
                "pragmaFrag": "Fragment",
            }]
        ],
    });

mix.sass('resources/scss/app.scss', 'public/scss')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });

mix.browserSync({
    proxy: '127.0.0.1:8000',
    open: false
});
