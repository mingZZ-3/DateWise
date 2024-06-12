import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Charts from "../views/pages/Charts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pages/charts",
    name: "Charts",
    component: Charts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
