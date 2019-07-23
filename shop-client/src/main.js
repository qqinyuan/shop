/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
// 引入FastClick，解决0.3s延迟
// import FastClick from 'fastclick'
// 引入路由，就是引入配置好的路由表
import router from './router'
// 引入Vuex的store对象
import store from './store'
import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器
// 注册全局组件标签
import {Button} from 'mint-ui'
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading
})
// 创建vue实例
new Vue({
  el: '#app',
  render: h => h(App),
  // 为根组件添加路由
  router, // 使用上vue-router
  store // 使用上vuex
})
