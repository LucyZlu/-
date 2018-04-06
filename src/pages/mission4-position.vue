<template>
    <div class="container">
        <div class="child">
            <p>这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，</p>
        </div>
    </div>
</template>

<style scoped>

    .container{
        width:100%;
        height:500px;
        border:1px solid black;
        position:relative;
    }
    .child{
        background:lightgray;
        width:400px;
        position:absolute;
        left:50%;
        top:50%;
        padding:20px;
        box-sizing:border-box;
        /*子元素的高宽可以根据内容定，translate指定根据自身的宽高来进行位移*/
        transform:translate(-50%,-50%);/*Opera不支持*/
    }

    p{
        line-height:1.5rem;
    }
</style>