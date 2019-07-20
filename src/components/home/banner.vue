<template>
<<<<<<< HEAD:src/components/home/banner.vue
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item.id">
            <img :src="item.src">
=======
    <el-carousel height="370px">
        <el-carousel-item v-for="item in banners" :key="item.id">
            <img :src="'http://localhost:8088/images/'+item.src">
>>>>>>> c21a302a4c5effcf68f476d0fef19d83db950a37:src/components/banner.vue
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    name:'banner',
    data() {
        return {
            banners:[],
            bannersSrc:[],
<<<<<<< HEAD:src/components/home/banner.vue
            fileList:[]
        }
=======
            fileList: []        
            }
>>>>>>> c21a302a4c5effcf68f476d0fef19d83db950a37:src/components/banner.vue
    },
    methods: {

    },
    created() {
        this.axios.get('/api/banner').then((res)=>{
            this.banners = res.data;
        })
    },
}
</script>

<style scoped>
    .el-carousel__container{
        height: 370px!important;
    }
</style>
