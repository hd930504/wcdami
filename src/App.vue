<template>
  <div id="app">
    <el-container>
      <el-header height="130px">
        <headComponent></headComponent>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>      
  </div>
</template>

<script>
import headComponent from './components/header.vue';
import home from './components/home/home.vue';
export default {
  name: 'app',
  components: {    
    headComponent
  },
  data() {
    
    return {
      show:false
    }
  },
  methods: {
    
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
  background: #f9f9f9;
}
.el-main{
  width: 1200px;
  margin: 0 auto;
}
.el-header{
  background: #fff;
}
</style>
