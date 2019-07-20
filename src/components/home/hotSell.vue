<template>
    <div>
        <div class="moduleTitle">
        <h1>热销商品</h1>
    </div>
    <el-row :gutter="20">
        <el-col :span="12" v-for="item in goods" :key="item.id">
            <div class="goods">
                <img :src="item.goodsImg" :alt="item.goodsName">
                <div class="clearfix">
                    <span class="float-right">{{item.appraise}}条评论</span>
                    <span class="hot-sell price">￥{{item.goodsPrice}}/5Kg</span>
                    <h3>{{item.goodsName}}</h3>
                </div>                
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
    name:'hotSell',
    data() {
        return {
            goods:[]
        }
    },
    methods: {
        
    },
    created() {
        this.axios.get('/api/goods').then((res)=>{
            this.goods = res.data;
            for(let i in this.goods){
                this.goods[i].appraise = 100;
            }
        })
    },
}
</script>

<style scoped>
    .moduleTitle{
        height: 100px;
        background: #fff;
        box-sizing: border-box;
        padding-top: 30px;        
        margin-bottom: 20px;
    }
    .moduleTitle h1{
        display: inline-block;
        border-bottom: 1px solid #f2bc45;
        padding-bottom: 7px;
    }
    .clearfix{
        padding: 20px 15px 0;
    }
    .goods{
        background: #fff;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .goods img{
        width: 100%;
        display: block;
    }
    .goods .price{
        float: left;
        font-size: 16px;
        color: #f4c668;
    }
    .goods .hot-sell{
        padding-right: 45px;
        background: url(../../assets/img/hot_icon.gif) right center no-repeat;
    }
    .goods .float-right{
        font-size: 14px;
        color: #9d9d9d;
    }
    .goods h3{
        clear: both;
        text-align: left;
        line-height: 60px;
        margin: 0;
    }
</style>
