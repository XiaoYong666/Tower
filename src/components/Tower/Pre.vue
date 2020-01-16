<template>
  <div id="prePoint" style="position:relative">
    <div
      style="width:200px;height:300px;position:absolute;background-color:white;border-radius:7px;"
    >
      <el-button
        type="primary"
        icon="el-icon-edit"
        round
        style="margin-top:20px"
        @click="addFormVisible = true"
        >添加知识点</el-button
      >
      <el-button
        type="danger"
        icon="el-icon-delete"
        round
        style="margin:20px 0 0 0"
        >删除知识点</el-button
      >
    </div>
    <div id="mynetwork" style="float:right"><div></div></div>

    <el-dialog title="添加新节点" :visible.sync="addFormVisible">
      <el-form :model="form">
        <el-form-item label="根节点" :label-width="formLabelWidth">
          <el-input v-model="form.root" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="子节点" :label-width="formLabelWidth">
          <el-input v-model="form.son" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addEdge">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vis from "vis-network/dist/vis-network.min.js";

export default {
  data() {
    return {
      formLabelWidth: "120px",
      addFormVisible: false,
      form: {
        root: "",
        son: ""
      },
      vueNodes: [
        { id: 1, label: "高等数学", color: "#F6212D", font: { color: "#fff" } },
        { id: 2, label: "初中数学" },
        { id: 3, label: "小学数学" },
        { id: 4, label: "高中数学" },
        { id: 5, label: "初中奥赛" },
        { id: 6, label: "小学奥赛" },
        { id: 7, label: "初中奥赛" }
      ],
      vueEdges: [
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 2, to: 6 },
        { from: 2, to: 3 },
        { from: 5, to: 2 },
        { from: 4, to: 2 }
      ]
    };
  },
  methods: {
    renderCav() {
      let vueNodes = this.vueNodes;
      let vueEdges = this.vueEdges;
      let nodes = new vis.DataSet(vueNodes);
      let edges = new vis.DataSet(vueEdges);

      let container = document.getElementById("mynetwork");
      let data = {
        nodes,
        edges
      };
      let options = {
        layout: {
          hierarchical: {
            direction: "UD",
            sortMethod: "directed",
            shakeTowards: "roots",
            levelSeparation: 100
          }
        },
        edges: {
          color: "#000",
          width: 2,
          smooth: {
            enabled: true,
            type: "dynamic",
            forceDirection: "none",
            roundness: 0
          }
        },
        nodes: {
          color: "#E8E8E8",
          shape: "box",
          margin: 20,
          shapeProperties: {
            borderRadius: 3
          },
          font: {
            color: "#000",
            size: 15
          }
        }
      };
      new vis.Network(container, data, options);
    },
    addEdge() {
      console.log("add");
      let sonId = this.vueNodes[this.vueNodes.length - 1].id + 1;
      let rootId =
        this.vueNodes.findIndex(el => {
          return el.label == this.form.root;
        }) + 1;

      let edge = { from: rootId, to: sonId };
      this.vueNodes.push({ id: sonId, label: this.form.son });
      this.vueEdges.push(edge);
      this.renderCav();
      this.addFormVisible = false;
    },
    deleteEdge() {
      this.vueNodes = this.vueNodes.filter(el => {
        return el.label != this.from.value;
      });
    }
  },
  mounted() {
    this.renderCav();
  }
};
</script>

<style>
#mynetwork {
  width: 700px;
  height: 500px;
  border-radius: 7px;
  background-color: white;
}
</style>
