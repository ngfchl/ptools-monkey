import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, {cdn} from 'vite-plugin-monkey';
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                }),
            ],
        }),
        monkey({
            entry: 'src/main.ts',
            userscript: {
                icon: 'https://vitejs.dev/logo.svg',
                namespace: 'npm/vite-plugin-monkey',
                match: [
                    'https://1ptba.com/*',
                    'https://audiences.me/*',
                    'https://pthome.net/*',
                    'https://dajiao.cyou/*',
                    'https://ptchdbits.co/*',
                ],
            },
            build: {
                externalGlobals: {
                    vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
                },
            },
        }),
    ],
});
