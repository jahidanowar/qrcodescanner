import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"
import "./assets/css/index.css";

import QrReader from 'vue3-qr-reader';

createApp(App).use(router).use(QrReader).mount("#app");
