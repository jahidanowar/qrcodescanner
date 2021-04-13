import { createApp } from "vue";
import QrReader from "vue3-qr-reader";
import { registerSW } from "virtual:pwa-register";

import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";

//registerSW() registers service worker to the app
registerSW();

createApp(App).use(router).use(QrReader).mount("#app");
