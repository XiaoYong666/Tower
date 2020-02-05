<template>
  <div>
      <div class="header">
        <div class="titleoftower">数学</div>
        <div class="attention">
            <el-button type="danger">注意</el-button>
        </div>
      </div>
      <div class="main">
          <div class="ceng">
              <div class="decorate"></div>
              <div class="grade">第一层</div>
              <div class="label"><i class="el-icon-warning-outline"></i></div>
              <div class="reminder">第一层通常是一些非常基础的学科，有些学科甚至看似与本塔无关，但实则非常重要。</div>
              <div class="more"><i class="el-icon-more"></i></div>
              <el-divider></el-divider>
          </div>
          <div class="zhuanshibox">
              <Brick></Brick>
          </div>
      </div>
      <div class="footer"></div>
  </div>
</template>

<script>
import Brick from "../../component_common/brick"
export default {
components:{
    Brick
}
}
</script>

<style scoped>
.header {
  margin-top: 20px;
  position: relative;
  height: 60px;
  width: 100%;
}
.titleoftower{
font-size: 48px;
font-weight: bold;
color:rgba(64,169,255,100);
}
.attention{
position: absolute;
right:100px;
top:24px;

}
.el-button{
    font-weight: bold;
}
.main{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-top:30px;
}
.ceng{
    width:100%;
    height: 50px;
    position: relative;
}
.decorate{
    position: absolute;
    height: 30px;
    background-color: #fa8c16;
    width: 5px;
    border-radius: 2px;
}
.grade{
    font-size:20px;
    font-weight: bold;
    left:15px;
    position: absolute;
}
.label{
    position: absolute;
    left:90px;
    top:7px;

}
.reminder{
    color:rgba(0,0,0,.5);
    font-size:13px;
    position: absolute;
    top:7px;
    left:110px;
}
.zhuanshibox{
    width:80%;
    height: auto;
}
.itembox{
    margin-top:5px;
}
.more{
    position: absolute;
    right:30px;
    top:5px;
    font-size: 20px;
}
.el-divider{
    position: absolute;
    top:17px;
}

</style>