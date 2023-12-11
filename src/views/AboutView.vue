<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data(){
        return{
            arr:["問卷","題目","問卷回饋","統計"]
        }
    },
}
</script>
<template>
<RouterLink v-for="i in arr" :to="`/About/${i}`" class="rounterItem">{{ i }}</RouterLink>

</template>

<style scoped lang="scss">

</style>