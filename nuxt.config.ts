// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-mongoose'],
  ui:{
    global:true,
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-[unset]'
    }
  },
  mongoose:{
    uri:process.env.MONGODB_URI,
    options:{},
    modelsDir:'models',
    devtools:true
  }
})