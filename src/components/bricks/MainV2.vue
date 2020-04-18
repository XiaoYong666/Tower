<template>
  <div>
    <navbar></navbar>
    <div class="backgroundDisplay">
      <div class="titleContainer">
        <div class="title">{{ title }}</div>
        <div class="buttonTop">
          <button class=" addModule cancel" @click="addModuleVisble = true">
            创建模块
          </button>
          <button class=" addpara cancel" @click="addArticleVisble = true">
            创建文章
          </button>
        </div>
        <div class="buttonRight">
          <button class=" addModule cancel" @click="watchingAdd">
            关注 <small>{{watching}}</small>
          </button>
          <button class=" addModule cancel" @click="desVisble = true">
            添加描述
          </button>
        </div>
      </div>
      <div class="contentContainer">
        <draggable
          class="leftMenu"
          v-model="modules"
          group="leftMenu"
          @start="drag = true"
          @end="drag = false"
          animation="150"
          :disabled="modulesDrag"
        >
          <div
            class="menuItems"
            v-for="(item, index) in modules"
            :class="index == select ? 'menuItemsSelect' : ''"
            :key="item._id"
            :id="item._id"
            @click="setItemData(item, index)"
            @contextmenu.prevent="onItemmenu"
          >
            {{ item.name }}
          </div>
        </draggable>

        <draggable
          class="rightContent"
          v-model="articleData"
          group="brickItem"
          @start="drag = true"
          @end="drag = false"
          animation="150"
          :disabled="articleDrag"
        >
          <brickComponent
            v-for="item in articleData"
            :key="item._id"
            :articleData="item"
            @func="reciveSig"
          ></brickComponent>
        </draggable>
      </div>
    </div>
    <el-dialog title="添加模块" :visible.sync="addModuleVisble">
      <el-form :model="moduleAddform" label-position="top">
        <el-form-item label="模块名称" :label-width="formLabelWidth">
          <el-input v-model="moduleAddform.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button class="mybutton cancel" @click="addModuleVisble = false">
          取 消
        </button>
        <button class="mybutton confirm" @click="addModule">
          确 定
        </button>
      </div>
    </el-dialog>
    <el-dialog title="添加文章" :visible.sync="addArticleVisble">
      <el-form :model="articleAddForm" label-position="top">
        <el-form-item label="文章名称" :label-width="formLabelWidth">
          <el-input v-model="articleAddForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button class="mybutton cancel" @click="addArticleVisble = false">
          取 消
        </button>
        <button class="mybutton confirm" @click="addPara">
          确 定
        </button>
      </div>
    </el-dialog>
    <el-dialog title="修改模块名字" :visible.sync="changeModuleVisble">
      <el-form :model="changeModuleNameForm" label-position="top">
        <el-form-item label="模块名称" :label-width="formLabelWidth">
          <el-input
            v-model="changeModuleNameForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button class="mybutton cancel" @click="changeModuleVisble = false">
          取 消
        </button>
        <button class="mybutton confirm" @click="changeModuleName">
          确 定
        </button>
      </div>
    </el-dialog>
    <el-dialog title="修改文章描述" :visible.sync="changeArticleVisble">
      <el-form :model="changeArticleNameForm" label-position="top">
        <el-form-item label="文章名称" :label-width="formLabelWidth">
          <el-input
            v-model="changeArticleNameForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button class="mybutton cancel" @click="changeArticleVisble = false">
          取 消
        </button>
        <button class="mybutton confirm" @click="changeParaName">
          确 定
        </button>
      </div>
    </el-dialog>
    <el-dialog title="修改砖石描述" :visible.sync="desVisble">
      <el-form :model="description" label-position="top">
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input
          type="textarea"
            v-model="description.des"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button class="mybutton cancel" @click="desVisble = false">
          取 消
        </button>
        <button class="mybutton confirm" @click="descriptionAdd">
          确 定
        </button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import brickComponent from "../component_common/BrickComponentsV1";
import navbar from "../component_common/selfnavbar";
import request from "../../request/requestV2";
/* function() {
  //$('.titleContainer').css('background-img','url(\'https://s1.ax1x.com/2020/04/03/GaEmlQ.png\')')
  document
    .getElementsByClassName("titleContainer")[0]
    .classList.add("background");
}; */

