<template>
  <div id="app">
    <login/>
    <register/>
  </div>
</template>

<script>
import login from './components/login.vue';
import register from './components/register.vue';

export default {
  name: 'app',
  components: {
    login,
    register
  }
}
</script>

<style>
body{
  margin:0;
}
.geetest_logo,.geetest_success_logo{
  display: none!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
