import Vue from "vue";
import VueRouter from "vue-router";
import Http from "./common/scripts/http";
import Auth from "./common/scripts/auth";

Vue.use(VueRouter);

const Login = resolve => require(["./login/index.vue"], resolve);
const Layout = resolve => require(["./layout/index.vue"], resolve);
const Dashboard = resolve => require(['./dashboard/index.vue'], resolve)

const Router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          meta: {
            auth: false
          },
          component: Dashboard
        }
      ]
    }
  ]
});

Router.beforeEach((to, from, next) => {
  Auth.accessibility(to, from, next);
  Auth.interceptor();
});

export default Router;
