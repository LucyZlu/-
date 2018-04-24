<template>
    <div class="container">
        <header>
            <img class="bookImg" src="../images/task7_book.png" alt="task7_book">
            <span class="newWorld">新世界</span>
            <nav class="headerNav">
                <a class="firstPage">首页</a>
                <a>最新活动</a>
                <a>项目介绍</a>
                <a>爱心社区</a>
                <a>关于我们</a>
                <a class="login">登录</a>
            </nav>
        </header>
        <article class="top">
            <img src="../images/task7_train.png" alt="task7_train" class="train">
            <div class="imageText">
                <p class="newLife">Time of new life</p>
                <p class="titleText">新时代，年轻的人们让我们一起</p>
                <p>体验新生活，享受新生活</p>
                <button type="button" class="startBtn">开始体验</button>
            </div>
        </article>
        <article class="fourIcon">
            <div class="four">
                <img src="../images/task7_circle.png" alt="task7_circle">
                <p>打造全新的世界观，让你更爱你的生活</p>
            </div>
            <div class="four">
                <img src="../images/task7_flag.png" alt="task7_flag">
                <p>丰富多彩的公益活动，发挥新世界的主人公意识</p>
            </div>
            <div class="four">
                <img src="../images/task7_flower.png" alt="task7_flower">
                <p>时尚的新理念，超前体验未知的生活</p>
            </div>
            <div class="four">
                <img src="../images/task7_grid.png" alt="task7_grid">
                <p>完善的培养机制，培养你全新的世界观</p>
            </div>
        </article>
        <article class="bookCenter">
            <img src="../images/task7_book.png" alt="task7_book" class="largeBook">
            <p>关于新世界，你不知道的还有什么？</p>
        </article>
        <article class="map">
            <div class="mapShadow"></div>
            <div class="mapText">
                <p>查找新世界城市活动信息</p>
                <div class="mapBorder"></div>
                <p class="mapInfo">每个城市有不同的活动信息，请自主查询您所需要了解的城市</p>
                <form>
                    <select class="selectCountry">
                        <option value="中国">中国</option>
                    </select>
                    <select class="selectProvince">
                        <option value="北京">北京市</option>
                        <option value="天津">天津市</option>
                        <option value="河北">河北省</option>
                        <option value="陕西">陕西省</option>
                        <option value="内蒙古自治区">内蒙古自治区</option>
                        <option value="辽宁">辽宁省</option>
                    </select>
                    <select class="selectCity">
                        <option value="北京">北京</option>
                    </select>
                    <button class="searchBtn" type="button">搜索</button>
                </form>
            </div>
        </article>
        <footer>

        </footer>
    </div>
</template>
<style scoped>
    .container {
        min-width: 1278px;
        background: white;
        overflow-x: scroll;
        overflow-y: scroll;
    }

    header {
        height: 60px;
        padding: 0 50px;
        line-height: 70px;
        color: #393a3a;
    }

    .newWorld {
        font: bold 21px STHeiti;
    }

    .headerNav {
        float: right;
        font: 14px "Microsoft YaHei";
        color: #787b83;
        margin-top: 10px;
    }

    .headerNav a {
        display: inline-block;
        height: 50px;
        width: 60px;
        box-sizing: border-box;
        text-align: center;
        padding-top: 10px;
        margin: 0 10px;
    }

    .firstPage {
        border-bottom: 4px solid #e74f4d;
    }

    .bookImg {
        width: 30px;
        height: 31px;
        margin-top: 20px;
    }

    .login {
        font-weight: bold;
        color: #e74f4d;
    }

    .login::before {
        content: url(../images/task7_login.png);
        margin-right: 5px;
    }

    article {
        width: 100%;
    }

    .train {
        width: 100%;
    }

    .top {
        position: relative;
        font: 21px "Microsoft YaHei";
        color: white;
    }

    .imageText {
        position: absolute;
        left: 130px;
        top: 230px;
    }


    .newLife {
        font-size: 60px;
        margin: 0 0 30px 0;
    }

    .startBtn {
        background: #e74f4d;
        color: white;
        font-size: 30px;
        width: 327px;
        height: 63px;
        margin-top: 70px;
        cursor: pointer;
        /*reset user agent stylesheet*/
        border: none;
    }

    .titleText {
        margin-bottom: 10px;
    }

    .fourIcon {
        width: 100%;
        font-size: 0;
    }

    .four {
        width: 25%;
        height: 185px;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        padding: 42px 80px;
        font: 14px STHeiti;
        color: #767777;
    }

    .four img {
        margin-bottom: 45px;
    }

    .bookCenter {
        background: #ededec;
        text-align: center;
        height: 360px;
        width: 100%;
        font: 53.59px STHeiti;
        color: #a0a1a1;
    }

    .bookCenter img {
        margin: 90px 0 50px 0;
    }

    .map {
        background: url(../images/task7_map.png);
        height: 340px;
        width: 100%;
        position: relative;
        font: 21px "Microsoft YaHei";
        color: white;
    }

    /*map的粉色遮罩层*/

    .mapShadow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(170, 52, 50, .2);
    }

    .mapText {
        position: absolute;
        z-index: 1;
        text-align: center;
        width: 100%;
    }

    .mapText p:first-child {
        margin: 50px 0 12px;
    }

    .mapBorder {
        background: white;
        width: 30px;
        height: 2px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .mapInfo {
        font-size: 12px;
        margin-bottom: 52px;
    }

    .mapText select {
        width: 235px;
        height: 35px;
        background: url(../images/task7_selectBG.png) no-repeat 210px center white;
        -webkit-appearance: none;
        /*去除chrome浏览器的默认下拉图片*/
        -moz-appearance: none;
        /*去除Firefox浏览器的默认下拉图片*/
        appearance: none;
    }
</style>