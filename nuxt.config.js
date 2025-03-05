import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-05',

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
        apiOptions: {
          region: 'us', // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    autoImport: true,
  },
});
