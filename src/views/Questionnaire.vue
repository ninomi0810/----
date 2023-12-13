<script>
export default {
    data(){

    },
}
</script>
<template>
        <div class="header">
        <RouterLink to="/Questionnaire" class="link">問卷</RouterLink>
        <RouterLink to="/QandA" class="link">題目</RouterLink>
        <RouterLink to="/Feedback" class="link">問卷回饋</RouterLink>
        <RouterLink to="/BackStatistics" class="link">統計</RouterLink>
    </div>
    <div class="content">
        <div class="one area">
            <span>問卷名稱：</span>
            <textarea name="" id="" ></textarea>
        </div>
        <div class="two area">
            <span>問卷說明：</span>
            <textarea name="" id=""></textarea>
        </div>
        <div class="three area">
            <span>開始時間：</span>
            <input type="date" name="" id="" class="time">
        </div>
        <div class="three area">
            <span>結束時間：</span>
            <input type="date" name="" id="" class="time">
        </div>
    </div>
    <div class="footer">
        <button type="submit"><RouterLink :to="`/Back`" class="rounterItem">取消</RouterLink></button>
        <button type="submit"><RouterLink :to="`/QandA`" class="rounterItem">下一步</RouterLink></button>
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
.content{
    .area{
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span{
        width: 30%;
        height: 20%;
    }
    textarea{
        width: 50%;
        height: 20%;
    }
    .time{
        width: 30%;
    }
}
.footer{
    position: absolute;
    top: 55%;
    right: 25%;
    button{
        margin-left: 20px;
    }
    .rounterItem{
        text-decoration: none;
        color: black;
    }
}
</style>