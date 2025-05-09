/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
      localeDetection: true,
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  }
  