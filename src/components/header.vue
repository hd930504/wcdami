<template>
    <div class="header">
        <div class="header-top">
            <div class="header-top-main">
                <div class="user-operation">
                    <span v-if="admin">{{admin}}</span>
                    <template v-else>
                        <router-link tag="span" to="/login">登录</router-link>
                        <router-link tag="span" to="/register">注册</router-link>
                    </template>
                    <span>我的订单</span>
                    <span>会员中心</span>
                </div>
                <span>欢迎来到五常大米网！</span>
            </div>
        </div>
        <div class="header-main">
            <a class="logo"></a>
            <div class="head-menu">
                <div class="shop">
                    购物车<span>0</span>件
                </div>
                <ul class="nav">
                    <router-link tag="li" to="/">首页</router-link>
                    <router-link tag="li" to="/goodsList">产品列表</router-link>
                    <li>大米知识</li>
                    <li>关于我们</li>
                </ul>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headComponent',
    data() {
        return {
            admin:'',
        }
    },
    methods: {
        login(type){
            if(type == 'login'){
                this.$emit('login', {showState:true,type:1})
            }else{
                this.$emit('login', {showState:true,type:2})
            }
            
        }
    },
}
</script>

<style scoped>
    .header-top{
        height: 30px;
        background-color: #49a559;
        line-height: 30px;
        text-align: left;
        color: #fff;
    }
    .user-operation{
        float: right;
    }
    .user-operation span{
        cursor: pointer;
        display: inline-block;
        margin-left: 20px;
    }
    .header-top-main,.header-main{
        width: 1200px;
        margin: 0 auto;

    }
    .header-main{
        height: 100px;
    }
    .header-main .logo{
        float: left;
        width: 207px;
        height: 63px;
        background: url(./../assets/img/logo.png) center no-repeat;
        margin-top: 18px;
    }
    .head-menu{
        float: right;

    }
    .head-menu .nav{
        display: inline-block;
    }
    .head-menu .nav li{
        float: left;
        color: #333;
        font-size: 16px;
        margin: 38px 30px;
        line-height: 24px;
        cursor: pointer;
    }
    .head-menu .shop{
        float: right;
        width: 107px;
        text-align: left;
        padding-left: 60px;
        color: #fff;
        font-size: 14px;
        line-height: 36px;
        margin-top: 32px;
        margin-left: 30px;
        background: #49a559 url(./../assets/img/shop.png) 30px center no-repeat;
    }
    .head-menu .shop span{
        color: #f2bc45;
        margin: 0 5px;
    }
</style>
