import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../Pages/Home.vue";
// @ts-ignore
import Profile from "../Pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
// import Bug from "../../../server/models/Bug";
// @ts-ignore
import Bug from '../Pages/Bug.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: '/bugs/:bugId',
    name: "bug",
    component: Bug,
    beforeEnter: authGuard,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
