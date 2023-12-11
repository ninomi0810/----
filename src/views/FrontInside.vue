<script>
export default {
    data(){

    },
}
</script>
<template>
    <div class="header">
        <div class="title">

            <p>000</p>
            <span>00000000</span>
        </div>
    </div>
    <div class="content">
        <div class="information">
            <div class="one">
                <span>姓名：</span>
                <input type="text" name="" id="">
            </div>
            <div class="two">
                <span>手機：</span>
                <input type="tel" name="" id="">
            </div>
            <div class="three">
                <span>E-mail：</span>
                <input type="emil" name="" id="">
            </div>
            <div class="four">
                <span>年齡：</span>
                <input type="number" name="" id="">
            </div>
        </div>
        <div class="question">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
    </div>
    <div class="footer">

        <button type="submit"><RouterLink :to="`/Front`" class="rounterItem">取消</RouterLink></button>
        <button type="submit"><RouterLink :to="`/FrontChack`" class="rounterItem">送出</RouterLink></button>
    </div>

</template>

<style scoped lang="scss">
.header{
    padding-top: 50px;
    display: flex;
    justify-content: center;
    
    .title{

        width: 800px;
        height: 150px;
        position: relative;
        border: 1px solid black;

        p{
            font-size: 50px;
        }
        span{
            position: absolute;
            left: 50px;
            font-size: 25px;
        }
    }
}
.content{
    display: flex;
    justify-content: center;
    .information{
        width: 800px;
        height: 300px;
        border: 1px solid black;
        font-size: large;
        position: relative;
        span{
            width: 70px;
            position: absolute;
            left: 50px;
        }
        input{
            position: absolute;
            width: 500px;
            height: 25px;
            left: 200px;
        }
        .one{
            position: absolute;
            top: 20px;
        }
        .two{
            position: absolute;
            top: 80px;
        }
        .three{
            position: absolute;
            top: 140px;
        }
        .four{
            position: absolute;
            top: 200px;
        }
    }
}
.footer{

}
</style>