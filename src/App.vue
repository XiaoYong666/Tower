<template>
  <div id="app">
    <router-view></router-view>
    <div class="beianInfo">
      <div>liuser出品 </div>   
      <div> © 2020 </div>  
      <div> TongTianTa </div><a href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=a2c4g.11186623.7y9jhqsfz.113.34257243mu7XSO">陕ICP备19012321号</a></div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import FrontKnowShow from './components/FrontKnowShow.vue';
//import Main from "./components/bricks/Details/Main";

export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  min-height: 100%;
}
.beianInfo{
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  align-items: flex-start;
  padding: 0 0 0 1rem;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px #e9e9e9;
  height: 70px;
  width: 90%;
  margin:1rem auto
  
}
</style>
