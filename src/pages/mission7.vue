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
            <div class="fourColumnBorder"></div>
            <div class="four">
                <img src="../images/task7_flag.png" alt="task7_flag">
                <p>丰富多彩的公益活动，发挥新世界的主人公意识</p>
            </div>
            <div class="fourColumnBorder"></div>
            <div class="four">
                <img src="../images/task7_flower.png" alt="task7_flower">
                <p>时尚的新理念，超前体验未知的生活</p>
            </div>
            <div class="fourColumnBorder"></div>
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
                    <div class="selectIcon">
                        <div class="leftArrow"></div>
                        <div class="rightArrow"></div>
                    </div>
                    <select class="selectProvince">
                        <option value="" disabled selected class="selectInfo">省份</option>
                        <option value="北京">北京市</option>
                        <option value="天津">天津市</option>
                        <option value="河北">河北省</option>
                        <option value="陕西">陕西省</option>
                        <option value="内蒙古自治区">内蒙古自治区</option>
                        <option value="辽宁">辽宁省</option>
                    </select>
                    <div class="selectIcon">
                        <div class="leftArrow"></div>
                        <div class="rightArrow"></div>
                    </div>
                    <select class="selectCity">
                        <option value="北京">北京</option>
                    </select>
                    <div class="selectIcon">
                        <div class="leftArrow"></div>
                        <div class="rightArrow"></div>
                    </div>
                    <button class="searchBtn" type="button">搜索</button>
                </form>
            </div>
        </article>

        <article class="imageWall">
            <figure>
                <div class="wallPic">
                    <img src="../images/task7_wall1.png" alt="wall picture">
                </div>

                <h3>北京活动</h3>

                <p>新社区大联盟</p>
            </figure>
            <figure>
                <h1>上海活动</h1>
                <p>夜上海新景观探索</p>
                <div class="wallPic">
                    <img src="../images/task7_wall2.png" alt="wall picture">
                </div>

            </figure>
            <figure>
                <div class="wallPic">
                    <img src="../images/task7_wall3.png" alt="wall picture">
                </div>
                <p>
                    <h3>深圳活动</h3>
                </p>
                <p>全新海岸线观点站</p>
            </figure>
            <figure>
                <div class="wallPic">
                    <img src="../images/task7_wall4.png" alt="wall picture">
                </div>
                <p>
                    <h3>香港活动</h3>
                </p>
                <p>奢侈消费大派送</p>
            </figure>
        </article>
        <article class="newWorld1">
            <div class="newWorldText">
                <h2>
                    新世界
                </h2>
                <h1>TIME</h1>
                <p>@新世界-北京</p>
                <p>2016.04.01</p>
            </div>
            <img src="../images/task7_newworld.png" alt="newworld">
            <div class="worldText">
                <h1>新世界/
                    <span class="redOne">01</span>
                </h1>
                <p>新世界是个新世界新世界是个新世界新世界是个新世界新世界是个新世界新世界是个新世界新世界是个新世界新世界是个新世界新世界是个新世界新世界是个</p>
                <button type="button" class="moreBtn">更多详情</button>
                <ul>
                    <li>
                        <button type="button" class="moreSelectBtn"></button>
                    </li>
                    <li>
                        <button type="button" class="moreSelectBtn"></button>
                    </li>
                    <li>
                        <button type="button" class="moreSelectBtn"></button>
                    </li>
                </ul>
            </div>
        </article>
        <article class="threeBlock">
            <div class="newRedBlock">
                <p>新时代</p>
                <p>关于爱生活的我们</p>
                <div class="whiteBorder"></div>
                <button type="button" class="whiteMoreBtn">查看更多</button>
            </div>
            <div class="whiteBlock">
                <p>新时代</p>
                <p>关于爱生活的我们</p>
                <div class="grayBorder"></div>
                <button type="button" class="redMoreBtn">查看更多</button>
            </div>
            <div class="person">
            </div>
        </article>
        <div class="clearfix"></div>
        <article class="volunteer">
            <div class="volunteerTitle">
                <h1>成为我们的志愿者</h1>
                <div class="redBorder"></div>
                <p>新世界的大家庭需要每一个爱生活的人加入，如果你够年轻，有梦想，有激情</p>
                <p>那就不要犹豫，快来加入我们，成为改变所有人生活的人</p>
            </div>
            <div class="volunteerInfo1">
                <h2>
                    新世界志愿者协议
                </h2>
                <p>加入新世界志愿者的人员必须遵守中华人民共和国的相关法律法规，并且本着平等自愿的原则......</p>
                <button type="button" class="moreInfo">
                    <img src="../images/task7_select.png" alt="select">more</button>
                <h2>新世界志愿者权利</h2>
                <p>新世界志愿者享受新世界内部所有资源的权利，并且享受所在四新世界活动的优先参与资格</p>
                <button type="button" class="moreInfo">
                    <img src="../images/task7_select.png" alt="select">more</button>
                <h2>更多条款</h2>
                <button type="button" class="moreInfo">
                    <img src="../images/task7_select.png" alt="select">more</button>
            </div>
            <div class="volunteerInfo2">
                <div>
                    <div class="personInfo">
                        <label for="name">姓名：</label>
                        <input type="text" name="name">
                    </div>
                    <div class="personInfo">
                        <label for="age">年龄：</label>
                        <input type="text" name="age">
                    </div>
                </div>
                <div>
                    <div class="personInfo">
                        <label for="tele">联系方式：</label>
                        <input type="text" name="tele">
                    </div>
                    <div class="personInfo">
                        <label for="addr">联系地址：</label>
                        <input type="text" name="addr">
                    </div>
                </div>
                <div class="dreamlife">
                    请简单描述您梦想的生活：
                    <textarea> </textarea>
                </div>
                <button type="button" class="submitBtn">提交申请</button>
            </div>
        </article>
        <footer>
            <h1>联系我们</h1>
            <p>为了更好地获取我们最新的产品资讯，您可以留下您的电子邮箱快速订阅我们的产品咨询</p>
            <p>也可以通过以下任何方式关注我们动态</p>
            <input type="text" placeholder="someone@email.com"><button type="button" class="submitEmail">提交</button>
            <div class="bottom"><span>@2016新世界</span><a href="#top">Back to top</a></div>
        </footer>
    </div>
