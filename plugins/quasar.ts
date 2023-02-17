import * as components from 'quasar'
const { Quasar, Dark } = components

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components,
    plugins: { Dark },
  })
})
