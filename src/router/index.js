import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/manifesto",
    name: "Manifest",
    component: () => import("../views/Manifest.vue")
  },
  {
    path: "/metodo",
    name: "Method",
    component: () => import("../views/Method.vue")
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
