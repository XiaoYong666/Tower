<template>
  <div id="app">
    <navbar></navbar>
    <transition name="slide-fade">
<router-view></router-view>
    </transition>
    
    <div class="beianInfo">
      <div>liuser出品</div>
      <div>© 2020</div>
      <div>TongTianTa</div>
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=a2c4g.11186623.7y9jhqsfz.113.34257243mu7XSO"
        >陕ICP备19012321号</a
      >
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import FrontKnowShow from './components/FrontKnowShow.vue';
//import Main from "./components/bricks/Details/Main";
import navbar from "./components/component_common/selfnavbar"

export default {
  name: "app",
  components:{
    navbar
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
  min-height: 100%;
}
.beianInfo {
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  align-items: flex-start;
  padding: 0 0 0 1rem;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px rgba(250, 165, 133, 0.541);
  height: 70px;
  width: 90%;
  margin: 2rem 0 0 2rem;
  position: relative;
  bottom: 1rem;
}

.slide-fade-enter-active {
  transition: all .8s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
