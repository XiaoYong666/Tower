import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Axios from "axios";
import VueAxios from "vue-axios";
import routes from "./router/router";
import VueRouter from "vue-router";
//import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "vis-network/dist/vis-network.min.css";

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(VueAxios, Axios);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
