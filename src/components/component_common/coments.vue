<template>
  <div >
    <el-tooltip
      placement="top"
      effect="light"
      
    >
      <div slot="content" >{{this.commentData.content}}</div>
      <div :class="'circle ' + commentData.type+' '+displayState"
      :id="commentData._id"
      @contextmenu.prevent="onItemmenu"></div>
    </el-tooltip>
  </div>
</template>

<script>
import marked from "marked";
import request from "../../request/requestV2";

export default {
  props: ["commentData", "articleId","displayState"],
  data() {
    return {
      commentType: ""
    };
  },
  computed: {
    htmlData() {
      return marked(this.commentData.content);
    }
  },
  methods: {
    onItemmenu(event) {
      //console.log(event.toElement.id)
      this.$contextmenu({
        items: [
          {
            label: "建议删除",
            icon: "el-icon-delete",
            onClick: () => {
              this.deleteComment();
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
    async deleteComment() {
      let res = await request.deleteComment(
        this.articleId,
        this.commentData._id
      );
      if (res.ok != 0) {
        this.$notify({
          title: "成功",
          message: "成功建议删除，请不要重复",
          type: "success"
        });
      } else {
        this.$notify({
          title: "失败",
          message: "出现未知错误",
          type: "warning"
        });
      }
    }
  },
  mounted(){
      let coment=document.getElementById(this.commentData._id)
        coment.style.left = this.commentData.positionX+'px'
        coment.style.top = this.commentData.positionY +'px'
  }
};
</script>

<style scoped>
.displayFalse{
    display: none;
    opacity: 0%;
}

.circle {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  position: absolute;
  transition: width height border-radius 1s;
}

.circle:hover {
    width: 16px;
    height: 16px;
    border-radius: 8px;
}
.red {
  background-color: #f5222d;
  box-shadow:1px 1px 3px 0px #f5222d73;
}
.orange {
  background-color: #fa8c16;
  box-shadow:1px 1px 3px 0px #fa8c167a;
}
.blue {
  background-color: #1890ff;
    background-color: #188fff75;

}
</style>
