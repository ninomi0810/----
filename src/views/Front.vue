<script>
export default {
    data() {

    },
    // components:{
    //     RouterLink,

    // },
}
</script>
<template>
    <RouterLink to="/Back" class="link">
        <i class="fa-solid fa-star"></i>
    </RouterLink>

    <div class="header">
        <div class="title">
            <div class="name">
                <span>問卷名稱：</span>
                <input type="text" name="" id="">
            </div>
            <div class="time">
                <div class="from">
                    <span>統計時間：</span>
                    <input type="date" name="" id="">
                </div>
                <div class="to">
                    <span>到</span>
                    <input type="date" name="" id="">
                </div>
                <button type="submit">搜尋</button>
            </div>
        </div>
    </div>
    <div class="list">
        <table>
            <tr>
                <th class="number">編號</th>
                <th class="name">名稱</th>
                <th class="now">狀態</th>
                <th class="start">開始時間</th>
                <th class="end">結束時間</th>
                <th class="result">結果</th>
            </tr>
            <tr>
                <td></td>
                <td>
                    <RouterLink to="/FrontInside" class="link">問卷名稱</RouterLink>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <RouterLink :to="`/FrontStatistics`" class="rounterItem">前往</RouterLink>
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
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
.header {
    display: flex;
    justify-content: center;
    padding-top: 50px;

    .title {
        width: 800px;
        height: 100px;
        border: 1px solid black;
        position: relative;

        .name {
            padding: 15px;
            font-size: large;

            span {
                position: absolute;
                left: 50px;
            }

            input {
                width: 580px;
                height: 25px;
                position: absolute;
                left: 160px;
            }
        }

        .time {
            padding: 25px;
            font-size: large;

            .from {
                span {
                    position: absolute;
                    left: 50px;
                }

                input {
                    width: 200px;
                    height: 25px;
                    position: absolute;
                    left: 160px;
                }
            }

            .to {
                span {
                    position: absolute;
                    left: 400px;
                }

                input {
                    width: 200px;
                    height: 25px;
                    position: absolute;
                    left: 460px;
                }
            }
        }

        button {
            position: absolute;
            width: 50px;
            height: 30px;
            left: 698px;
        }
    }
}

.btn {
    padding: 20px;
    font-size: 30px;
    position: relative;

    .fa-trash-can {
        position: absolute;
        left: 380px;
    }

    .fa-plus {
        position: absolute;
        left: 420px;
    }
}

.list {
    display: flex;
    justify-content: center;
    padding: 25px;

    th {
        background-color: gray;
        color: white;
        padding: 10px;
    }

    tr {
        .number {
            width: 55px;
        }

        .name {
            width: 235px;
        }

        .now {
            width: 80px;
        }

        .start {
            width: 125px;
        }

        .end {
            width: 125px;
        }

        .result {
            width: 55px;
        }

    }

    td {
        background-color: rgb(227, 227, 227);
    }
}

.footer {
    ul {
        display: flex;
        justify-content: center;
    }

    li {
        list-style: none;
        margin-left: 5px;
    }
}
</style>