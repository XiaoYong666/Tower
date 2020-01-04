<template>
  <div id="app" style="height:100%;width:100%">
    <Main/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import FrontKnowShow from './components/FrontKnowShow.vue';
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
