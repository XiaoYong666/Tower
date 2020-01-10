<template>
  <div style="width:100%;height:100%">
    <div class="grid-content bg-purple" style="width:1200px;height:1000px;margin:0 auto;">
      <div style="font-size:27px;font-weight:700;margin:20px 0 20px 0;padding-top:20px">摄影</div>
      <div style="margin:0 auto;height:100%">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          style="width:90%;display:block;margin:0 auto;height:100%;"
        >
          <el-tab-pane label="介绍" name="first" style="margin-left:10px">介绍</el-tab-pane>
          <el-tab-pane label="教程" name="second">
            <courseContent></courseContent>
          </el-tab-pane>
          <el-tab-pane label="其他相关" name="third">其他相关</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import courseContent from './CourseContent'


export default {
  name: "HomePage",
  data() {
    return {
      pickValue: 3.7,
      activeNameInCourses: "1",
      activeName: "second",
      activeNameForFront: "1",
      activeIndex: "1",
      activeIndex2: "1",
      activeNameForNext: "1",
      dataForpostposition: {
        top: {
          表严肃: {
            描述: "123",
            链接: "",
            评价: ""
          }
        },
        notop: {
          nothing: true
        }
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components:{
    courseContent
  }
};
</script>

<style>
* {
  font-family: sans-serif, Helvetica Neue, Helvetica, PingFang SC,
    Hiragino Sans GB Microsoft YaHei, SimSun;
}
.titleOfSelect {
  background-color: #ffffff;
  line-height: 50px;
  margin: 0 auto;
  border-radius: 7px;
}
.grid-content {
  height: 900px;
  border-color: hsl(0, 0%, 74%);
  border-radius: 7px;
  background-color: #ffffff;
  box-shadow: 5px 7px 5px #d9d9d9;
}
#courseContent::-webkit-scrollbar {
  display: none;
}
</style>