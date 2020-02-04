<template>
  <div class="itembox">
    <div class="title">高等数学</div>
    <div class="introduce">
      数学殿堂的钥匙
    </div>
    <el-popover
      placement="right-end"
      title="理科"
      trigger="hover"
      content="这代表其中传统理科的内容偏多"
      ><el-button slot="reference" class="detype"></el-button>
    </el-popover>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.detype {
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border-width: 0px;
  background: rgba(64, 169, 255, 100);
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
