// https://nuxt.com/docs/api/configuration/nuxt-config
import graphql from '@rollup/plugin-graphql'

export default defineNuxtConfig({
  vite: {
    plugins: [graphql()]
  }
})
