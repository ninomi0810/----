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
        <div class="list">
            <table>
                <tr>
                    <th class="number">編號</th>
                    <th class="name">姓名</th>
                    <th class="time">填寫時間</th>
                    <th class="answer">觀看回覆</th>
                </tr>
                <tr>
                    <td class="number"></td>
                    <td class="name"></td>
                    <td class="time"></td>
                    <td class="answer"><RouterLink :to="`/FeedbackDetail`" class="rounterItem">前往</RouterLink></td>
                </tr>
            </table>
        </div>
        
    </div>
    <div class="footer">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
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
.footer{
    ul{
        display: flex;
        justify-content: center;
    }
    li{
        list-style:none;
        margin-left: 5px;
    }
}
</style>