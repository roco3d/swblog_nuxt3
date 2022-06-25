import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    //from Getting Started
    typescript:{
        shim:false
    },
    modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
    content: {
        toc: {
            depth: 3,
            searchDepth: 3,
        },
        highlight: {
            theme: "dracula-soft",
        },
    },
})
