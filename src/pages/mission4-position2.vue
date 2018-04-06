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
        position: relative;
    }

    .child {
        background: lightgray;
        width: 400px;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        /*必须指定高度，且不能是min-height*/
        height:200px;
        box-sizing:border-box;
        padding:20px;
    }

    p {
        line-height: 1.5rem;
    }
</style>