<template>
  <div class="container">
    <div class="menu" @click="get">
      <nested-draggable :tasks="menuContent" />
    </div>
    <div class="content">
      <!-- <div class="toolbar"></div> -->
      <div v-if="show==1" class="showContent" v-html="showContent"></div>
      <div v-if="show==0" id="vditor"></div>
    </div>
    <div class="comment">
      <textarea name="addNewComment" id="addNewComment"></textarea>
      <el-button>发送</el-button>
      <div v-for="(p,index) in ping" :key="index" class="commentBox">

        <p>{{p.content}}</p>
        <p>{{"评论人:"+p.name}}</p>
        <small>{{p.time}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import Vditor from "vditor";
//import 'vditor/dist/method.min'
import nestedDraggable from "../component_common/draglist";
//import draggable from "vuedraggable";
import "vditor/dist/index.css";
export default {
  components: {
    nestedDraggable,
  },
  data() {
    return {
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
              "help",
            ],
          },
          {
            name:"back",
            tip:"回到展示模式",
            icon:`<svg t="1590290260505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2260" width="128" height="128"><path d="M760.49066666 562.176c-12.8 0-25.6-5.12-35.84000001-14.848l-415.74399999-411.648c-19.968-19.968-19.968-51.712-0.512-71.68s51.712-19.968 71.68-0.51199999l415.744 411.64799999a50.8416 50.8416 0 0 1 0.51199999 71.68c-9.216 10.75200001-22.528 15.36-35.83999999 15.36z" fill="#2c2c2c" p-id="2261"></path><path d="M349.35466666 977.92c-12.8 0-25.6-5.12-35.84-14.848-19.968-19.968-19.968-51.712-0.512-71.68l411.648-415.744a50.8416 50.8416 0 0 1 71.68-0.512 50.8416 50.8416 0 0 1 0.512 71.67999999L385.19466666 962.56000001c-9.728 10.24-23.04 15.36-35.84 15.35999999z" fill="#2c2c2c" p-id="2262"></path></svg>`,
            click:()=>{
              this.showContent=this.get()
              this.show=1
            }
          }
        ],
        toolbarConfig: {
          pin: true,
        },
        preview: {
          hljs: {
            lineNumber: true,
          },
          markdown: {
            chinesePunct: true,
            footnotes: true,
            paragraphBeginningSpace: true,
          },
          math: {
            inlineDigit: true,
            engine: "MathJax",
          },
        },
        minHeight: 500,
        after: () => {
          //this.editor.setValue("Hello, Vue + Vditor!");
        },
      },
      menuContent: [
        {
          name: "标题一巴拉巴拉巴拉",
          tasks: [
            {
              name: "标题二巴拉巴拉巴拉",
              tasks: [],
            },
          ],
        },
        {
          name: "标题3巴拉巴拉巴拉",
          tasks: [
            {
              name: "标题4巴拉巴拉巴拉",
              tasks: [],
            },
          ],
        },
        {
          name: "标题5巴拉巴拉巴拉",
          tasks: [],
        },
      ],
      showContent:'',
      show:0,
      ping:[{
        name:"刘政东",
        content:"liupi",
        time:"2020年5月24日"
      }]
    };
  },
  mounted() {
    this.editor = new Vditor("vditor",this.editorConfig);
  },
  methods: {
    get() {
      console.log(this.editor.md2html(this.editor.getValue()));
    },
  },
};
</script>

<style lang="less" scoped>

@import "../../assets/pie.css";

.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  .menu {
    width: 20%;
    min-height: 100%;
    background-color: #ffffff;
    padding: 2rem 7px 0 10px;
  }
  .content {
    width: 60%;
    min-height: 100%;
    .showContent{
      width: 100%;
      height: 100%;
    }
    #vditor {
      height: 666px;
    }
  }
  .comment{
    width:20%;
    min-height:100%;
    position: relative;
    #addNewComment{
      margin: 20px;
      border-radius: 5px;
      width:80%;
      height:100px;
      resize: none;
      outline:none ;
      transition: border 0.5s;
      padding: 10px;
      border:1px solid #bfbfbf;
      &:focus{
        border:1px solid #919191;
      }
    }
    .el-button{
       height: 20px;
       line-height: 0px;
       position: absolute;
       right:45px;
       top:90px;
       span{
         line-height: 20px;
       }
      /* width:90px; */
      //background: cornflowerblue;
      /* border:none; */
    }
    .commentBox{
      margin:20px;
      border:none;
      border-radius: 5px;
      box-shadow: 2px 2px 4px 1px #e9e9e9;

    }
  }
}
</style>
