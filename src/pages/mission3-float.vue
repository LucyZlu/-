<template>
    <div class="container">
        <div class="left">
            <img src="../images/Jellyfish.jpg" alt="团队logo">
            <span>团队logo</span>
        </div>

        <div class="right">
            <img src="../images/Penguins.jpg" alt="个人log">
            <img src="../images/Penguins.jpg" alt="个人log">
            <img src="../images/Penguins.jpg" alt="个人log">
        </div>
        
        <div class="content">
                <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落</p>  
          </div>
  
    </div>
</template>

<style scoped>
    *{
        box-sizing:border-box;
    }

    img{
        width:80px;
        height:80px;
    }

    .container {
        padding: 20px;
        background: #eee;
        border: 1px solid #999;
        overflow:hidden;/*1.让父元素变成BFC，计算所有块级元素高度，并包含最高的子元素*/
        /*float:left; 2.父元素本身应用浮动，变成BFC区域*/
        width:100%;
    }

    .left,
    .content,
    .right {
        background: white;
        border:1px solid black;
    }

    .left {
        width: 200px;
        float:left;
        padding:20px;
    }

    .left span{
        vertical-align:top;
    }

    .content {
        margin-left:220px;
        margin-right:140px;
        padding:20px;
    }

    .right {
        width: 120px;
        float: right;
        text-align:center;
        padding:0;
    }

    .right img{
        display:block;
        margin:20px;
    }

</style>