<template>
    <div class="container">
        <header>
            <div class="tableDiv time">
                <span>2016.03</span>
            </div>
            <div class="tableDiv pinkBg">
                <span>ife.baidu.com</span>
            </div>
        </header>
        <article>
            <div class="topLeft">
                <img src="../images/green.png" alt="greenlayer">
                <img id="redlayer" src="../images/red.png" alt="redlayer">
            </div>
            <div class="topRight">
                <p class="utext largeh">
                    <b>A</b>BOUT</p>
                <p class="utext">TECHNOLOGY</p>
                <p class="stext">About technology about technology about technology</p>
            </div>
        </article>
        <footer>

        </footer>
    </div>
</template>

<style scoped>
    .container {
        box-sizing: border-box;
        max-width: 980px;
        min-height: 1386px;
        background: white;
        padding: 0 42px;
        margin: 0 auto;
    }

    /*****************************************header部分***************************/

    header {
        font: 12px STHeiti;
        border-bottom: 2px #938e8c solid;
    }

    /*设置块级父元素为table以使其内部子元素垂直方向上位于下部*/

    .tableDiv {
        display: table;
        height: 61px;
        padding: 5px;
        box-sizing: border-box;
    }

    .pinkBg {
        width: 110px;
        color: #ffffff;
        background: #d45d5c;
    }

    .tableDiv span {
        display: table-cell;
        vertical-align: bottom;
    }

    .time {
        color: #d45d5c;
        float: right;
    }

    /*****************************************内容部分***************************/

    .topLeft {
        display: inline-block;
        width: 641px;
        height: 301px;
        position: relative;
        background: url(../images/internet.png) no-repeat;
        margin-top: 34px;
    }

    #redlayer {
        float: right;
    }

    .topRight {
        width: 203px;
        height: 301px;
        border-top: #cc8091 2px solid;
        float: right;
        margin-top: 34px;
    }

    .utext {
        font: 24px #000000 "Microsoft YaHei";
        text-decoration: underline;
    }

    .largeh {
        line-height: 40px;
    }

    .stext {
        font: 12px #676767 STKaiti;
        line-height: 10px;
    }
</style>