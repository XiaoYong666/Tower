<template>
  <div style="width:100%">
      <div class="nav">
          <ul>
              <li><a @click="urlpush('/')">首页</a></li>
              <li><a @click="urlpush('/dataBase')">数据库</a></li>
              <li><a @click="urlpush('/search')">搜索</a></li>
              <li><a @click="urlpush('/article/5ea06dbc6fa9d76d3afd0bd9')">提建议</a></li>
              <li><a  class="howToUse" @click="urlpush('/article/5e9b55a828490c2f9ebf9066')">如何使用？</a></li>
              <li class="login" v-if="loginState==false&&this.userEmail==null"><a @click="urlpush('/login')">登录</a></li>
              <li class="user" v-if="loginState==true||this.userEmail!=null">{{getEmail()}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
name:'selfnavbar',
created(){
    let loseToken = localStorage.getItem('loseToken')
    let timeInterval = Math.abs(new Date()-new Date(loseToken))
    if(timeInterval/1000/60/60/24<=6){
        this.userEmail = localStorage.getItem('userEmail')
    }else{
        this.userEmail = null
    }

    
},
data(){
    return{
        userEmail:""
    }
},
methods:{
    urlpush(url){
    this.$router.push(url)
},
    getEmail(){
    this.userEmail = localStorage.getItem('userEmail')
    return this.userEmail
    }
},
computed:{
    loginState(){
        return this.$store.state.loginState
    }
}
}
</script>

<style scoped>


.login{
    position: absolute;
    right:10px;
}


.nav{
    width:100%;
    height: 60px;
    border-bottom: 1px solid rgba(114, 113, 113, 0.123);
    overflow-x:scroll;
    overflow-y:hidden;
    background-color: white;
}
.nav::-webkit-scrollbar{
    display: none;
}
.nav ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    position: relative;
    padding: 0;
    margin-top: 0px;

}
.nav ul li{
    width:15vw;
    margin:0 0 0 0;
    font-size: 1rem;
    cursor: pointer;
    overflow: hidden;
}

.nav ul li a{
text-decoration: none ;
color: black;
width:100%;
display: block;
}

.nav ul li:hover{
    font-weight: bold;
}

@media screen and (max-width: 1024px) {
    .howToUse{
    font-size: 0.7rem;
}
    .user{
    position: absolute;
    right:2px;
    font-size: 0.5rem!important;
    width: 20vw!important;
    }

}
</style>