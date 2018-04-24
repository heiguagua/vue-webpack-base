// library
import Vue from "vue";
import VueRouterSync from "vuex-router-sync";
import store from "./store";
import router from "./router";
import "babel-polyfill";
// css
import "./common/styles/base.scss";
import "./common/styles/reset.scss";
import "./common/styles/theme.scss";
import "font-awesome/css/font-awesome.css";
import "animate.css/animate.css";
// ui
import ElementUI from "element-ui";
import * as VueMenu from "@hscmap/vue-menu";
// filter
import * as custom from './common/scripts/filter';

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.use(ElementUI);
Vue.use(VueMenu);


/** Sync $route to store */
const unsync = VueRouterSync.sync(store, router);
unsync();

const app = new Vue({
  store,
  router
}).$mount("#app");
