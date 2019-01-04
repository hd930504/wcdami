<template>
  <div id="app">
    <el-container>
      <el-header height="130px">
        <headComponent v-on:login="showState"></headComponent>
      </el-header>
      <el-main>
        <banner/>
      </el-main>
      <el-footer></el-footer>
    </el-container>    
    <div>
      <login v-if="loginDialog"></login>
      <register v-if="registerDialog"></register>
    </div>    
  </div>
</template>

<script>
import login from './components/login.vue';
import register from './components/register.vue';
import headComponent from './components/header.vue';
import banner from './components/banner';

export default {
  name: 'app',
  components: {    
    headComponent,
    banner,
    login,
    register
  },
  data() {
    
    return {
      show:false,
      loginDialog: false,
      registerDialog:false,
    }
  },
  methods: {
    showState(data){
      console.log(data)
      if(data.type){
        if(data.type == 1){
          this.loginDialog = data.showState;
          this.registerDialog = false;
        }else{
          this.loginDialog = false;
          this.registerDialog = data.showState;
        }
      }
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
