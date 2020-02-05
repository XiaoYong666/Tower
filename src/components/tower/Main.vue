<template>
  <div>
      <div class="header">
      <div class="tower">塔</div>
      <div class="more"><i class="el-icon-more"></i></div>
      <Search></Search>
      <el-button class="feedback">问题反馈</el-button>
    </div>
    <el-divider></el-divider>
    <div class="towerbox">
        <div class="itembox">
    <div class="title">数学</div>
    <div class="introduce">
      数学是通向真理的必由之路
    </div>
    <div class="time">2020-1-31</div>
    <div class="see"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon svg-md-visibility" width="20" height="20" viewBox="0 0 24 24" style="fill: rgb(255, 77, 79);"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" ></path></svg>2130
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import Search from "../component_common/search";
export default {
components:{
  Search
}
}
</script>

<style scoped>
.itembox {
  width: 250px;
  height: 150px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.itembox .title {
  position: absolute;
  left: 23px;
  top: 15px;
  font-size: 20px;
  font-weight: bold;
}

.itembox .introduce {
  position: absolute;
  font-size: 12px;
  top: 55px;
  left: 23px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.towerbox{
  width: 100%;
  display: flex;
  flex-flow: wrap;
}


.header {
  margin-top: 20px;
  position: relative;
  height: 60px;
  width: 100%;
}
.tower {
  font-size: 48px;
  font-weight: bold;
  color: rgba(64,169,255,100);
  position: absolute;
  top: 0px;
  left: 20px;
}
.more {
  position: absolute;
  left: 200px;
  top:40px;
  font-size: 20px;
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

.time{
position: absolute;
left:23px;
font-size: 13px;
bottom: 10px;
color:rgba(0, 0, 0, 0.5)
}

.see{
  position: absolute;
  right: 15px;
  bottom: 10px;
  font-size:13px;
  color:rgba(255,77,79,100);
}

.svg-icon{
  position: relative;
  top:5px;
  margin-right:7px;
  font-size: 16px;
  color:rgba(255,77,79,100);
}

</style>>

