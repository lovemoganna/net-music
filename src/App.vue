<template>
  <div id="app">
    <!--显示路由对应的内容-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
