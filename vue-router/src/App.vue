<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p><button @click="goBack">后退</button><button @click="go">前进</button><button @click="goHome">回到首页</button></p>
    <hr>

    <router-link to="/">hello</router-link>
    <router-link to="/params/1111/yyh">params</router-link>
    <router-link to="/goHello">hello</router-link>
    <router-link to="/goParams/1111/yyh">params</router-link>
    <router-link to="/1111">fanzhuan</router-link>
    <router-link to="/sdasf">不存在访问路径</router-link>

    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
    <router-view name="left" style="float:left;width: 50%;height:300px;background-color: rgb(117, 109, 109);"></router-view>
    <router-view name="right" style="float:left;width: 50%;height:300px;background-color:red ;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack:function(){
        this.$router.go(-1);

    },
    go:function(){
      this.$router.go(1);
    },
    goHome:function(){
      this.$router.push("/");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 对应上方name是transitioin */
    .fade-enter{
      opacity:0;
    }
    .fade-enter-active{
      transition:opacity .5s;
    }
    .fade-level{
      opacity:1;
    }
    .fade-level-active{
      opacity: 1;
      transition:opacity  .5s;
    }
</style>
