import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    //from Getting Started
    typescript:{
        shim:false
    },
    modules: ['@nuxtjs/tailwindcss','nuxt-graphql-client'],

    runtimeConfig:{
        public:{
            'graphql-client':{
                clients:{
                    orionx:{
                        host: process.env.GQL_ORIONX_DOMAIN,
                        token: {
                            name: 'X-ORIONX-APIKEY',
                            value: process.env.GQL_ORIONX_APIKEY,
                            type: null
                        },
                        retainToken: true,
                    }
                }
            }
        }
    }

});
