<template>
  <div style="width:100%">
      <div class="nav">
          <ul>
              <li><a href="/">首页</a></li>
              <li><a href="/dataBase">数据库</a></li>
              <li><a href="/search">搜索</a></li>
              <li><a href="/saySomething">提建议</a></li>
              <li><a  class="howToUse" href="/howToUse">如何使用？</a></li>
              <li class="login"><a href="/login">登录</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
name:'selfnavbar'
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
}

.nav ul li:hover{
    font-size: 1.2rem;
    font-weight: 700;
}

@media screen and (max-width: 1024px) {
    .howToUse{
    font-size: 0.7rem;
}
}
</style>