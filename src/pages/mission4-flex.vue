<template>
    <div class="container">
        <div class="child">
            <p>这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 100%;
        height: 500px;
        border: 1px solid black;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        /*1.居中，IE10水平垂直都不支持，可以用margin:auto居中*/
        /*
        align-items: center;
        justify-content: center;*/
    }

    .child {
        background: lightgray;
        width: 400px;
        box-sizing: border-box;
        padding: 20px;
        height: 200px;
        /*2.IE10可以用margin水平垂直居中，但是height不能使用min-height；IE9只能水平居中*/
        margin: auto;
    }

    p {
        line-height: 1.5rem;
    }
</style>