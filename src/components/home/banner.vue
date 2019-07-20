<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item.id">
            <img :src="item.src">
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
            fileList:[]
        }
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
