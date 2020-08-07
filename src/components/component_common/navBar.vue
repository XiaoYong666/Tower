<template>
  <div>
    <div id="navBar">
      <div
        id="homeCard"
        v-if="homeCard"
        class="tCard"
      >
        <div
          class="selector"
          @click="urlpush('/')"
        >
          首页
        </div>
        <div
          class="selector"
          @click="urlpush('/square')"
        >
          广场
        </div>
        <div
          class="selector"
          @click="urlpush('brickv3/5e9b4d8828490c2f9ebf9064')"
        >
          介绍
        </div>
        <a
          class="selector"
          href="https://www.wjx.cn/jq/84849634.aspx"
          target="_blank"
        >反馈</a>
      </div>
      <div
        id="managerCard"
        v-if="managerCard"
        class="tCard"
      >
        <div class="selector">
          管理
        </div>
      </div>
      <div
        id="userCard"
        v-if="userCard"
        class="tCard"
      >
        <Avataaars style="width:40px;" />
        <div
          class="selector"
          v-if="!loginState"
          @click="urlpush('/login')"
        >
          登录
        </div>
        <div
          class="selector"
          v-else
          @click="giveAlert('敬请期待')"
        >
          个人中心
        </div>
      </div>
      <div
        id="addCard"
        v-if="addCard"
        class="tCard"
        @click="addBrick()"
      >
        <i class="el-icon-plus" />
      </div>
      <div
        id="searchCard"
        class="tCard"
      >
        <input
          v-model="input"
          class="searchBar"
          @focus="searchShow=true"
          @blur="searchItemNoShow()"
        >
        <i class="el-icon-search" />
        <div
          class="searchItem"
          v-show="searchShow"
        >
          <div
            class="item"
            v-for="el in searchRes"
            :key="el.name"
            @click="pushBrick(el.id)"
          >
            <div
              style="padding:0 5px"
              :id="el.id"
            >
              {{ el.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        id="editCard"
        v-if="editCard"
        class="tCard"
      >
        <div
          class="bold"
          @click="postArticle()"
        >
          提交
        </div>
        <div
          class="bold"
          @click="urlBack()"
        >
          返回
        </div>
      </div>
    </div>
    <div style="width:100%;height:80px" />
  </div>
</template>

<script>
import Avataaars from "vuejs-avataaars";
import reqInfo from "../../request/reqInformation"
import reqBrick from '../../request/reqBrick';

export default {
  name: "NavBar",
  components: {
    Avataaars
  },
  async created() {
    //登录过期
    let loseToken = localStorage.getItem("loseToken");
    let timeInterval = Math.abs(new Date() - new Date(loseToken));
    if (timeInterval / 1000 / 60 / 60 / 24 <= 7) {
      this.userEmail = localStorage.getItem("userEmail");
      this.$store.commit('Login')
    } else {
      this.userEmail = null;
      this.$store.commit('noLogin')
    }

    this.searchItem = await reqInfo.getSearchItem()
    //console.log(this.searchItem)
  },
  data() {
    return {
      userEmail: "",
      input: "",
      searchShow: false,
      searchItem: [
        {
          name: "123",
          id: "11"
        },
        { name: "456", id: "12" },
        { name: "678", id: "13" }
      ]
    };
  },
  methods: {
    searchItemNoShow(){
      if(this.input==""){
        this.searchShow=false;
      }
    },
    pushBrick(id){
      //console.log('123')
      this.$router.push({name:'brickv3',params:{id:id}})
      this.input = ""
    },
    urlpush(url) {
      this.$router.push(url);
    },
    getEmail() {
      this.userEmail = localStorage.getItem("userEmail");
      return this.userEmail;
    },
    checkBrickState() {
      let url = window.location.href;
      return url.includes("brick");
    },
    urlBack(){
      this.$router.go(-1)
      this.$store.commit('closeEditCard')
    },
    async addBrick(){
      if(this.loginState==false){
        alert('创建砖石需要登录')
        return
      }
      let r = prompt('请输入砖石的名字')
      if(!r){
        alert('请输入砖石的名称')
        return
      }
      let data = await reqBrick.createNewBrick(r)
      alert(data.message)
      this.$router.push({name:'brickv3',params:{id:data.id}})
    },
    postArticle(){
      this.$store.commit('postArticle')
    },
    giveAlert(speak){
      alert(speak)
    }
    
  },
  computed: {
    brickState() {
      return localStorage.getItem("brickState");
    },
    homeCard() {
      return this.$store.state.homeCard;
    },
    managerCard() {
      return this.$store.state.managerCard;
    },
    userCard() {
      return this.$store.state.userCard;
    },
    addCard() {
      return this.$store.state.addCard;
    },
    searchRes() {
      if (this.input == ""){return []}
      let res = this.searchItem.filter(el => {
        let re = new RegExp(this.input, "i");
        return el.name.match(re);
      });
      return res;
    },
    editCard(){
      return this.$store.state.editCard;
    },
    loginState(){
      return this.$store.state.loginState
    }
  }
};
</script>

<style lang="less" scoped>
#navBar {
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  overflow: auto;
  top: 0px;
  overflow: visible;
  ::-webkit-scrollbar {
    display: none;
  }
  .tCard {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .selector {
    cursor: pointer;
    text-decoration: none;
    color: black;
    &:hover {
      font-weight: bold;
    }
  }

  #homeCard {
    width: 15%;
  }
  #brickCard {
    width: 20%;
  }
  #managerCard {
    width: 20%;
  }
  #userCard {
    width: 12%;
  }
  #addCard {
    width: 3%;
    cursor: pointer;
  }
  #searchCard {
    width: auto;
    padding: 0 20px;
    position: relative;
    .searchBar {
      position: relative;
      width: 100px;
      height: 70%;
      border: none;
      transition: width ease-in-out 0.5s;
      &:focus {
        width: 200px;
      }
    }
    .searchItem {
      position: absolute;
      top: 60px;
      width: 250px;
      left: 3px;
      min-height: 50px;
      border-radius: 5px;
      background-color: white;
      border: 1px solid #e9e9e9;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      .item {
        width: 90%;
        padding: 5px 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 3px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        color: #5a5a5a;
        &:hover {
          background-color: #e9e9e9;
        }
      }
    }
  }
  #editCard{
    width:10%;
    div{
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1024px) {
  #homeCard{
    width:200px;
  }
}
</style>
