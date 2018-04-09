<template>
    <div class="container">
        <header>
            <span class="logoName">Bai 百度</span>
            <nav>
                <a href="#page1">导航链接一</a>
                <a href="#page2">导航链接二</a>
                <a href="#page3">导航链接三</a>
                <a href="#top">导航链接四</a>
            </nav>
        </header>
        <article>
            <h1>文章一级标题</h1>
            <h2>文章二级标题</h2>
            <h3>文章作者 文章发表时间</h3>
            <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落， 这是一个很长的段落，换行了</p>
            <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落
                <a href="http://ife.baidu.com" target="_self">这里有一个链接链接到http://ife.baidu.com</a>这是一个很长的段落，这是一个很长的段落</p>
            </p>
            <img src="../images/Jellyfish.jpg">
            <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落， 这是一个很长的段落，换行了</p>
            <p>这是一个很长的段落，这是一个
                <b>粗体字</b>，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，
                <a href="http://ife.baidu.com" target="_blank">这里有一个链接点击后打开新窗口http://ife.baidu.com</a>这是一个很长的段落，这是一个很长的段落</p>
        </article>

        <article>
            <h1>
                另一篇文章一级标题
            </h1>
            <h2>
                文章二级标题
            </h2>
            <h3>
                文章作者 文章发表时间
            </h3>
            <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落， 这是一个很长的段落，换行了</p>
            <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，
                <a href="http://ife.baidu.com" target="_self">这里有一个链接链接到http://ife.baidu.com</a>这是一个很长的段落，这是一个很长的段落</p>
            </p>
            <img src="../images/Jellyfish.jpg" alt="Jellyfish.jpg">
            <ul>
                <li>列表项目一</li>
                <li>列表项目二</li>
                <li>列表项目三</li>
            </ul>
        </article>

        <article>
            <h1>图片</h1>
            <figure>
                <figcaption>
                    好看的图片
                </figcaption>
                <img src='../images/Jellyfish.jpg' alt='好看的图片'>
            </figure>
            <figure>
                <figcaption>
                    好看的图片
                </figcaption>
                <img src='../images/Jellyfish.jpg' alt='好看的图片'>
            </figure>
        </article>

        <article>
            <h1>最后一篇文章一级标题</h1>
            <h2>文章二级标题</h2>
            <h3>文章作者 文章发表时间</h3>
            <ol>
                <li>排名1</li>
                <li>排名2</li>
                <li>排名3</li>
            </ol>
            下面是一个表格
            <table class="border-table">
                <tr>
                    <th>表头</th>
                    <th>表头</th>
                    <th>表头</th>
                </tr>
                <tr>
                    <td>表格单元格内容</td>
                    <td>表格单元格内容</td>
                    <td>
                        <a href="#top">操作</a>
                    </td>
                </tr>
                <tr>
                    <td>表格单元格内容</td>
                    <td>表格单元格内容</td>
                    <td>
                        <a href="#top">操作</a>
                    </td>
                </tr>
                <tr class="countTotal">
                    <td>总计</td>
                    <td colspan="2">1000</td>
                </tr>
            </table>
        </article>

        <article>
            <aside>
                <h1>这里以后是一个侧栏，这是侧栏的标题</h1>
            </aside>
            <form id="personalInfo">
                <table>
                    <tr>
                        <td>
                            <label form="personalInfo" for="textInput">请输入邮箱地址</label>
                        </td>
                        <td>
                            <input type="text" id="textInput" placeholder="这是一个文本输入框">
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <span class="request">邮箱地址请按要求格式输入</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="newPwd" form="personalInfo">请输入密码</label>
                        </td>
                        <td>
                            <input type="password" id="newPwd" value="123456">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="confirmPwd" form="personalInfo">请重复输入密码</label>
                        </td>
                        <td>
                            <input type="password" id="confirmPwd" value="123456">
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <span class="request">密码请为6-16位英文数字</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="sex" form="personalInfo">性别</label>
                        </td>
                        <td>
                            <input type="radio" name="sex" value="男" checked>男
                            <input type="radio" name="sex" value="女">女
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="city" form="personalInfo">城市</label>
                        </td>
                        <td>
                            <select id="city">
                                <option value="北京">北京</option>
                                <option value="成都">成都</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="habit" form="personalInfo">爱好</label>
                        </td>
                        <td>
                            <input type="checkbox" name="city" value="运动">运动
                            <input type="checkbox" name="city" value="艺术">艺术
                            <input type="checkbox" name="city" value="科学">科学
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="descp">
                                个人描述
                            </label>
                        </td>
                        <td>
                            <textarea>这是一个多行输入框，请输入个人描述</textarea>
                        </td>
                    </tr>
                </table>
                <input type="submit" value="确认提交" class="submitLgBtn">
            </form>
        </article>
        <footer>
            <div>版权所有</div>
        </footer>
    </div>
</template>

<style scoped>
    .container {
        background: lightgray;
        color: black;
        font-size: 15px;
    }

    p {
        line-height: 1.5rem;
    }

    h1,
    h2,
    h3 {
        line-height: 1.5rem;
    }

    ol,
    ul {
        margin-left: 20px;
        line-height: 1.5rem;
    }

    ol {
        list-style-type: decimal;

    }

    .logoName {
        color: red;
        font-size: 20px;
    }

    header {
        background: black;
        color: white;
        font-weight: bold;
        width: 100%;
        height: 50px;
        vertical-align: middle;
    }

    header span {
        line-height: 50px;
        margin-left: 30px;
    }

    header nav {
        float: right;
        margin-right: 30px;
        line-height: 50px;
    }

    header a {
        font-size: 10px;
        color: white;
        text-decoration: none;
    }

    header a:link {
        color: white;
    }

    header a:visited {
        color: lightgray;
    }

    header a:hover {
        color: khaki;
    }

    header a:active {
        color: khaki;
    }

    article {
        background: white;
        margin: 30px;
        padding: 30px;
        box-shadow: 2px 2px 5px gray;
    }

    h2,
    h3 {
        color: grey;
    }

    h2 {
        font-size: 13px;
    }

    h3 {
        font-size: 10px;
    }

    p:first-of-type {
        text-indent: 2em;
    }

    article img {
        width: 500px;
        height: 300px;
    }

    figure {
        border: 1px solid lightgray;
        text-align: center;
        width: 100px;
        height: 100px;
        padding: 10px;
    }

    figure img {
        width: 80px;
        height: 80px;
    }

    .border-table,
    .border-table td,
    .border-table th {
        border: 1px solid gray;

    }

    .border-table {
        border-collapse: collapse;
        width: 100%;
    }

    table {
        line-height: 1.5rem;
        text-align: left;
    }

    table th {
        background: black;
        color: white;
    }

    .countTotal {
        background: lightgray;
    }

    aside h1 {
        border-left: 5px solid lightgray;
        padding: 10px;
    }

    #personalInfo table {
        width: 100%;
    }

    #personalInfo table td:first-child {
        padding: 10px;
        text-align: right;
    }

    #personalInfo textarea {
        width: 100%;
    }

    .submitLgBtn {
        display: block;
        background: blue;
        color: white;
        width: 100%;
        height: 40px;
        border-radius: 10px;
    }

    footer {
        background: black;
        color: white;
        text-align: center;
        height: 50px;
    }

    footer div {
        vertical-align: middle;
        line-height: 50px;
    }
</style>