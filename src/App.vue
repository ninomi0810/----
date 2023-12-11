<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="content">

    <RouterView />
  </div>
</template>


<style scoped lang="scss">
.header{
  width: 90vw;
  height: 20vh;
}
.content{
  width: 90vw;
  height: 85vh;
  text-align: center;  //置中
}
</style>
