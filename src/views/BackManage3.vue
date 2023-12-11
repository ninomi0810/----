<script>
export default {
    data(){

    },
}
</script>
<template>
    <div class="content">
        <div class="list">
            <table>
                <tr>
                    <th class="number">編號</th>
                    <th class="name">姓名</th>
                    <th class="time">填寫時間</th>
                    <th class="answer">觀看回覆</th>
                </tr>
            </table>
        </div>
        
    </div>
    <div class="footer">
        <button type="submit"><RouterLink :to="`/Back`" class="rounterItem">取消</RouterLink></button>
        <!-- <button type="submit"><RouterLink :to="`/FrontInside`" class="rounterItem">下一步</RouterLink></button> -->
    </div>

</template>

<style scoped lang="scss">
.content{
    .list{
        display: flex;
        justify-content: center;
        padding: 25px;
        th{
            background-color: gray;
            color: white;
            padding: 10px;
        }
        tr{
            .number{
                width: 50px;
            }
            .name{
                width: 150px;
            }
            .time{
                width: 200px;
            }
            .answer{
                width: 120px;
            }


        }
        td{
            background-color:rgb(227,227,227);
        }
    }
}
</style>