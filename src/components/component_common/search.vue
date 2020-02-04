<template>
  <div class="search">
    <el-input class="searchbox" placeholder="搜索"></el-input>
    <el-button class="searchbutton"><i class="el-icon-search"></i></el-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search .searchbutton {
  background-color: rgba(250, 140, 22, 100);
  height: 40px;
  color: white;
  position: relative;
  font-size: 20px;
  padding: 0 10px 0 10px;
}
.search .searchbox {
  width: 200px;
  margin-right: 20px;
  vertical-align: bottom;
}
.search {
  position: absolute;
  right: 10%;
  width: 400px;
  height: 40px;
  top: 20px;
}
</style>
