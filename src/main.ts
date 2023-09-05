import { createApp } from 'vue';
import './style.css';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';

createApp(App).mount(
  (() => {
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
);
