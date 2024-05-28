// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@formkit/nuxt',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@formkit/auto-animate/nuxt',
        '@pinia/nuxt',
        'nuxt-icon',
    ],
    formkit: {
        autoImport: true,
    },
    devtools: { enabled: true }
});
