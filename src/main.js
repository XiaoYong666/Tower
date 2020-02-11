import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Axios from "axios";
//import VueAxios from "vue-axios";
import routes from "./router/router";
import VueRouter from "vue-router";
import Vuex from 'vuex'
import lodash from 'lodash'
//import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "vis-network/dist/vis-network.min.css";
import storedata from "./store/data"
Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(Vuex)



const router = new VueRouter({
  routes,
  mode: "history"
});


const store = new Vuex.Store(storedata)

Vue.prototype._ = lodash
Vue.prototype.axios = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
