<template>
  <div id="app">
    <nav>
     <router-link to='/'>任务一和二</router-link>
     <a href="#top">任务三</a>
     <ul class="mission3List">
       <li><router-link to='/mission3Float'>任务三浮动</router-link></li>
       <li><router-link to='/mission3Position'>任务三定位</router-link></li>
     </ul>
     
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
a{
  color:black;
  display:block;
  margin:10px;
}

ul{
  list-style:circle;
}

ul li{
  margin-left:40px;
}

nav{
  margin:20px;
}

</style>