export default {
  props: ["id"],
  data() {
    return {
      title: "",
      modules: [],
      //右侧列表的文章数据
      articleData: [],
      select: 0,
      addModuleVisble: false,
      addArticleVisble: false,
      changeModuleVisble: false,
      desVisble:false,
      changeModuleNameId: "",
      changeParaNameId: "",
      changeArticleVisble: false,
      formLabelWidth: "200px",
      moduleAddform: {
        name: ""
      },
      articleAddForm: {
        name: ""
      },
      changeModuleNameForm: {
        name: ""
      },
      changeArticleNameForm: {
        name: ""
      },
      articleDrag: true,
      modulesDrag: true,
      watching:0,
      description:{
        des:""
      }
    };
  },
  components: {
    brickComponent,
    draggable,
    navbar
  },

  async mounted() {
    let { res} = await request.getBrick(this.id);
    this.title = res.title;
    this.modules = res.modules;
    this.articleData = this.modules[this.select].content;
    this.watching = res.watching,
    this.description.des = res.description
  },
  methods: {
    async addModule() {
      let brickData = await request.createNewModule(
        this.moduleAddform.name,
        this.id
      );
      this.modules = brickData.modules;
      if (this.modules != undefined) {
        this.$notify({
          title: "成功",
          message: "成功创建一个新的模块",
          type: "success"
        });
        this.addModuleVisble = false;
      } else {
        this.$notify({
          title: "失败",
          message: "对不起发现未知错误",
          type: "warning"
        });
        setTimeout(function() {
          location.reload();
        }, 3000);
      }
    },
    async addPara() {
      let { ok, res } = await request.createNewParagraph(
        this.articleAddForm.name,
        this.id,
        this.modules[this.select]._id,
      );
      if (ok == 1) {
        this.title = res.title;
        this.modules = res.modules;
        this.articleData = this.modules[this.select].content;
        this.addArticleVisble = false;
      } else {
        console.log("获取砖石数据失败");
        this.addArticleVisble = false;
      }
    },
    async sortModule() {
      let res = await request.changeModuleSort(this.id, this.modules);
      if (res.ok == 1) {
        this.articleData = this.modules[this.select].content;
        this.$notify({
          title: "成功",
          message: "更新模块排序成功",
          type: "success"
        });
      } else {
        this.$notify({
          title: "失败",
          message: "更新模块排序失败",
          type: "warning"
        });
      }
    },
    async sortArticle() {
      let res = await request.changeParaSort(
        this.id,
        this.modules[this.select]._id,
        this.articleData
      );
      if (res.ok == 1) {
        this.$notify({
          title: "成功",
          message: "更新文章排序成功",
          type: "success"
        });
        this.modules[this.select].content = this.articleData;
      } else {
        this.$notify({
          title: "失败",
          message: "更新文章排序失败",
          type: "warning"
        });
      }
    },
    async changeModuleName() {
      let res = await request.changeModuleName(
        this.id,
        this.changeModuleNameId,
        this.changeModuleNameForm.name
      );
      if (res.ok == 1) {
        this.$notify({
          title: "成功",
          message: "更新模块名称成功",
          type: "success"
        });
        this.modules.forEach(item => {
          if (item._id == this.changeModuleNameId) {
            item.name = this.changeModuleNameForm.name;
          }
        });
        this.changeModuleVisble = false;
      } else {
        this.$notify({
          title: "失败",
          message: "更新模块名称失败",
          type: "warning"
        });
        this.changeModuleVisble = false;
      }
    },
    async changeParaName() {
      let res = await request.changeParaName(
        this.id,
        this.changeParaNameId,
        this.modules[this.select]._id,
        this.changeArticleNameForm.name
      );
      if (res.ok == 1) {
        this.$notify({
          title: "成功",
          message: "更新模块名称成功",
          type: "success"
        });
        this.modules[this.select].content.forEach(item => {
          if (item.article == this.changeParaNameId) {
            item.name = this.changeArticleNameForm.name;
          }
        });
        this.changeArticleVisble = false;
      } else {
        this.$notify({
          title: "失败",
          message: "更新模块名称失败",
          type: "warning"
        });
        this.changeArticleVisble = false;
      }
    },

    //点击模块后获取模块中的数据
    setItemData(modulesItem, index) {
      this.articleData = modulesItem.content;
      this.select = index;
    },
    onItemmenu(event) {
      //console.log(event.toElement.id)
      this.$contextmenu({
        items: [
          {
            label: "重命名",
            icon: "el-icon-edit",
            onClick: () => {
              this.changeModuleVisble = true;
              this.changeModuleNameId = event.toElement.id;
            }
          },
          { label: "删除结构", disabled: true, icon: "el-icon-delete" },
          {
            label: "开启排序",
            icon: "el-icon-s-operation",
            onClick: () => {
              this.modulesDrag = false;
            }
          },
          {
            label: "关闭排序",
            icon: "el-icon-finished",
            onClick: async () => {
              await this.sortModule();
              this.modulesDrag = true;
            }
          }
        ],
        event,
        //x: event.clientX,
        //y: event.clientY,
        customClass: "class-a",
        zIndex: 3,
        minWidth: 200
      });
      return false;
    },
    reciveSig(signal) {
      if (signal == 2) {
        this.articleDrag = false;
      }
      if (signal == 3) {
        this.sortArticle();
        this.articleDrag = true;
      } else {
        this.changeParaNameId = signal;
        this.changeArticleVisble = true;
      }
    },
    async watchingAdd(){
      await request.watchingAdd(this.id)
      this.watching+=1
    },
    async descriptionAdd(){
      await request.descriptionAdd(this.id,this.description.des)
      this.desVisble = false
    }
  }
};
</script>

