/* eslint-disable indent */
require('./config');

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    server: {
        host: '0.0.0.0',
    },

    head: {
        title: 'Dashboard',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'preload',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap',
                as: 'style',
                onload: 'this.onload=null;this.rel=\'stylesheet\'',
            },
        ]
    },
    env: {
        token: process.env.TOKEN
    },
    axios: {
        credentials: false,
        proxy: true,
    },
    loading: {
        color: '#005eb0',
    },
    pageTransition: 'page',
    css: ['~/assets/App.scss'],
    plugins: [],
    components: true,
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '~/modules/api/services',
    ],
    build: {}
}