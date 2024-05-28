import { defineFormKitConfig } from '@formkit/vue'
import { createAutoAnimatePlugin, createLocalStoragePlugin, createMultiStepPlugin } from '@formkit/addons';
import '@formkit/addons/css/multistep';

export default defineFormKitConfig({
    plugins: [
        createMultiStepPlugin(),
        createAutoAnimatePlugin(
            {
                duration: 250,
                easing: 'ease-in-out',
            },
            {
                global: ['outer', 'inner', 'hidden'],
            }
        ),
        createLocalStoragePlugin(),
    ],
    // rules: {},
    // locales: {},
    // etc.
});
