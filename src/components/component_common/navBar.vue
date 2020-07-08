<template>
  <div>
    <div id="navBar">
    <div id="homeCard" class="tCard">
      <div class="selector" @click="urlpush('/')">首页</div>
      <div class="selector" @click="urlpush('/search')">搜索</div>
      <div class="selector" @click="giveAlert('请期待')">广场</div>
      <div class="selector" @click="urlpush('/article/5ea06dbc6fa9d76d3afd0bd9')">反馈</div>
    </div>
    <div id="managerCard" v-show="false" class="tCard">
      <div class="selector">管理</div>
    </div>
    <div id="userCard" class="tCard">
      <Avataaars style="width:40px;" ></Avataaars>
      <div class="selector" v-if="!loginState||(loginState == 'false' && this.userEmail == null)" @click="urlpush('/login')">登录</div>
      <div class="selector" v-else @click="urlpush('/login')">个人中心</div>
    </div>
    <div id="addCard" class="tCard">
      <i class="el-icon-plus"></i>
    </div>
  </div>
  <div style="width:100%;height:80px"></div>
  </div>
</template>

<script>
import Avataaars from 'vuejs-avataaars'

export default {
  name: "navBar",
  components:{
    Avataaars
  },
  created() {
    let loseToken = localStorage.getItem("loseToken");
    let timeInterval = Math.abs(new Date() - new Date(loseToken));
    if (timeInterval / 1000 / 60 / 60 / 24 <= 6) {
      this.userEmail = localStorage.getItem("userEmail");
      this.loginState = true;
    } else {
      this.userEmail = null;
      this.loginState = false;
    }
  },
  data() {
    return {
      userEmail: "",
    };
  },
  methods: {
    urlpush(url) {
      this.$router.push(url);
    },
    getEmail() {
      this.userEmail = localStorage.getItem("userEmail");
      return this.userEmail;
    },
    checkBrickState(){
      let url = window.location.href;
      return url.includes('brick')
    },
    giveAlert(say){
      alert(say)
    }
    
  },
  computed: {
    brickState(){
      return localStorage.getItem('brickState')
    }
  },
};
</script>

<style lang="less" scoped>
#navBar{
  z-index: 2;
  width:100%;
  position: fixed;
  background-color:white ;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  overflow: auto;
  top:0px;
  ::-webkit-scrollbar{
    display: none;
  }
  .tCard{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:white ;
  }
  .selector{
    cursor: pointer;
    &:hover{
      font-weight: bold;
    }
  }
  
  #homeCard{
    width:20%;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    height: 50px;
    margin-left:10px;
    margin-right:10px;
  }
  #brickCard{
    width:20%;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    height: 50px;
    margin-left:10px;
    margin-right:10px;
  }
  #managerCard{
    width:20%;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    height: 50px;
    margin-left:10px;
    margin-right:auto;
  }
  #userCard{
    width:12%;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    height: 50px;
    margin-left:10px;
    margin-right:10px;
    
  }
}

@media screen and (max-width: 1024px) {

}
</style>
