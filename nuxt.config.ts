import {defineNuxtConfig} from 'nuxt3'
import CMS from 'netlify-cms-app'
// Initialize the CMS object
CMS.init()

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/scss/main.scss'
    ]
})
