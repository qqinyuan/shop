/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
// 引入FastClick，解决0.3s延迟
// import FastClick from 'fastclick'
// 引入路由，就是引入配置好的路由表
import router from './router'

// 创建vue实例
new Vue({
  el: '#app',
  render: h => h(App),
  // 为根组件添加路由
  router
})
