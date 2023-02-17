import { quasar } from '@quasar/vite-plugin'
export default defineNuxtConfig({
  css: [
    'quasar/src/css/index.sass',
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
  ],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    ssr: {
      external: ['happy-dom'],
    },
    plugins: [quasar()],
  },
  build: {
    transpile: ['quasar', '@happy-dom/global-registrator'],
  },
})
