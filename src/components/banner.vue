<template>
    <el-carousel height="370px">
        <el-carousel-item v-for="item in banners" :key="item.id">
            <img :src="'http://localhost:8088/images/'+item.src">
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
            fileList: []        
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

</style>
