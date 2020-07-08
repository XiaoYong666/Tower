<template>
  <draggable
    class="dragArea"
    v-model="data"
    tag="div"
    :group="{ name: 'g1' }"
    animation="100"
    :disabled="disableDrag"
    @end="change"
  >
    <div v-for="el in this.data" :key="el.id">
      <!-- <a v-if="el.tasks.length!=0" class="menuicon el-icon-caret-right"  ></a> -->
      <div
        :class="['item',selected==el.id?'selected':'']"
        @click="changeState(el.id)"
        @contextmenu.prevent="onContextmenu"
        @dblclick="addChild(el.id)"
      >
        <!-- <i class="el-icon-rank"></i> -->
        <!-- 如果没有子内容则隐藏下拉图标 -->
        <div class="title" :style="'position:relative;left:'+el.level*14+'px'" :id="el.id">
          <i class="no-vue-drag-node-icon"></i>
          <div class="Text">{{ el.name }}</div>
        </div>
      </div>
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "nestedDraggable",
  data() {
    return {
      nodeSelected: false,
      data: this.newArr,
      draging: false,
      disableDrag: false,
      selectNodeId:""
    };
  },
  props: {
    newArr: {
      required: true,
      type: Array
    },
    brickId: {
      type: String
    }
  },
  components: {
    draggable
  },
  methods: {
    changeState(id) {
      this.selectNodeId=id;
      this.getContent(id)
    },
    rename(id) {
      let i = this.findNode(id);
      if (i == -1)return;
      let newName = prompt("请输入新的标题（恶意修改将导致封号）");
      if (newName == "")return;
      this.data[i].name = newName;
      let changeSignal={
        type:"rename",
        index:i,
        name:newName
      }
      this.sync(changeSignal);
    },
    removeChild(id) {
      let i = this.findNode(id);
      if (i == -1) return;
      this.data.splice(i, 1);
      let changeSignal={
        type:"remove",
        index:i
      }

      this.sync(changeSignal);


    },
    onContextmenu(event) {
      //let _model = this.model
      this.$contextmenu({
        items: [
          {
            label: "重命名",
            icon: "el-icon-name",
            onClick: () => {
              this.rename(event.target.id);
            }
          },
          {
            label: "删除此模块",
            icon: "el-icon-minus",
            onClick: () => {
              let r = confirm("删除子模块是危险操作（恶意删除将导致封号）");
              if (r == true) {
                this.removeChild(event.target.id);
              }
            }
          },
          {
            label: "开启拖拽",
            icon: "el-icon-open",
            onClick: () => {
              this.disableDrag = false;
            }
          },
          {
            label: "关闭拖拽",
            icon: "el-icon-close",
            onClick: () => {
              this.disableDrag = true;
            }
          },
          {
            label: "修改层级",
            icon: "el-icon-edit",
            onClick: () => {
              this.relevel(event.target.id);
            }
          }
        ],
        event,
        //x: event.clientX,
        //y: event.clientY,
        customClass: "class-a",
        zIndex: 3,
        minWidth: 230
      });
      return false;
    },
    relevel(id) {
      let i = this.findNode(id);
      let r = prompt("请修改当前模块的层级", this.data[i].level);
      if (r < 6 && r >= 0) {
        this.data[i].level = r;
        let changeSignal={
        type:"relevel",
        index:i,
        level:r
      }
      this.sync(changeSignal)



      } else {
        alert("修改层数过大或过小");
      }

    },
    findNode(id) {
      let i = 0;
      for (; i < this.data.length; i++) {
        if (this.data[i].id == id) {
          return i;
        }
      }
      return -1;
    },
    addChild(id) {
      let i = this.findNode(id);
      if (i == -1) return;
      let r = confirm('确认要添加新模块吗？（恶意添加将导致封号）')
      if(r==false)return
      this.data.splice(i + 1, 0, {
          name: "新模块",
          id: uuidv4(),
          level: this.data[i].level + 1
      });
      let changeSignal={
        type:"add",
        index:i+1,
        data:this.data[i+1]
      }
      this.sync(changeSignal)
    },
    sync(changeSignal) {
      console.log('同步:'+changeSignal.type)
    },
    change(evt){
      let changeSignal={
        type:"sort",
        newIndex:evt.newIndex,
        oldIndex:evt.oldIndex
      }
      this.sync(changeSignal)
    },
    getContent(id){
      this.$emit('getContent',id)
    }
  },
  computed: {
    selected() {
      return this.selectNodeId;
    }
  },
  created() {}
};
</script>
<style scoped lang="less">
.dragArea {
  //min-height: 6px;
  /* outline: 1px dashed; */
  //padding: 0px 0 5px 25px;
  position: relative;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  height: 92%;
  overflow-y: scroll;
  overflow-x:none ;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }

  div {
    //margin: 0 0 5px 5px;
    position: relative;
    height: auto;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      color: rgba(0, 0, 0, 1);
    }
    .item {
      text-align: start;
      height: auto;
      position: relative;
      margin: 0 10px 0 10px;
      border-radius: 5px;
      height: 30px;
      &:hover {
        background-color: #e9e9e9;
      }
      .title {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        .Text {
          line-height: 30px;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
        }
        .vue-drag-node-icon {
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 10px;
          margin-right: 8px;
          border-left: 4px solid #222222;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-right: 0 solid yellow;
          transition: transform 0.3s ease-in-out;
          position: relative;
          top: 11px;
        }
        .no-vue-drag-node-icon {
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 10px;
          margin-right: 8px;
          border-left: 4px solid #222222;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-right: 0 solid yellow;
          transition: transform 0.3s ease-in-out;
          position: relative;
          top: 11px;
          opacity: 0;
        }
        .point {
          top: 5px;
          left: -5px;
          font-size: 5px;
          cursor: pointer;
          &.gg-details-more {
            transform: scale(0.8);
            color: orange;
          }
        }
      }
      p {
        display: inline;
        margin: 0 0 10px 0;
        text-align: start;
      }
    }
    .selected {
      background-color: #ffe7ba !important ;
    }
  }
}
</style>
