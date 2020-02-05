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
        </div>
      </div>
      <div class="label-1">▲想要学更多嘛！┗|｀O′|┛ 嗷~~</div>
      <div class="middle">
        <div class="decorate-1"></div>
        <Brick></Brick>
        <div class="decorate-2"></div>
      </div>
      <div class="label-2">▼下面的都是很重要的知识哦！( •̀ ω •́ )✧</div>
      <div class="front">
        <div class="more"><i class="el-icon-more"></i></div>
        <div class="item"></div>
      </div>
    </div>
    <div class="footer">
      <Rec></Rec>
    </div>
  </div>
</template>

<script>
import Search from "../component_common/search";
import Brick from "../component_common/brick";
import Rec from "../component_common/recommand"
export default {
  components: {
    Search,
    Brick,
    Rec
  }
};
</script>

<style scoped>
.footer
{width:100%;}
.front{
  min-height: 500px;
  width: 100%;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  border-radius: 7px;
  position: relative;
  margin-bottom: 70px;
}


.label-2{
  width: 100%;
  height: 20px;
  font-size:13px;
  color: rgba(0, 0, 0, 0.5);
  margin-top:5px;
}


.itembox{
  position: absolute;
  left:450px;
  margin-top:0px;
  width: 500px;
}

.decorate-2{
  right:0px;
  position: absolute;
  width: 30%;
  background-image: linear-gradient(to left, #e2e1e1 0%, #BFBFBF 100%);
  height: 90px;
  border-radius: 7px;
}
.decorate-1{
  position: absolute;
  width: 30%;
  background-image: linear-gradient(to right, #e2e1e1 0%, #BFBFBF 100%);
  height: 90px;
  border-radius: 7px;
}

.middle{
  width: 100%;
  position: relative;
  height: 100px;
 /*  background-color: rgba(0, 0, 0, 0.25); */
}

.label-1{
  width: 100%;
  height: 20px;
  font-size:13px;
  color: rgba(0, 0, 0, 0.5);
  margin-top:5px;
}

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