<style scoped>

.backgroundDisplay{
  background-image: url("https://s1.ax1x.com/2020/04/04/G0l0nP.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100vw auto;
}

.el-input {
  width: 100%;
}
.buttonTop {
  position: absolute;
  left: 1rem;
  display: flex;
  flex-direction: column;
}
.cancel {
  font-size: 0.7rem;
  margin: 10px 0 10px 0;
}

.newModule {
  border-radius: 2px;
  border: 2px solid black;
  padding: 5px;
  width: 5rem;
  height: 2rem;
}
.titleContainer {
  width: 90vw;
  height: 15vh;
  margin: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100vw auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5px;
}

.title {
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
}
.contentContainer {
  display: flex;
  width: 100%;
  height: 85vh;
  flex-direction: row;
}
.leftContent {
  background-color: white;
  overflow-y: scroll;
}
.leftContent::-webkit-scrollbar {
  display: none;
}

.leftMenu {
  width: 12vw;
  background-color: white;
  border-right: 1.5px solid #e9e9e9;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  transition: width 1s;
  align-items: center;
  border-radius: 5px 0 0 5px;
  margin-left:3vw;
  border-right: #d9d9d9 solid 1px;
  
}
.menuItems {
  margin-top: 0.5rem;
  cursor: pointer;
  color: black;
  width: 70%;
  border-radius: 3px;
  height: 2rem;
  transition: color 0.5s;
  line-height: 2rem;
}
.menuItems:hover {
  font-weight: bold;
}
.menuItemsSelect {
  
  color: #52c41a;
  font-weight: bold;
}

.leftMenu::-webkit-scrollbar {
  display: none;
}
.rightContent {
  width: 80vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-right:5vw;
  border-radius: 0 5px 5px 0;
}

.buttonRight{
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1024px) {
  .contentContainer {
    flex-direction: column;
  }
  .leftMenu {
    height: 8vh;
    width: 90vw;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    overflow-x: scroll;
    margin: 0 5vw 10px 5vw;
    border-radius: 5px;
  }
  .leftMenu .menuItems {
    margin: 0 0 0 1rem;
    padding: 0;
    flex-shrink: 0;
    width: auto;
  }
  .rightContent {
    height: 77vh;
    width: 94vw;
    margin: 0 3vw 0 3vw;
    border-radius: 5px;
  }
  .backgroundDisplay{
  background-image: url("https://s1.ax1x.com/2020/04/04/G0l0nP.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: auto 100vh;
  background-position: center;
}
}

</style>
