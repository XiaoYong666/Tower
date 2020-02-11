<template>
  <div class="itembox" v-on:click="pushToDetail">
    <div class="title">{{item.name}}</div>
    <div class="introduce">
      {{item.introduce}}
    </div>
    <el-popover
      placement="right-end"
      v-bind:title="item.label.title"
      trigger="hover"
      v-bind:content="item.label.introduce"
      ><el-button slot="reference" class="detype" :class="item.label.color"></el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name:"brick",
  props:{
    item:Object
  },
  methods:{
    pushToDetail(){
      this.$store.commit('changeBrickState',this.item.name)
      this.$router.push({path:"brickDetails"})
    }
  }
};
</script>

<style scoped>
.detype {
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border-width: 0px;
  padding: 0px;
  position: absolute;
  top: 7px;
  right: 7px;
}
.itembox .introduce {
  position: absolute;
  font-size: 12px;
  top: 55px;
  left: 23px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.itembox .title {
  position: absolute;
  left: 23px;
  top: 15px;
  font-size: 20px;
  font-weight: bold;
}

.itembox {
  width: 250px;
  height: 90px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
