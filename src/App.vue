<template>
  <div id="app">
    <navBar></navBar>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <recordInfo></recordInfo>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import FrontKnowShow from './components/FrontKnowShow.vue';
//import Main from "./components/bricks/Details/Main";
//import navbar from "./components/component_common/selfnavbar";
import navBar from "./components/component_common/navBar";
import recordInfo from "./components/component_common/recordInfo";
export default {
  name: "app",
  components: {
    navBar,
    recordInfo
  }
};
</script>

<style>

#app {
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "HelveticaNeue", "Helvetica", "Arial", sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
  min-height: 100%;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