</template>
<style scoped>
    .container {
       width: 1275px;
        background: white;
        margin: 0 auto;
        overflow-x: scroll;
    }

    .clearfix {
        clear: both;
    }

    * {
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        /*reset user agent stylesheet*/
        outline: 0;
        border: none;
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
        width: 1280px;
    }

    .top {
        position: relative;
        font: 21px "Microsoft YaHei";
        color: white;
        margin:0 auto;
    }

    .imageText {
        position: absolute;
        left: 130px;
        top: 230px;
    }

    .newLife {
        font-size: 60px;
        margin-bottom: 30px;
    }

    .startBtn {
        background: #e74f4d;
        color: white;
        font-size: 30px;
        width: 327px;
        height: 63px;
        margin-top: 70px;
    }

    .titleText {
        margin-bottom: 10px;
    }

    .fourIcon {
        width: 100%;
        font-size: 0;
    }

    .four {
        width: 24%;
        height: 185px;
        display: inline-block;
        text-align: center;
        padding: 42px 80px;
        font: 14px STHeiti;
        color: #767777;
        margin-bottom:60px;
        vertical-align:top;
    }

    .four img {
        margin-bottom: 45px;
    }

    .fourColumnBorder{
        display:inline-block;
        height:50px;
        width:2px;
        background:#bbbbbb;
        position:relative;
        top:130px;
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
        background: url(../images/task7_map.png) no-repeat;
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
        width: 1280px;
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
        padding: 0 10px;
        color: #a8aaaa;
    }

    .selectIcon {
        position: relative;
        left: -28px;
        top: 15px;
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .leftArrow {
        position: absolute;
        width: 8px;
        height: 1px;
        transform: rotate(45deg);
        /*兼容性必加*/
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        background: white;
    }

    .rightArrow {
        position: absolute;
        left: 5px;
        width: 8px;
        height: 1px;
        transform: rotate(-45deg);
        /*兼容性必加*/
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        background: white;
    }

    .map select option {
        background: #e4e3e5;
        color: #787878;
        padding: 0 30px;
    }

    .map select:focus option:hover {
        background: #be4e48;
        color: white;
    }

    /*隐藏select的默认提示信息选项*/

    .selectInfo {
        display: none;
    }

    .searchBtn {
        width: 235px;
        height: 35px;
        background: #be4e48;
        color: white;
        border: none;
        cursor: pointer;
    }

    .imageWall {
        height: 600px;
        width: 100%;
        background: #f7f7f7;
    }

    .imageWall figure {
        float: left;
        margin-top: 100px;
    }

    .wallPic {
        height: 335px;
        width: 215px;
        line-height: 335px;
        text-align: center;
        background: white;
        border: 1px solid #e0e0e0;
    }

    .wallPic img {
        width: 200px;
        height: 310px;
        vertical-align: middle;
    }

    .imageWall figure:nth-child(1) {
        margin-left: 145px;
    }

    .imageWall figure:nth-child(2),
    .imageWall figure:nth-child(3),
    .imageWall figure:nth-child(4) {
        margin-left: 35px;
    }

    .imageWall h3 {
        text-align: center;
        margin: 0 auto;
        color: #323333;
        margin-top: 15px;
    }

    .imageWall p {
        text-align: center;
        margin: 0 auto;
        color: #898a8a;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .imageWall h1 {
        text-align: center;
        font-size: 25px;
        color: #323233;
        letter-spacing: 23px;
    }

    .worldText p {
        text-align: left;
    }

    .newWorld1 {
        position: relative;
        height: 567px;
        width: 100%;
        font: 12px SimSun;
        color: #aaaaaa;
        letter-spacing: 0.1em;
    }

    .newWorld1 h1 {
        font: bold 21px SimSun;
        text-align: center;
        margin-bottom: 30px;
    }

    .moreSelectBtn {
        background: url(../images/task7_slideCircle.png) no-repeat;
        width: 11px;
        height: 12px;
        border: none;

    }

    .moreSelectBtn:focus {
        background: url(../images/task7_slideCircle2.png) no-repeat;
    }

    .redOne {
        color: #e7504d;
    }

    .worldText {
        display: inline-block;
        vertical-align: top;
        width: 400px;
        padding: 165px 70px 0;
        ;
        line-height: 30px;
        text-align: center;
    }

    .moreBtn {
        margin-top: 50px;
        width: 100px;
        height: 30px;
        border: 1px solid #e5666a;
        background: white;
        color: #e5666a;
        font: 12px "Microsoft YaHei";
        margin-bottom: 20px;
    }

    .worldText ul li {
        display: inline-block;
        margin: 5px;
    }

    .worldText ul li button {
        cursor: pointer;
    }

    .newWorldText {
        position: absolute;
        color: white;
        left: 240px;
        top: 130px;
        text-align: center;
    }

    .newWorldText h1,
    .newWorldText h2 {
        font-family: "Microsoft YaHei";
    }


    .newWorldText h2 {
        font-size: 49.47px;
        margin-bottom: 8px;
    }

    .newWorldText h1 {
        font-size: 157.79px;
        font-weight: normal;
        margin-top: -50px;
    }

    .newWorldText p {
        font-size: 21.91px;
    }

    .newWorldText p:first-of-type {
        margin-top: -35px;
    }

    .newWorldText p:nth-of-type(2) {
        margin-top: 18px;
    }

    .threeBlock {
        width: 100%;
    }

    .newRedBlock,
    .person,
    .whiteBlock {
        float: left;
        width: 425px;
        height: 520px;
        text-align: center;
    }

    .newRedBlock {
        background: #e74f4d;
        color: #fdf6f6;
        font: 21px STHeiti;
    }

    .newRedBlock,
    .whiteBlock {
        padding: 175px 127px;
        ;
    }

    .whiteBorder {
        margin: 25px auto;
        height: 2px;
        width: 30px;
        background: white;
    }

    .whiteBlock {
        font: 21px STHeiti;
    }

    .grayBorder {
        margin: 25px auto;
        height: 2px;
        width: 30px;
        background: gray;
    }

    .whiteMoreBtn,
    .redMoreBtn {
        width: 165px;
        height: 40px;
        background: transparent;
        font: 21px STHeiti;
    }

    .whiteMoreBtn {
        border: 1px solid white;
        color: white;
    }

    .redMoreBtn {
        border: 1px solid #e74f4d;
        color: #e74f4d;
    }

    .person {
        background: url(../images/task7_person.png) no-repeat;
    }

    .volunteerTitle {
        height: 300px;
        text-align: center;
        padding-top: 100px;
        ;
    }

    .volunteerTitle h1 {
        font: 21px STHeiti;
    }

    .volunteerTitle p {
        color: #aaaaaa;
        line-height: 20px;
    }

    .redBorder {
        width: 30px;
        height: 3px;
        background: #ea6663;
        margin: 10px auto;
    }

    .volunteerInfo1 {
        width: 500px;
    }

    .volunteerInfo2{
        vertical-align: top;
    }

    .volunteerInfo1,.volunteerInfo2 {
        display: inline-block;
        height: 280px;
        padding-left: 100px;
        font: 12px SimSun;
        color: #a5a3a2;
    }

    .volunteerInfo1 h2 {
        font: 15px STHeiti;
        color: #231815;
        margin-bottom: 20px;
        clear: right;
    }

    .volunteerInfo1 p {
        line-height: 20px;
    }

    .volunteer{
        margin-bottom:170px;
    }

    .moreInfo {
        float: right;
        margin-bottom: 18px;
        background: transparent;
        font: 12px SimSun;
        color: #a5a3a2;
    }

    .personInfo {
        display: inline-block;
        height: 35px;
        width: 305px;
        background: #edecee;
        margin-bottom: 15px;
        margin-right: 17px;
        padding-left: 15px;
        line-height: 35px;
    }

    .personInfo label,
    .personInfo input {
        vertical-align: middle;
        color: #787474;
    }

    .personInfo input {
        background: transparent;
        border: none;
        width: 80%;
        height: 80%;
    }

    .dreamlife {
        height: 120px;
        width: 635px;
        background: #edecee;
        padding: 15px;
        color:#787474;
    }

    .dreamlife textarea {
        display: block;
        width: 600px;
        height: 80px;
        background:transparent;
        border:none;
    }

    .submitBtn{
        width:635px;
        height:40px;
        margin-top:12px;
        background:#ededee;
        color:black;
        font-weight: bold;
    }

    footer{
        height:400px;
        background:#32353e;
        color:#cacbcc;
        font:21px STHeiti;
        text-align:center;
        padding-top:90px;
        position:relative;
    }

    footer h1{
        color:white;
        margin-bottom:12px;
    }

    footer p{
        font:12px SimSun;
        letter-spacing: 0.1em;
        line-height:20px;
    }

    footer p:last-of-type{
        margin-bottom:30px;
    }

    footer input{
        width:428px;
        height:40px;
        vertical-align:middle;
    }

    .submitEmail{
        width:80px;
        height:40px;
        vertical-align:middle;
    }

    .bottom{
        height:56px;
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        background:#2f3038;
        font:12px SimSun;
        padding-top:25px;
        text-align:left;
    }

    .bottom span{
        margin-left:100px;
    }

    .bottom a{
        float:right;
        margin-right:40px;
        color:white;
        text-decoration: none;
    }
</style>