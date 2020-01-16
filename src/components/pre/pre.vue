<template>
  <el-tab-pane label="前置知识点">
    <div style="text-align:left;padding:30px">
      <el-button type="primary" round @click="dialogFormVisible = true"
        >添加知识点</el-button
      >
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
  </el-tab-pane>
</template>

<script>
export default {
  data() {
    return {
      bigTitles: [],
      results: [],
      formLabelWidth: "120px",
      formAddFront: {
        name: "",
        type: ""
      },
      dialogFormVisible: false,
      tabPosition: "left",
      dataList: [
        {
          bigTitle: "色彩",
          list: [
            {
              title: "流体力学",
              url: "http://baidu.com"
            },
            {
              title: "机械原理",
              url: "http://baidu.com"
            }
          ]
        },
        {
          bigTitle: "设备",
          list: [
            {
              title: "佳能K3-89Rt",
              url: "http://baidu.com"
            },
            {
              title: "索尼MRbK6N",
              url: "http://baidu.com"
            },
            {
              title: "kk小小",
              url: "http://baidu.com"
            }
          ]
        }
      ]
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var bigTitles = this.dataList.map(Element => {
        return { value: Element.bigTitle };
      });
      var results = queryString
        ? bigTitles.filter(Element => {
            return (
              Element.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
              0
            );
          })
        : bigTitles;
      // 调用 callback 返回建议列表的数据
      cb(results);
    }
  }
};
</script>

<style></style>
