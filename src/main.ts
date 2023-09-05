import {createApp} from 'vue';
import './style.css';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';

createApp(App).mount(
    (() => {
        const element_ptools = document.createElement('div');
        document.body.append(element_ptools);
        return element_ptools;
    })(),
);
