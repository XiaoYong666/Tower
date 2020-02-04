<template>
  <div>
    <div class="header">
      <div class="title-header">高等数学</div>
      <div class="decorate"></div>
      <el-button class="rule">规则</el-button>
      <el-button class="feedback">问题反馈</el-button>
    </div>
    <div class="main">
      <div class="nav">
        <el-button type="text" class="item">教程</el-button>
        <el-button type="text" class="item">实践</el-button>
        <el-button type="text" class="item">人物</el-button>
        <el-button type="text" class="item">社区</el-button>
        <el-button type="text" class="item">工具</el-button>
        <el-button type="text" class="item">书</el-button>
        <el-button type="text" class="item shuati">刷题</el-button>
      </div>
      <div class="content">
        <div class="card">
          <div class="title"><a href="http://">张宇高数</a></div>
          <div class="introduce"><p>张宇高数没人质疑吧?</p></div>
          <div class="jiesuo">解锁码：2E6Y</div>
          <div class="time">2019-10-19</div>
          <div class="zan">
            <el-button type="text" class="button-zan" v-on:click="log"
              ><img class="dianzan" src="../../../assets/zan.png" alt="点赞按钮"
            /></el-button>
            <div class="number">431</div>
          </div>
          <el-popover
            placement="right-end"
            title="理科"
            trigger="hover"
            content="这代表其中传统理科的内容偏多"
            ><el-button slot="reference" class="state"></el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      console.log("dianji");
    }
  }
};
</script>

<style scoped>
.button-zan {
  padding: 1px 4px 1px 1px;
  position: relative;
  bottom: 3px;
  z-index: 3;
}
.state {
  width: 14px;
  height: 14px;
  border-radius: 7px;
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: rgba(255, 77, 79, 100);
  padding: 0px;
}

.zan img {
  width: 20px;
  z-index: 1;
  cursor: pointer;
}

.zan {
  position: absolute;
  right: 30px;
  bottom: 15px;
  font-size: 12px;
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-weight: bold;
}
.time {
  position: absolute;
  color: rgba(0, 0, 0, 0.5);
  left: 30px;
  bottom: 23px;
  font-size: 12px;
}
.jiesuo {
  position: absolute;
  color: #f759ab;
  left: 30px;
  top: 57px;
  font-size: 12px;
  font-weight: bold;
}

.introduce {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 65px;
  left: 30px;
  width: 265px;
  height: 270px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
}

.dianzan:hover {
  opacity: 0.5;
}
.title a:hover {
  color: rgba(255, 77, 79, 100);
}
a:link {
  color: black;
}

.title {
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 30px;
}

.card {
  width: 330px;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 20px 20px 20px 20px;
}

.content {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 0 auto;
  width: 90%;
}

.nav .item {
  margin-left: 25px;
  font-size: 20px;
}

.nav {
  width: 90%;
  margin: 0 auto;
  height: 50px;
  background-color: rgba(64, 169, 255, 0.12);
  box-shadow: 0 2px 6px 0 rgba(64, 169, 255, 0.12);
  display: flex;
  align-items: center;
}
.feedback {
  background-color: rgba(64, 169, 255, 100);
  width: 100px;
  height: 42px;
  border-radius: 14px;
  position: absolute;
  top: 20px;
  right: 80px;
  color: white;
}
.rule {
  background-color: rgba(255, 77, 79, 100);
  width: 80px;
  height: 42px;
  border-radius: 14px;
  position: absolute;
  top: 20px;
  right: 200px;
  color: white;
}

.decorate {
  width: 100px;
  background-color: rgba(64, 169, 255, 100);
  border-width: 0px;
  height: 5px;
  border-radius: 2px;
  margin: 0 auto;
}
.title-header {
  font-size: 40px;
  font-weight: bold;
}

.header {
  position: relative;
  margin-top: 30px;
  width: 100%;
  margin-bottom: 40px;
}

* {
  cursor: default;
}
</style>
