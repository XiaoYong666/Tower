import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Axios from "axios";
//import VueAxios from "vue-axios";
import routes from "./router/router";
import VueRouter from "vue-router";
import Vuex from 'vuex'
//import mavonEditor from "mavon-editor";
/* import "mavon-editor/dist/css/index.css";
import "vis-network/dist/vis-network.min.css"; */
import storedata from "./store/data"
import request from "./request/main"
/* import lazyload from 'vue-lazyload' */
import Contextmenu from "vue-contextmenujs"
import hljs from 'highlight.js'
import globalVariable from './global';
Vue.prototype.commonsVariable = globalVariable;
Vue.use(Contextmenu);


Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})


Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(Vuex)
/* Vue.use(lazyload,{
  preLoad:4,
  error:'./assets/error.gif',
  loading:'./assets/waitingg.gif',
  attemp:3
}) */




const router = new VueRouter({
  routes,
  mode: "history"
});


const store = new Vuex.Store(storedata)


Vue.prototype.$axios = Axios
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
