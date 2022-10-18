import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import deliveryView from "../views/DeliveryView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/delivery",
    name: "delivery",
    component: deliveryView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
