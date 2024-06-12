import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Charts from "../views/pages/Charts.vue";
import Search from "../views/pages/Search.vue";
import Recommend from "../views/pages/Recommend.vue";

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
  {
    path: "/pages/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/pages/recommend",
    name: "Recommend",
    component: Recommend,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
