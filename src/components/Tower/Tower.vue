<template>
  <div style="width:80%;margin:0 auto;">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="前置知识点"><Pre></Pre></el-tab-pane>
      <el-tab-pane label="后置知识点">后置知识点</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Pre from "./Pre";

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
      tabPosition: "right",
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
  },
  mounted() {},
  components: {
    Pre
    //Beh
  }
};
</script>

<style>
#smallItem {
  width: 100px;
  height: 70px;
  margin: 10px 20px 10px 20px;
  background-color: white;
  padding-bottom: 20px;
  border-radius: 7px;
  transition: all 0.25s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
