<template>
    <div class="container">
        <div class="left">
            <img src="../images/Jellyfish.jpg" alt="团队logo">
            <span>团队logo</span>
        </div>

        <div class="content">
            <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落</p>
        </div>

        <div class="right">
            <img src="../images/Penguins.jpg" alt="个人log">
            <img src="../images/Penguins.jpg" alt="个人log">
            <img src="../images/Penguins.jpg" alt="个人log">
        </div>

        <div class="clearfix"></div>
    </div>
</template>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .container {
        width: 100%;
        border: 1px solid black;
        background: #eee;
        position: relative;
        min-height:362px;
    }

    img {
        width: 80px;
        height: 80px;
    }

    .left,
    .content,
    .right {
        border: 1px solid gray;
        background: white;
    }

    .left {
        width: 200px;
        margin: 20px;
        padding: 20px;
    }

    .left span {
        vertical-align: top;
        margin: 5px;
    }

    .content {
        position: absolute;
        left: 240px;
        top:20px;
        right:160px;
        padding: 20px;
    }

    .right{
        position:absolute;
        width:120px;
        right:20px;
        top:20px;
    }

    .right img{
        margin:20px;
        display:block;
    }

    .clearfix{
        clear:both;
    }

</style>