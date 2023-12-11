<script>
export default {
    data(){

    },
}
</script>
<template>
    <div class="content">
        <span>問卷名稱：</span>
        <input type="text" name="" id="">
        <span>問卷說明：</span>
        <input type="text" name="" id="">
        <span>開始時間：</span>
        <input type="date" name="" id="">
        <span>結束時間：</span>
        <input type="date" name="" id="">
    </div>
    <div class="footer">
        <button type="submit"><RouterLink :to="`/Back`" class="rounterItem">取消</RouterLink></button>
        <!-- <button type="submit"><RouterLink :to="`/FrontInside`" class="rounterItem">下一步</RouterLink></button> -->
    </div>

</template>

<style scoped lang="scss">

</style>