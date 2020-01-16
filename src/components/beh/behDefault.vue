<template>
  <el-tab-pane label="后置知识点">
    <div style="text-align:left;padding:30px">
      <el-button type="primary" round>添加知识点</el-button>
      <el-button
        type="danger"
        circle
        style="margin-left:20px"
        icon="el-icon-delete"
      ></el-button>
    </div>
    <div v-for="item in dataList" v-bind:key="item.bigTitle">
      <p style="text-align:left;font-size:24px;font-weight:700">
        {{ item.bigTitle }}
      </p>
      <el-divider></el-divider>
      <div style="width:100%;display:flex;flex-direction:colom;flex-wrap:wrap">
        <div
          v-for="smitem in item.list"
          v-bind:key="smitem.title"
          id="smallItem"
          style="width:auto;height:50px;padding:0 20px 0 20px;"
        >
          <p style="font-size:17px;font-weight:600;position:relative;top:-3px">
            <a :href="smitem.url" style="color:black">{{ smitem.title }}</a>
          </p>
        </div>
      </div>
    </div>
  </el-tab-pane></template
>

<script>
export default {};
</script>

<style></style>
