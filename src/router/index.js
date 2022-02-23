import { createWebHistory, createRouter } from "vue-router";
import ScanPage from "./../pages/ScanPage.vue";
import DropPage from "./../pages/DropPage.vue";
import HistoryPage from "./../pages/HistoryPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ScanPage,
  },
  {
    path: "/scan-from-image",
    name: "Drop",
    component: DropPage,
  },
  {
    path: "/scans",
    name: "Scans",
    component: HistoryPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
