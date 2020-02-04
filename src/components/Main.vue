<template>
  <div>
    <div style="position:relative">
      <img src="../assets/background_1.png" alt="" class="mybackground" />
      <div class="huany">欢迎来到</div>
      <div class="tongtianta">通天塔</div>
      <div class="myname">Created by liu</div>
      <div class="items">
        <div style="color:rgba(0,0,0,0.6);margin-left:700px;">众塔 ></div>
        <div style="color:rgba(64,169,255,100)">塔 ></div>
        <div style="color:rgba(255,77,79,100)">结构 ></div>
        <div style="color:rgba(250,140,22,100)">砖石 ></div>
        <div style="color:rgba(0,0,0,0.6)">沙海 ></div>
      </div>
      <div class="question">什么是通天塔？</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.question {
  position: absolute;
  font-weight: bold;
  top: 700px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  right: 150px;
}
.items div {
  font-size: 28px;
  font-weight: bold;
  margin-left: 50px;
}
.items {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  position: absolute;
  top: 600px;
}

.mybackground {
  width: 100%;
}
.huany {
  font-size: 48px;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 250px;
  left: 490px;
}
.tongtianta {
  font-weight: bold;
  font-size: 72px;
  color: #41a7fa;
  position: absolute;
  top: 310px;
  left: 660px;
}
.myname {
  font-size: 14px;
  color: rgba(16, 16, 16, 0.6);
  position: absolute;
  top: 410px;
  left: 788px;
}
</style>
