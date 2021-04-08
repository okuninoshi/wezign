export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - valimage',
    title: 'valimage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vaildate product images' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['~plugins/axios'],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // auth module configuration
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://valimage.herokuapp.com/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: {
            url: 'https://valimage.herokuapp.com/users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#cccc00",
          accent: "#cccc00",
          secondary: "#cccc00",
          info: "#99ff33",
          warning: "#fff15a",
          error: "#f02",
          success: "#22BB33",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
