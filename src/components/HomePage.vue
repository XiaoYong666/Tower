<template>
  <div style="width:100%;height:100%;display:flex;margin:0 auto;flex-direction:column">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div style="font-size:27px;font-weight:700;margin:20px 0 20px 0;padding-top:20px">
                前置
              <el-collapse v-model="activeNameForFront" accordion style="margin:20px 20px 0 20px">
                <el-collapse-item title="必修" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="选修" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
              </el-collapse>
              <div style="width:200px;text-align:right;bottom:7px;position:absolute">
                  <el-button type="primary" size="mini" style="font-weight:600;background-color:#e6f7ff;color:#1890ff;" round>添加科目</el-button>
                      <el-button
                        type="danger"
                        size="mini"
                        style="background-color:#E24151;font-weight:700;"
                      >举报</el-button>
                </div>
              </div>
              
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple" >
              <div style="font-size:27px;font-weight:700;margin:20px 0 20px 0;padding-top:20px">摄影</div>
              <div style="margin:0 auto;height:100%">
                <el-tabs
                  v-model="activeName"
                  @tab-click="handleClick"
                  style="width:90%;display:block;margin:0 auto;height:100%"
                >
                  <el-tab-pane label="介绍" name="first" style="margin-left:10px">介绍</el-tab-pane>
                  <el-tab-pane label="教程" name="second">
                    <div style="width=100%;text-align:right">
                      <el-button type="primary" size="mini" style="font-weight:700;background-color:#e6f7ff;color:#1890ff;" round>添加教程</el-button>
                      <el-button
                        type="danger"
                        size="mini"
                        style="background-color:#E24151;font-weight:700;"
                      >举报</el-button>
                    </div>
                    <el-collapse v-model="activeNameInCourses" accordion>
                      <el-collapse-item style="font-size:20px" title="蚂蚁摄影教程" name="1">
                        <div style="width:100%">
                          <div>描述:</div>
                          <div>链接:</div>
                          <el-rate
                            v-model="pickValue"
                            show-score
                            text-color="#ff9900"
                            score-template="{value}"
                            style="text-align:right"
                          ></el-rate>
                        </div>
                      </el-collapse-item>
                      <el-collapse-item title="蚂蚁摄影教程" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                      </el-collapse-item>
                      <el-collapse-item title="蚂蚁摄影教程" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                      </el-collapse-item>
                      <el-collapse-item title="蚂蚁摄影教程" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                      </el-collapse-item>
                    </el-collapse>
                  </el-tab-pane>
                  <el-tab-pane label="其他相关" name="third">其他相关</el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              
              <div style="font-size:27px;font-weight:700;margin:20px 0 20px 0;padding-top:20px">后置
                <el-collapse v-model="activeNameForNext" accordion style="margin:20px 20px 0 20px">
                <el-collapse-item title="必修" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item v-for="item in dataForpostposition" :key="item.key">
                  {{Object.keys(item)}}
                </el-collapse-item>
              </el-collapse>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
</template>

<script>
export default {
name:"HomePage",
data(){
  return{
      pickValue: 3.7,
      activeNameInCourses: "1",
      activeName: "second",
      activeNameForFront:'1',
      activeIndex: "1",
      activeIndex2: "1",
      activeNameForNext:'1',
      dataForpostposition:{
        "top":{
          "表严肃":{
            "描述":"123",
            "链接":"",
            "评价":""
          }
        },
        "notop":{
          "nothing":true
        }
      }
  }
},
methods:{
  handleClick(tab, event) {
      console.log(tab, event);
    }
    
}
}
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


</style>