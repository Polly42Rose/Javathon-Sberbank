const ApidocGenerator = require('./nuxt_plugins/apidoc/ApidocGenerator.js');
const config = require('dotenv').config({ path: '.env' }).parsed;
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let proxyfiedUrls = [
    '/api/**',
    '/api/*',
    '/auth/**',
    '/auth/*',
    '/test/*',
    '/test/**',
    '/test',
    '/login',
    '/logout',
];
let axiosConfig = {};
if (process.env.NODE_ENV === 'production') {
    axiosConfig = {
        browserBaseURL: config.FRONTEND_SERVER_URL,
        baseURL: config.API_SERVER_HOST,
    };
}
proxyfiedUrls = proxyfiedUrls.map(el => config.API_SERVER_HOST + el);

const momentGlobalPath = path.join(__dirname, 'nuxt_plugins/moment/global.js');
const assetsPath = path.join(__dirname, 'assets');


module.exports = {
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    env: config,
    build: {
        plugins: [
            new ApidocGenerator('./api', './api/.api_result.js'),
            new webpack.ProvidePlugin({
                moment: ['moment-global', 'default'],
                _: 'lodash',
            }),
        ],
        vendor: ['moment'],
        extend(config) {
            config.resolve.alias.moment$ = momentGlobalPath;
            config.resolve.alias['moment-global'] = momentGlobalPath;
            // It's helpful for using assets in url() in css styles for resolving them in WebStorm (not for html templates)
            config.resolve.alias['/assets'] = assetsPath;

            // remove default UglifyJs plugin from Nuxt
            config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');
            if (process.env.NODE_ENV === 'production') {
                config.plugins.push(new UglifyJsPlugin({
                    sourceMap: false,
                    uglifyOptions: {
                        ie8: false,
                        ecma: 5,
                        warnings: false,
                        // compress: true,
                        compress: {
                            inline: 1, // https://github.com/mishoo/UglifyJS2/issues/2842
                            warnings: true,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            comments: false,
                        },
                    },
                }));
            }

        },
    },
    head: {
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#',
        },
        title: process.env.SITE_TITLE,
        bodyAttrs: { class: 'body-attr' },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.SITE_DESCRIPTION,
            },
            // {
            //     rel: 'favicon',
            //     href: 'favicon.ico',
            // },
            {
                hid: 'open-graph-type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'open-graph-title',
                property: 'og:title',
                content: process.env.SITE_TITLE,
            },
            {
                hid: 'open-graph-url',
                property: 'og:url',
                content: process.env.HOST_NAME,
            },
            {
                hid: 'open-graph-description',
                property: 'og:description',
                content: process.env.SITE_DESCRIPTION,
            },
            {
                hid: 'open-graph-site_name',
                property: 'og:site_name',
                content: process.env.SITE_TITLE,
            },
        ],
        link: [
        ],
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'nuxt-device-detect',
        '@nuxtjs/font-awesome',
        '@nuxtjs/toast',
    ],
    axios: axiosConfig,
    proxy: proxyfiedUrls,
    plugins: [
        { src: '@/nuxt_plugins/NuxtClientInit.js', ssr: false },
        { src: '@/nuxt_plugins/moment/Plugin.js' },
        { src: '@/nuxt_plugins/TranslatedErrors.js' },
        { src: '@/nuxt_plugins/apidoc/ApiPlugin.js' },
        { src: '@/nuxt_plugins/ElementUI.js' },
    ],
};

