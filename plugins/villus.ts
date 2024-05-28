import { useClient, defaultPlugins } from "villus";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin({
    hooks: {
        'vue:setup'() {
            const url = '/api/graphql'; // Replace with your graphql URL
            useClient({
                url,
            });
        },
    },
});
