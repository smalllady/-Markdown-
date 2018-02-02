<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="./assets/logo.png"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!-- <li class="active"><router-link to="/">首页</router-link></li>
            <li><router-link to="/note">笔记</router-link></li> -->
            <li :class="{active:currentIndex==index}" @click="indexHandler(index)" v-for='(item,index) in routes'>
              <router-link :to="item.href">{{item.title}}</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/note">笔记</router-link> -->
    <transition name='fade' mode='out-in'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return{
      routes:[
        {href:'/',title:'首页'},
        {href:'/note',title:'笔记'}
      ],
      currentIndex:0
    }
  },
  created () {
    console.log(this)
    for(var i = 0;i<this.routes.length;i++){
      if (this.routes[i].href===this.$route.path) {

        this.currentIndex = i;
        return;
      }
    }
  },
  mounted () {
    //父级组件请求数据
    axios.get('http://127.0.0.1:7428/api/comments')
    .then( (response)=> {
      console.log(response.data);
      // this.$store.state.allData=response.data
      this.$store.commit('getAllDatas',response.data)      
    })
    .catch( (error) => {
      console.log(error);
    });
  },
  methods: {
    indexHandler(index){
      this.currentIndex = index
    }
  },
  computed: {
    conIndex(){
      return currentIndex
    }
  },
  filters:{

  },
  components: {

  }

}
</script>

<style>
.navbar-brand img{width:20px; height: 20px;}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
