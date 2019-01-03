<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item">
            <img src="item.src" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name:'banner',
    data() {
        return {
            banners:[]
        }
    },
    methods: {
        
    },
    created() {
        this.axios.get('/api/banner').then((res)=>{
            
        })
    },
}
</script>

<style scoped>

</style>
