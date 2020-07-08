<template>
  <div class="container">
    <div class="menu">
      <div class="title">
        <div>{{title}}</div>
        <!--<i class="el-icon-plus" @click="addNewNode()"></i>-->
      </div>
      
        <nestedDraggable :newArr="menuContent" :brickId="'123'" v-on:getContent="getContent"></nestedDraggable>
      
    </div>
    <div class="contentArea">
      <div class="content">
        <!-- <div class="toolbar"></div> -->
        <div class="showContent" id="showContent" v-html="contentHtml"></div>
      </div>
    </div>
    <div class="info">
      <div class="articleInfo">
        <div>最后更新时间</div>
        <div>版本</div>
        <div>协议</div>
        <div>点赞数</div>
        <div>订阅数</div>
      </div>
      <div class="handleArea">
        <a>订阅</a>
        <a>点赞</a>
        <a>评论</a>
        <a>转发</a>
        <a @click="guanbibianji()">编辑</a>
      </div>
    </div>
    <!-- <div class="comment">
      <textarea name="addNewComment" id="addNewComment"></textarea>
      <el-button>发送</el-button>
      <div v-for="(p,index) in ping" :key="index" class="commentBox">

        <p>{{p.content}}</p>
        <p>{{"评论人:"+p.name}}</p>
        <small>{{p.time}}</small>
      </div>
    </div>-->

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item :label="dialogWant" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//import Vditor from "vditor";
//import VditorPreview from "vditor/dist/method.min";
//import { v4 as uuidv4 } from "uuid";
//import 'vditor/dist/method.min'
import nestedDraggable from "../component_common/draglist";
//import draggable from "vuedraggable";
import "vditor/dist/index.css";
export default {
  components: {
    nestedDraggable
  },
  data() {
    return {
      //allowDrag:true,
      //allowDrop:true,
      editor: "",
      editorConfig: {
        toolbar: [
          "headings",
          "bold",
          "italic",
          "strike",
          "link",
          "|",
          "list",
          "ordered-list",
          "check",
          "outdent",
          "indent",
          "|",
          "quote",
          "line",
          "code",
          "inline-code",
          "insert-before",
          "insert-after",
          "|",
          "table",
          "|",
          "undo",
          "redo",
          "|",
          "fullscreen",
          "edit-mode",
          {
            name: "more",
            toolbar: [
              "both",
              "export",
              "outline",
              "preview",
              "format",
              "info",
              "help"
            ]
          }
        ],
        toolbarConfig: {
          pin: true
        },
        preview: {
          hljs: {
            lineNumber: true
          },
          markdown: {
            chinesePunct: true,
            footnotes: true,
            paragraphBeginningSpace: true
          },
          math: {
            inlineDigit: true,
            engine: "KaTeX"
          }
        },
        minHeight: 500,
        after: () => {
          //this.editor.setValue("Hello, Vue + Vditor!");
        }
      },
      menuContent: [
        {
          name: "Node 0-0",
          id: 0,
          level: 0
        },
        {
          name: "Node 0-1",
          id: 14,
          level: 1
        },
        {
          name: "Node 1-1",
          id: 3,
          level: 0
        },
        {
          name: "Node 1-2",
          id: 13,
          level: 0

        },
        {
          name: "Node 2-1",
          id: 4,
          level: 0

        },
        {
          name: "Node 2-2",
          id: 10,
          level: 0

        }
      ],
      showContent: "",
      show: 0,
      formLabelWidth: "120px",
      form: {
        name: ""
      },
      dialogTitle: "修改模块名称",
      dialogVisible: false,
      dialogWant: "名称",
      comments: [
        {
          name: "刘政东",
          content: "liupi",
          time: "2020年5月24日"
        }
      ],
      title: "机械设计",
      contentHtml: "<p>That's a good start</p>",
      choiceId: ""
    };
  },
  mounted() {
    //localStorage.setItem("brickState", true);
    //this.editor = new Vditor("vditor", this.editorConfig);
  },
  methods: {
    async getList(){
      console.log('获得砖石的列表')
    },
    async getContent(id){
      console.log('获得'+id+'模块的内容')
    }


  },
  created() {
    this.getList()
  }
};
</script>

<style lang="less" scoped>
//@import "../../assets/pie.css";

.container {
  min-height: 100vh;
  width: 100%;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", "sans-serif";

  .menu {
    position: fixed;
    width: 20%;
    height: 81%;
    background-color: #ffffff;
    border-right: 1px solid #f5f5f5;
    .title {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      .el-icon-plus {
        position: absolute;
        right: 10px;
        font-size: 17px;
        cursor: pointer;
        top: 24px;
      }
    }
    .is-clicked {
      color: orange;
    }
    .vueDragTree {
      margin: 0 10px;
      cursor: pointer;
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
    }
  }
  .contentArea {
    margin-left: 20%;
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: row;

    .content {
      width: 100%;
      min-height: 100%;

      .showContent {
        width: 100%;
        height: auto;
        min-height: 900px;
        padding: 20px 10px 10px 20px;
      }
      #vditor {
        height: 666px;
      }
    }
    .comment {
      width: 20%;
      min-height: 100%;
      position: relative;
      #addNewComment {
        margin: 20px;
        border-radius: 5px;
        width: 80%;
        height: 100px;
        resize: none;
        outline: none;
        transition: border 0.5s;
        padding: 10px;
        border: 1px solid #bfbfbf;
        &:focus {
          border: 1px solid #919191;
        }
      }
      .el-button {
        height: 20px;
        line-height: 0px;
        position: absolute;
        right: 45px;
        top: 90px;
        span {
          line-height: 20px;
        }
        /* width:90px; */
        //background: cornflowerblue;
        /* border:none; */
      }
      .commentBox {
        margin: 20px;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 4px 1px #e9e9e9;
      }
    }
  }
  .info {
    margin-left: 20%;
    width: 80%;
    height: 30px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    .articleInfo {
      width: 70%;
      display: flex;

      flex-direction: row;
      justify-content: space-around;
    }
    .handleArea {
      width: 20%;
      display: flex;
      flex-direction: row;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", "sans-serif";
      a {
        opacity: 0.4;
        transition: 0.5s;
        text-decoration: none;
        color: #5a5a5a;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
      }
      &:hover {
        a {
          opacity: 1;
          margin-right: 10px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
