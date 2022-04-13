import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favoris from "../views/Favoris.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/favoris", component: Favoris },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
