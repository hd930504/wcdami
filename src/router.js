import Vue from 'vue'
import Router from 'vue-router'

import home from './components/home/home'
import goodsList from './components/goodsList'
import register from './components/login/register'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',name:'home',component:home},
        {path:'/goodsList',name:'goodsList',component:goodsList},        
        {path:'/register',name:'register',component:register}
    ]
})