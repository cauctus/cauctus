import {description} from './package.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Cauctus',
    title: 'Cauctus',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: description ?? ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/global.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/pwa-update.plugin.ts', mode: 'client'},
    '~/plugins/vuetify-toast-snackbar.plugin.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-plausible'
  ],

  plausible: {
    domain: process.env.NUXT_ENV_PLAUSIBLE_DOMAIN,
    apiHost: process.env.NUXT_ENV_PLAUSIBLE_API_HOST,
    trackLocalhost: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Cauctus',
      short_name: 'Cauctus',
      lang: 'fr'
    },
    meta: {
      theme_color: '#73d3a7'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    icons: {
      iconfont: 'mdiSvg'
    },
    treeShake: {
      components: [
        'VSnackbar',
        'VBtn',
        'VIcon'
      ]
    },
    defaultAssets: {
      icons: false,
      font: false
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      options: {customProperties: true},
      themes: {
        light: {
          primary: '#73d3a7'
        }
      }
    }
  },

  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Roboto: {
        wght: [300, 400, 500, 700, 900]
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader'
      })
    }
  }
}
