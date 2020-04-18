<template>
  <div class="backgroundImage">
    <navself></navself>
    <div class="searchBar">
      <div class="searchTitle">Search</div>
      <div class="searchContent">
        <input type="text" v-model="query" id="search" placeholder="搜索砖石" />
        <button class="searchButton" @click="search">搜索</button>
      </div>
    </div>
    <div v-if="searchRes.length!=0" class="contentContainer">
      <div
        v-for="item in searchRes"
        :key="item._id"
        class="itemContainer"
      >
      <div class="title">{{item.title}}</div>
      <div class="description">{{item.description}}</div>
      <div class="info">
            <div class="like">
              关注<span class="num">{{ item.watching }}</span>
            </div>
            <div class="comment">
              模块数<span class="num">{{ item.modules.length }}</span>
            </div>
            <div class="share">
              观看历史<span class="num">{{ item.seeTimes }}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import navself from "../component_common/selfnavbar";
import request from '../../request/requestV2';

export default {
  components: {
    navself,
  },
  data() {
    return {
        query:'',
      searchRes: [],
    };
  },
  methods:{
      async search(){
        let res =await request.search(this.query)
        this.searchRes = res.res
        console.log(res.res)
      }
  }
};
</script>

<style scoped>
.num{
    font-size: 0.7rem;
}
.info {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 0px;
  position: absolute;
  align-items: center;
  border-top: 1px solid rgba(114, 113, 113, 0.123);
  border-bottom: 1px solid rgba(114, 113, 113, 0.123);
}
.backgroundImage {
  background-image: url("https://s1.ax1x.com/2020/04/15/JC4kIH.jpg");
  background-attachment: fixed;
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
.searchBar {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.searchTitle {
  font-family: "Do Hyeon", sans-serif;
  color: white;
  font-size: 2rem;

}
.searchContent{
    width: 100%;
    height: 5rem;
    
}

#search{
    margin-top:0px;
    width: 60%;
    height: 3rem;
    border:none;
    font-weight: bold;
    font-size: 1.2rem;
    padding-left:1rem ;
}
.searchButton{
    margin-top:0px;
    width:20%;
    margin-left: 10px;
    background-color: #fa541c;
    height: 3rem;
    border:none;
    color:white;
    font-weight: bold;
    font-size: 1rem;
}
.contentContainer{
    margin:0 auto;
    width: 80%;
    background-color: white;
    min-height: 55vh;
    border-radius: 5px;

}
.itemContainer{
    width: 90%;
    margin:0 auto;
    height: 10rem;
    position:relative
}
.itemContainer .title{
    position:absolute;
    left:1rem;
    top:1rem;
    font-size: 1.2rem;
    font-weight: bold;

}
.itemContainer .description{
    position: absolute;
    left:1rem;
    top:3rem;
    font-size: 0.7rem;
    color: #919191;
    height: 2rem;
    text-overflow:ellipsis;
    overflow: hidden;
}

@media screen and (min-width: 1024px) {
    .searchContent{
        width: 80%;
    }
    .contentContainer{
        width: 50%;
    }
}

</style>
