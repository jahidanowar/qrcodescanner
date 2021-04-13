import { createWebHistory, createRouter } from "vue-router";
import ScanPage from "./../pages/ScanPage.vue";
import DropPage from "./../pages/DropPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ScanPage,
  },
  {
    path: "/drop",
    name: "Drop",
    component: DropPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
