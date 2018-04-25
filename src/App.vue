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
        <li class='menu'>
          <a href="#top" id="mission5">任务五</a>
          <ul class="submenu">
            <li>
              <router-link to='/mission5Float'>浮动+BFC</router-link>
            </li>
            <li>
              <router-link to='/mission5Flex'>flex</router-link>
            </li>
          </ul>
        </li>
        <li class='menu'>
          <router-link to='/mission6'>任务六</router-link>
        </li>
        <li class='menu'>
          <router-link to='/mission7'>任务七</router-link>
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

  #app {
    background-color:thistle;
  }

  nav {
    padding: 5px 10px;
    box-sizing: border-box;
    height: 50px;
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

  .menu {
    border-radius: 50px;
  }

  .submenu {
    display: none;
  }

  .menu:hover .submenu {
    display: block;
  }

  .menu:hover a:first-child {
    text-decoration: underline;
  }
</style>