<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {

    },
    components: {
        RouterLink,
    }
}
</script>
<template>
    <div class="header">
        <RouterLink to="/Questionnaire" class="link">問卷</RouterLink>
        <RouterLink to="/QandA" class="link">題目</RouterLink>
        <RouterLink to="/Feedback" class="link">問卷回饋</RouterLink>
        <RouterLink to="/BackStatistics" class="link">統計</RouterLink>
    </div>
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
.header{
    width: 90vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    .link{
        text-decoration: none;
        margin-left: 10px;
    }
}
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
}
</style>