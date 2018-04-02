<template>
  <div id="app">
    <ul>
      <router-link to='/mission1'>任务一</router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style scoped>
a{
  text-decoration:none;
  color:black;
}
</style>