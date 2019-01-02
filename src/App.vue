<template>
  <div id="app">
    <el-container>
      <el-header height="130px">
        <headComponent></headComponent>
      </el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>    
    <div v-if="show">
      <login v-on:userInfo="showState"></login>
      <register/>
    </div>    
  </div>
</template>

<script>
import login from './components/login.vue';
import register from './components/register.vue';
import headComponent from './components/header.vue';

export default {
  name: 'app',
  components: {
    headComponent,
    login,
    register
  },
  data() {
    
    return {
      show:false,
      user:''
    }
  },
  methods: {
    showState(data){
      this.show = data.showState;
      this.user = data.user
    }
  },
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
