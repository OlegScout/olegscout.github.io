export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hub-olegkruchay-com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/styles.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
      icons: {
        regular: [
          'faHeart',
          'faEnvelope'
        ],
        brands: [
          'faInstagram',
          'faFacebook',
          'faFacebookMessenger',
          'faCodepen',
          'faDrupal',
          'faLinkedin',
          'faTelegram',
          'faSkype',
          'faGithub',
          'faJs',
          'faNodeJs',
          'faReact',
          'faVuejs',
          'faDocker',
          'faSymfony',
          'faPhp',
          'faPiedPiperPp',
          'faCreativeCommons',
          'faCreativeCommonsBy',
          'faCreativeCommonsSa',
        ]
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
      families: {
        Niconne: true,
        Righteous: true,
        'Patua+One': true,
        Comfortaa: {
          wght: [300, 400, 700],
        },
      },
      display: 'swap',
      download: true,
    }],
    '@nuxtjs/svg'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  
  googleAnalytics: {
    // id: 'UA-131497403-1'
  }
}
