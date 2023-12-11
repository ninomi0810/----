<script>
export default {
    data() {

    },
}
</script>
<template>
    <div class="time">
        <p>問卷填寫時間</p>
    </div>
    <div class="title">
        <p>問卷名稱</p>
    </div>
    <div class="div">
        <p>題目</p>
        <div class="echart"></div>
    </div>
</template>

<style scoped lang="scss">
.time {
    width: 30vw;
    height: 7vh;
    margin-left: 40%;
    margin-top: 3%;
    font-size: 16px;
}

.title {
    width: 80vw;
    height: 10vh;
    font-size: 28px;
}

.div {
    width: 80vw;
    height: 30vh;
    border: 1px solid black;

    p {
        font-size: 16px;

    }
}</style>