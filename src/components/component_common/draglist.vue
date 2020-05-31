<template>
  <draggable
    class="dragArea"
    tag="ul"
    :list="tasks"
    :group="{ name: 'g1' }"
    animation="200"
    handle=".el-icon-rank"
  >
    <li v-for="el in tasks" :key="el.name">
      <!-- <a v-if="el.tasks.length!=0" class="menuicon el-icon-caret-right"  ></a> -->
      <div class="item" :id="el.name">
        <i class="el-icon-rank"></i>
        <!-- 如果没有子任务则隐藏下拉图标 -->
        <a v-if="el.tasks.length!=0" class="button el-icon-caret-bottom" :id="el.name+123" @click="hide(el.name)"></a>
        <p>{{ el.name }}</p>
        <div style="height:10px;display:block" v-if="el.tasks.length!=0"></div>
        <nested-draggable :tasks="el.tasks" />
      </div>
    </li>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";

export default {
  props: {
    tasks: {
      required: true,
      type: Array,
    },
  },
  components: {
    draggable,
  },
  name: "nested-draggable",
  methods: {
    hide(name) {
      //console.log(name)
      let li = document.getElementById(name);
      let a = document.getElementById(name+123)
      if (li.classList.contains("hidden")) {
        li.classList.remove("hidden");
        a.classList.remove("el-icon-caret-right");
        a.classList.add("el-icon-caret-bottom");
      } else {
        li.classList.add("hidden");
        a.classList.remove("el-icon-caret-bottom");
        a.classList.add("el-icon-caret-right");
      }
    },
  },
};
</script>
<style scoped lang="less">
.dragArea {
  min-height: 6px;
  /* outline: 1px dashed; */  
  padding: 0px 0 5px 10px;
  position: relative;
  list-style-type: none;
  margin-top: 0px ;
  li {
    margin: 0 0 5px 5px;
    position: relative;
    height: auto;
    transition: height 0.5s ease;
    .item {
        text-align: start;
      .button{
          display: inline;
          position: absolute;
          left: -16px;
          top:5px;
          &::before{
              color: orange;
              cursor: pointer;
          }
      }
      .el-icon-rank{
          position: absolute;
          right: 5px;
          top:5px;
          opacity: 0;
          &:hover{
              opacity: 0.5;
              cursor: grab;
          }
      }
      p {
        display: inline;
        margin: 0 0 10px 0;
        text-align: start;
      }
    }
  }
  .hidden {
    height: 30px;
    transition: all 0.5s ease-in-out;
    overflow-y: hidden;
  }
}
</style>
