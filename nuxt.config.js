export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mvp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Firebase Config Object
  firebase: {
    config: {
      apiKey: "AIzaSyDyRhCBMiQZ5s_oJ3xWjuOOuQgsQ4ZXtxo",
      authDomain: "exercise-health.firebaseapp.com",
      databaseURL: "https://exercise-health.firebaseio.com",
      projectId: "exercise-health",
      storageBucket: "exercise-health.appspot.com",
      messagingSenderId: "285597102570",
      appId: "1:285597102570:web:fac480def049e902b78293",
      measurementId: "G-BLZJMQGQ0G"
    },
    services: {
      // auth: true,
      firestore: true,
      // functions: true,
      // storage: true,
      // database: true,
      // messaging: true,
      // performance: true,
      // analytics: true,
      // remoteConfig: true
    }
  },

  // firebase servie options 
  // https://firebase.nuxtjs.org/service-options/firestore

  // Initializes Firebase Firestore and makes it available via $fire.firestore and $fireModule.firestore.
  firestore: {
    memoryOnly: false, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
