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

            <div class="bottom">
                <div class="bottomLeft">
                    <div class="title">
                        <p>
                            <span class="yellowThe">THE </span>TECHNOLOGY</p>
                        <p>OF FRONT</p>
                        <p>前端技术领域</p>
                    </div>
                    <p class="content">前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前</p>
                    <img src="../images/computer.png" alt="computer" class="computer1">
                    <p>前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端</p>
                    <p class="content2">前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端</p>
                    <p class="content2">前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端</p>
                </div>
                <div class="bottomRight">
                    <div class="computer">
                        <img src="../images/computer2.png" alt="computer" class="computer2">
                        <div class="layer">
                            <img src="../images/layer.png" alt="layer">
                            <div class="layer layerText">
                                <div class="greenBorder"></div>
                                <span class="whiteText">前端技术</span>
                                <span class="baselineText">前端技术前端技术</span>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <ul>
                            <li>前端前端前端前端前端.............前端</li>
                            <li>前端前端前端前端................前端前</li>
                            <li>前端前端前端前端前端前端.........前端</li>
                        </ul>
                        <div class="redBlock">
                            <div class="cell">
                                <span class="zero">0</span>
                                <div class="border"></div>
                                <div class="info">
                                    <p>
                                        ONE TWO
                                    </p>
                                    <p>THREE FOUR FIVE</p>
                                    <p class="infosm">hello world hello world</p>
                                    <p class="infosm">hello world</p>
                                </div>
                            </div>
                        </div>
                        <div class="quote">
                            <span class="quetoLetter">“</span>world hello world hello world hello world helloworld helloworld helloworld hello
                            <span class="quoteRight">”</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <footer>
            ife.baidu.com
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
        font: "Microsoft YaHei";
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
        font: italic 12px KaiTi_GB2312;
        color: #676767;
        line-height: 12px;
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
        height: 175px;
        box-sizing: border-box;
        /*指定inline-block在块级父元素内的垂直对齐方式*/
        vertical-align: top;
        /*inline-block元素，水平和垂直方向上的对齐方式与行内级元素同*/
        margin: 10px 10px 0 0;
    }

    .threeLeft p:first-child {
        font: bold 16px "Microsoft YaHei";
        color: #418c59;
        text-decoration: underline;
        margin-bottom: 10px;
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
        margin-bottom: 10px;
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
        margin-bottom: 10px;
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

    .threeLittle {
        margin-top: 50px;
    }

    .computer {
        position: relative;
    }

    .computer2 {
        width: 458px;
        height: 275px;
    }

    .layer {
        position: absolute;
        bottom: 0;
        left: 0;
        display: table;
    }

    .layerText {
        width: 458px;
        height: 61px;
        font: italic 12px "Microsoft YaHei";
        color: #72b16a;
        word-spacing: 140%;
    }

    .greenBorder {
        float: left;
        width: 3px;
        height: 44px;
        background: #72b16a;
        margin: 8px 10px 0 50px;
    }

    .whiteText {
        float: left;
        font: 26px "Microsoft YaHei";
        color: #ffffff;
        box-sizing: border-box;
        margin: 10px 5px 0 0;
    }

    .baselineText {
        float: left;
        margin-top: 28px;
    }

    .bottom {
        margin: 50px 0;
    }

    .bottomLeft {
        display: inline-block;
        width: 415px;
        font: 12px STSong;
        color: #A6A2A1;
        line-height: 20px;
        margin-right: 10px;
    }

    .bottomRight {
        display: inline-block;
        width: 458px;
        vertical-align: top;
    }

    .title {
        width: 415px;
        box-sizing: border-box;
        border-bottom: 2px solid #11456b;
        padding: 20px 0;
        font: bold 35px "MicrosoftJhengHei";
        color: #11456b;
        margin: 16px 0;
    }

    .yellowThe {
        font: italic bold 70px STHeiti;
        color: #f5e327;
        margin-left: -10px;
    }

    .content::first-letter {
        font: 70px "Microsoft YaHei";
        color: #f5e327;
        float: left;
        margin-top: -15px;
        margin-right: 5px;
    }

    .content2 {
        text-indent: 2em;
        font: STSong;
    }

    .computer1 {
        float: right;
        margin: 10px 0 10px 10px;
    }

    .list {
        background: url(../images/bg-yellow.png) no-repeat bottom;
        width: 459px;
        height: 318px;
        margin: 30px 0;
    }

    .list li {
        letter-spacing: 0.3em;
    }

    .list ul li::before {
        content: "▲";
        font: 16px STSong;
        color: #5a5b5b;
        line-height: 20px;
        margin-right: 4px;
    }

    .list ul {
        padding: 20px;
        color: #5a5b5b;
    }

    .list ul li {
        margin: 19px 0;
    }

    .list ul li:last-child {
        margin: 0;
    }

    .redBlock {
        width: 260px;
        height: 160px;
        display: table;
        background: rgb(213, 93, 92);
        float: left;
    }

    .zero {
        font: 110px "Microsoft YaHei";
        color: white;
    }

    .info {
        font: italic 16px STHeiti;
        color: white;
        line-height: 24px;
        display: inline-block;
    }

    .border {
        width: 2px;
        height: 86px;
        display: inline-block;
        background: white;
    }

    .cell {
        display: table-cell;
        vertical-align: middle;
    }

    .infosm {
        font: 12px STHeiti;
    }

    .quote {
        font: italic 12px STHeiti;
        color: #5a5b5b;
        line-height: 16px;
        overflow: hidden;
        letter-spacing: 0.2em;
        padding: 5px;
    }

    .quetoLetter {
        font: 72px SimHei;
        color: #d45d5c;
        float: left;
        margin-left: -30px;
        margin-top: -15px;
        height: 30px;
    }

    .quoteRight {
        font: 72px SimHei;
        color: #d45d5c;
        float: right;
        margin-right: -30px;
        margin-top: -5px;
    }

    footer {
        width: 892;
        box-sizing: border-box;
        border-top: 1px solid #938e8c;
        font: 12px STHeiti;
        color: #d45d5c;
        text-align: right;
    }
</style>