<template>
    <div class="container">
        <div class="child">
            这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容，这是子元素的内容
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 100%;
        height: 500px;
        border: 1px solid black;
        display: table;
    }

    .child {
        display:table-cell;
        text-align:center;
        vertical-align: middle;
        width:400px;/*宽度不管用*/
        background:lightgray;
    }

    p {
        line-height: 1.5rem;
    }
</style>