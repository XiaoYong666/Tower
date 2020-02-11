<template>
  <div>
    <div class="header">
      <div class="title-header">{{brickSingle.name}}</div>
      <div class="decorate"></div>
      <el-button class="rule" @click="openRule">规则</el-button>
      <el-button class="feedback" @click=openFeedback>问题反馈</el-button>
    </div>
    <div class="main">
      <div class="nav">
        <el-button type="text" class="item" @click="contentState='courses'">教程</el-button>
        <el-button type="text" class="item" @click="contentState='realDone'">实践</el-button>
        <el-button type="text" class="item" @click="contentState='characters'">人物</el-button>
        <el-button type="text" class="item" @click="contentState='forums'">社区</el-button>
        <el-button type="text" class="item" @click="contentState='tools'">工具</el-button>
        <el-button type="text" class="item" @click="contentState='books'">书</el-button>
        <el-button type="text" class="item shuati" @click="contentState=courses">刷题</el-button>
      </div>
      <div class="content">
        <div class="card" v-for="item in brickSingle.content[contentState]" :key=item.name>
          <div class="title"><a  :href="item.url" target="_blank">{{item.name}}</a></div>
          <div class="introduce"><p>{{item.introduce}}</p></div>
          <div class="jiesuo">解锁码：{{item.jiesuo}}</div>
          <div class="time">{{item.updateTime}}</div>
          <div class="zan">
            <el-button type="text" class="button-zan" v-on:click="log"
              ><img class="dianzan" src="../../../assets/zan.png" alt="点赞按钮"
            /></el-button>
            <div class="number">{{item.great}}</div>
          </div>
          <el-popover
            placement="right-end"
            :title="item.label.title"
            trigger="hover"
            :content="item.label.introduce"
            ><el-button slot="reference" :class="[state,item.label.color]"></el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import htmlRules from '../../component_common/rulesforBrick'

export default {
  data(){
    return{
      feedback:"<ul><li>因为我懒得做自己的反馈页面了，所以你即将跳转到市面上最常见的问卷调查中。</li><li>顺便一提，私人QQ1610156666</li></ul>",
      state:"state",
      contentState:"courses"
    }
  },
  methods: {
    log() {
      console.log("dianji");
    },
    openRule() {
        this.$alert(htmlRules, '规则', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString:true,
          callback: () => {
            this.$message({
              type: 'info',
              message: "好好记住哦~"
            });
           
          }
        });
      },
      openFeedback() {
        this.$alert(this.feedback, '反馈', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString:true,
          callback: () => {
            this.$message({
              type: 'info',
              message: "谢谢反馈~"
            });
             window.open("https://www.wenjuan.com/s/InAZBb2/")
          }
        });
      }
  },
  computed:{
    brickSingle(){
      return this.$store.state.selectBrick
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
  bottom: 27px;
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
.title>a {
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
  width: 320px;
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
  justify-content: space-around;
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
.introduce a:visited{
  color:#40a9ff;
}
a{
  text-decoration: none;
}

</style>
