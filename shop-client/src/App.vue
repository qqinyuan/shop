<template>
  <!--修改应用组件的模板-->
    <div id="app"><!--提供注入绑定元素的内容-->
    <!--设置路由组件的视图位置-->
    <router-view></router-view>
    <!--放置非路由组件,v-show控制FooterGuide在一级路由下不显示-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 引入底部组件并注册
export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 整个应用组件的样式
  #app
    width 100%
      height 100%
      background #f5f5f5
</style>
