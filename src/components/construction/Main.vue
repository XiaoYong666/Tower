<template>
  <div>
    <div class="header">
      <div class="header-title-1">结构</div>
      <img src="../../assets/red_of.png" alt="of" class="of" />
      <div class="header-title-2">高等数学</div>
      <Search></Search>
    </div>
    <div class="main">
      <div class="behind">
        <div class="more"><i class="el-icon-more"></i></div>
        <div class="items">
          <Brick></Brick>
        </div>
      </div>
      <div class="label-1"></div>
      <div class="middle">
        <div class="decorate-1"></div>
        <div class="brick"></div>
        <div class="decorate-2"></div>
      </div>
      <div class="label-2"></div>
      <div class="front">
        <div class="more"></div>
        <div class="item"></div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Search from "../component_common/search";
import Brick from "../component_common/brick";
export default {
  components: {
    Search,
    Brick
  }
};
</script>

<style scoped>
.header-title-1 {
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  left: 550px;
  top: 5px;
}
.header-title-2 {
  font-size: 36px;
  font-weight: bold;
  color: rgba(64, 169, 255, 100);
  position: absolute;
  left: 750px;
  top: 15px;
}
.header {
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.main {
  width: 100%;
  height: 700px;
}
.behind {
  min-height: 500px;
  width: 100%;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  border-radius: 7px;
  position: relative;
}
.more {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
}
.items {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  margin-top: 40px;
}

.item {
  width: 250px;
}
.search {
  top: 25px;
  right: 20px;
}
.of {
  position: absolute;
  width: 80px;
  left: 650px;
}
</style>
