<template>
  <div>
    <div class="header">
      <div class="zhuanshi">砖石</div>
      <div class="more"></div>
      <Search></Search>
      <el-button class="feedback">问题反馈</el-button>
    </div>
    <el-divider></el-divider>
    <div class="main">
      <Brick></Brick>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Brick from "../component_common/brick";
import Search from "../component_common/search";

export default {
  components: {
    Brick,
    Search
  }
};
</script>

<style scoped>
.zhuanshi {
  font-size: 48px;
  font-weight: bold;
  color: rgba(250, 140, 22, 100);
  position: absolute;
  top: 0px;
  left: 20px;
}
.more {
  position: absolute;
  left: 50px;
}
.feedback {
  background-color: rgba(64, 169, 255, 100);
  color: white;
  position: absolute;
  top: 20px;
  right: 5%;
  border-radius: 10px;
  width: 120px;
}
.header {
  margin-top: 20px;
  position: relative;
  height: 60px;
  width: 100%;
}
.main {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}
</style>
