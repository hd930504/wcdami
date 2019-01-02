import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import md5 from 'md5'
import ElementUI from 'element-ui'
import gtInit from './assets/util/gt'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/style.css'

Vue.prototype.gtInit = gtInit
Vue.prototype.axios = axios
Vue.prototype.$md5 = md5
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
