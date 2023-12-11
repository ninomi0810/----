<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    }
}
</script>
<template>
<div class="headerShow">
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/about" class="link">About</RouterLink>
    <RouterLink to="/Front" class="link">Front</RouterLink>
    <RouterLink to="/FrontInside" class="link">FrontInside</RouterLink>
    <RouterLink to="/FrontChack" class="link">FrontChack</RouterLink>
    <RouterLink to="/FrontStatistics" class="link">FrontStatistics</RouterLink>
    <RouterLink to="/Back" class="link">Back</RouterLink>
    <RouterLink to="/BackManage1" class="link">BackManage1</RouterLink>
    <RouterLink to="/BackManage2" class="link">BackManage2</RouterLink>
    <RouterLink to="/BackManage3" class="link">BackManage3</RouterLink>
    <RouterLink to="/BackManage4" class="link">BackManage4</RouterLink>
    <RouterLink to="/BackStatistics" class="link">BackStatistics</RouterLink>
</div>
</template>

<style scoped lang="scss">
.headerShow{
    width: 100%;
    height: 100%;
    background-color: rgb(192, 223, 234);
    display: flex;
    flex-wrap: wrap;
}
.link{
    text-decoration: none;
    font-size: 40px;
    margin: 20px;
    color: palevioletred;
}
</style>