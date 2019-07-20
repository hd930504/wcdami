<template>
    <div>
        <div class="moduleTitle">
        <h1>大米知识</h1>
    </div>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="news-left">
                <img :src="img">
                <p>我国最好吃的5种大米,五常大米都落榜,尝过两种的绝对是土豪 </p>
            </div>
        </el-col>
        <el-col :span="12">
            <div v-for="item in news" :key="item.id" class="news-list clearfix">
                <div class="float-left">
                    <b>{{item.date}}</b>
                    <p>{{item.year}}/{{item.month}}</p>
                </div>
                <div class="overflow">
                    <h3>{{item.newsTitle}}</h3>
                    <p>{{item.newsAbstract}}</p>
                </div>
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
    name:'knowledge',
    data() {
        return {
            img: require('../../assets/img/img_03.png'),
            news:[]
        }
    },
    methods: {
        
    },
    created() {
        this.axios.get('/api/news').then((res)=>{
            this.news = res.data
            for(let i in this.news){
                this.news[i].year = this.news[i].newsTime.substring(0,4);
                this.news[i].month = this.news[i].newsTime.substring(5,7);
                this.news[i].date = this.news[i].newsTime.substring(8,10);                
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
    .news-left{
        position: relative;
        cursor: pointer;
    }
    .news-left p{
        position: absolute;
        bottom: 0;
        width: 100%;
        line-height: 60px;
        background: rgba(0, 0, 0, .4);
        color:#fff;
        text-align: left;
        text-indent: 2em;
    }
    .news-left img{
        width: 100%;
    }
    .news-list{
        background: #fff;
        margin-bottom: 17px;
    }
    .news-list .float-left{
        width: 117px;
        height: 117px;
        background: #77cd86;
        color: #fff;
    }
    .news-list .float-left b{
        font-size: 48px;
        display: block;
        margin-top: 20px;
    }
    .news-list .float-left p{
        font-weight: bold;
        font-size: 16px;
    }
    .news-list .overflow{
        padding: 20px 10px 0 20px;
    }
    .news-list .overflow h3{
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
        padding-bottom: 13px;
        position: relative;
    }
    .news-list .overflow h3:after{
        position: absolute;
        content: '';
        bottom: 0;
        height: 2px;
        background: #f2bc45;
        left: 0;
        width: 60px;
    }
    .news-list .overflow p{
        color: #666;
        font-size: 14px;
        text-align: left;
        margin-top: 12px;
    }
</style>
