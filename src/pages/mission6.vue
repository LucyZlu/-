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
                <p class="gtext">700</p>
                <span class="rtext">3.2</span>
                <span class="inlineSpan">
                    <p class="css_words">css</p>
                    <p class="css_words_sm">csscscscscscscs</p>
                </span>
            </div>

            <div class="threeColumns">
                <div class="threeLeft">
                    <p>What</p>
                    <p>前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端</p>
                </div>
                <div class="threeMiddle">
                    <p>When</p>
                    <p>前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端</p>
                </div>
                <div class="threeRight">
                    <p>How</p>
                    <p class="threeSpace">前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端</p>
                    <div class="threeLittle">
                        <p>
                            What------
                            <span class="threePink">40%</span>
                        </p>
                        <p>
                            What------
                            <span class="threePink">30%</span>
                        </p>
                        <p>
                            What------
                            <span class="threePink">30%</span>
                        </p>
                    </div>
                </div>
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
        font: 24px "Microsoft YaHei";
        color: #000000;
        text-decoration: underline;
    }

    .largeh {
        line-height: 40px;
    }

    .stext {
        font: italic 12px STKaiti;
        color: #676767;
        line-height: 10px;
    }

    .gtext {
        font: oblique bold 116px "Microsoft YaHei";
        color: #75b86b;
        margin-left: -15px;
    }

    .rtext {
        font: 55px "Microsoft YaHei";
        color: #cc8091;
    }

    .inlineSpan {
        display: inline-block;
    }

    .css_words {
        font: 21px "Microsoft YaHei";
        ;
        color: #cc8091;
    }

    .css_words_sm {
        font: 12px "Microsoft YaHei";
        color: #a19699;
    }

    .threeColumns {
        width: 641px;
    }

    .threeColumns>div {
        display: inline-block;
        width: 200px;
        height:175px;
        box-sizing:border-box;
        /*指定inline-block在块级父元素内的垂直对齐方式*/
        vertical-align:top;
        /*inline-block元素，水平和垂直方向上的对齐方式与行内级元素同*/
        margin:10px 10px 0 0;
    }

    .threeLeft p:first-child {
        font: bold 16px "Microsoft YaHei";
        color: #418c59;
        text-decoration: underline;
        margin-bottom:10px;
    }

    .threeLeft p {
        font: 12px "SimSun";
        color: #767777;
        line-height: 16px;
    }

    .threeMiddle p:first-child {
        font: bold 16px "Microsoft YaHei";
        color: #d2994f;
        text-decoration: underline;
        margin-bottom:10px;
    }

    .threeMiddle p {
        font: 12px "Microsoft YaHei";
        color: #231815;
        line-height: 16px;
        opacity: 0.7;
    }
  
    .threeRight>p:first-child {
        font: bold 16px "Microsoft YaHei";
        color: #cc7680;
        text-decoration: underline;
        margin-bottom:10px;
    }

    .threeRight p {
        font: 12px "Microsoft YaHei";
        color: #767777;
        line-height: 16px;
    }

    .threeSpace {
        letter-spacing: 0.2em;
    }

    .threePink {
        font: italic 12px "Microsoft YaHei";
        color: #cd4a48;
        line-height: 16px;
        opacity: 0.7;
    }

    .threeLittle{
        margin-top:50px;
    }

</style>