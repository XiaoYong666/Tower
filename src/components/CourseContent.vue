<template>
                <div>
                    <div style="width=100%;text-align:right">
              <el-button
                type="primary"
                size="mini"
                style="font-weight:700;background-color:#e6f7ff;color:#1890ff;margin-bottom:10px"
                round
              >添加教程</el-button>
            </div>
            <div id="courseContent" style="width:100%;height:800px;overflow:auto">
              <el-collapse v-model="activeNameInCourses" accordion >
                <el-collapse-item  title="蚂蚁摄影教程" name="1">
                  <div style="width:100%;text-align:left;margin-left:20px">
                    <div>描述:</div>
                    <p>123</p>
                    <el-divider></el-divider>
                    <div>链接:</div>
                    <p>123</p>
                    <el-divider></el-divider>
                    <div>评分:</div> <span>9</span>
                    <el-divider></el-divider>
                    <el-button>评分</el-button>
                    <el-button>修改</el-button>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
                </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>