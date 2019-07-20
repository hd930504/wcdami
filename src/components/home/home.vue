<template>
    <div>
        <banner/>
        <hotSell/>
        <knowledge/>
    </div>
</template>
<script>
import banner from './banner';
import hotSell from './hotSell';
import knowledge from './knowledge';
export default {
    name:'home',
    components:{
        banner,
        hotSell,
        knowledge
    }
}
</script>
<style scoped>

</style>


