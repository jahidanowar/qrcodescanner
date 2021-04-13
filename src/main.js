import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"
import "./assets/css/index.css";

import QrReader from 'vue3-qr-reader';
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({
    onNeedRefresh() {
      // show a prompt to user
    },
    onOfflineReady() {
      // show a ready to work offline to user
    },
  })


createApp(App).use(router).use(QrReader).mount("#app");
