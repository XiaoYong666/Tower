<template>
  <div>
      <div class="container" @contextmenu.prevent="onContextmenu" @click="toDetial">
        <div class="name">{{articleData.name}}</div>
      </div>
  </div>
</template>

<script>


export default {
  props:["articleData"],
  data(){
    return{}
  },
  methods: {
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          {
            label: "重命名",
            icon: "el-icon-edit",
            onClick: () => {
              this.$emit('func',this.articleData.article)
            }
          },
          { label: "删除模块",
            disabled:true, 
            icon: "el-icon-delete",
            onClick: () => {
              this.$emit('func',1)
            }
            },
          { label: "开启排序",
          icon: "el-icon-delete",
          onClick: () => {
              this.$emit('func',2)
            }
          },
          { label: "关闭排序",
          icon: "el-icon-delete",
          onClick: () => {
              this.$emit('func',3)
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
    toDetial(){
      this.$router.push({path:"/article/"+this.articleData.article})
    }
  }

}
</script>

<style scoped>
.container{
  width:70vw;
  box-shadow: 2px 2px 6px 0px #bfbfbf;
  border-radius: 3px;
  
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  margin:0 auto;
  margin-top:1rem;
}
.name{
  margin-left:3rem;
  font-weight: bold;
  font-size: 1.1rem;
}

</style>