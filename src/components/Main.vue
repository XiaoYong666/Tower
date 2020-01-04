<template>
  <el-container style="height: 100%;width: 100%;">
    <el-header style="height:100px;background-color:#fff">
      <img src="../assets/Tower.png" style="position:fixed;left:10px;height:70px;top:10px" />
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#409eff"
        active-text-color="#1989fa"
        style="height:100px;left:100px"
        router
      >
        <el-menu-item index="/" style="margin-left:70px">主页</el-menu-item>
        <el-menu-item index="/view" >塔</el-menu-item>
        <el-menu-item index="2" disabled>
          <template slot="title">个人中心(暂定)</template>
        </el-menu-item>
        <el-menu-item index="/AddNewCourse">
          <a>作者留言</a>
        </el-menu-item>
        <li class="el-menu-item">
          <el-input v-model="input" placeholder="请输入内容" style="width:400px"></el-input>
        </li>
        <li class="el-menu-item">
          <el-button type="primary" style="color:#fff;width:70px;font-weight:700">搜索</el-button>
        </li>
      </el-menu>
    </el-header>
    <el-main style="text-align:center">
      <router-view></router-view>
    </el-main>
    <el-footer
      style="height:20px;color:#BCBCBC;font-family:Gilroy,sans-serif;text-align:start;font-weight:700"
    >知径 诞生于2020年❤️</el-footer>
  </el-container>
</template>

<script>
//import HomePage from './HomePage'

export default {
  name: "Main",
  data() {
    return {
      input:'',
      activeIndex2:"1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    
  },
  components:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-menu-item {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-size: 16px;
  height: 80px;
}

.el-menu--horizontal > .el-menu-item {
  line-height: 90px;
  height: 80px;
}

</style>
