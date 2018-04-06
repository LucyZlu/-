<template>
  <div id="app">
    <nav>
      <ul>
        <li class='menu'>
          <router-link to='/'>任务二</router-link>
        </li>
        <li class='menu'>
          <a href='#top' id='mission3'>任务三</a>
          <ul class="submenu">
            <li>
              <router-link to='/mission3Float'>浮动</router-link>
            </li>
            <li>
              <router-link to='/mission3Position'>定位</router-link>
            </li>
          </ul>
        </li>
        <li class='menu'>
          <a href="#top" id='mission4'>任务四</a>
          <ul class='submenu'>
            <li>
              <router-link to='/mission4Position'>transform</router-link>
            </li>
            <li>
              <router-link to='/mission4Position2'>margin</router-link>
            </li>
            <li>
              <router-link to='/mission4Table'>table</router-link>
            </li>
            <li>
              <router-link to='/mission4Flex'>flex</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  a {
    color: black;
    margin: 10px;
    text-decoration: none;
  }

  nav {
    margin: 5px 40px;
    height: 50px;
    width: 100%;
    /*让二级菜单的层叠顺序位于下方显示区的上面*/
    position: relative;
    z-index: 1;
  }

  .menu,
  .submenu li {
    display: block;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    float: left;
    background: skyblue;
  }

  .submenu {
    display: none;
  }

  .menu:hover .submenu {
    display: block;

  }
</style>