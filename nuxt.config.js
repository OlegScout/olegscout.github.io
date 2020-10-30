export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  router: {
    base: '/olegscout.github.io/',
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title:
      "It's a Hub | The list of projects of olegkruchay.com | Front-end developer 👨🏻‍💻",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Reference for Drupal
      { name: 'generator', content: 'Drupal 10 (http://drupal.org)' },
      {
        hid: 'description',
        name: 'description',
        // eslint-disable-next-line max-len
        content:
          'Front-end web developer (React, Vue, Drupal 7-9). Based in Kyiv, Ukraine. Social: @olegkruchay. Mail: okruchay@gmail.com',
      },
      {
        property: 'og:title',
        content:
          "It's a Hub | The list of projects of olegkruchay.com | Front-end developer 👨🏻‍💻",
      },
      {
        property: 'og:description',
        // eslint-disable-next-line max-len
        content:
          'Front-end web developer (React, Vue, Drupal 7-9). Based in Kyiv, Ukraine. Social: @olegkruchay. Mail: okruchay@gmail.com',
      },
      {
        property: 'og:url',
        content: 'http://hub.olegkruchay.com',
      },
      {
        property: 'og:url:secure_url',
        content: 'https://hub.olegkruchay.com',
      },
      {
        property: 'og:site_name',
        content:
          "It's a Hub | The list of projects of olegkruchay.com | Front-end developer 👨🏻‍💻",
      },
      {
        property: 'og:image',
        content: 'https://hub.olegkruchay.com/public/oleg.png',
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:alt',
        content: 'Oleg Kruchay portrait',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/styles.scss'],

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
          regular: ['faHeart', 'faEnvelope'],
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
          ],
        },
      },
    ],
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
      },
    ],
    '@nuxtjs/svg',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  googleAnalytics: {
    // id: 'UA-131497403-1'
  },
}
