<template>
  <div id="app">
    <!-- keep-alive的意思就是路由中的内容如果被加载过一次，
    就把这个路由的信息放到内存中，下一次再进入到当前路由的时候，
    不需要重新去请求数据，不要重新渲染钩子函数;
    但是难道就不能更改缓存中的数据了吗？
     -->
    <keep-alive>
      <!-- 显示的是当前路由地址显示的内容 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
