import 'mint-ui/lib/button/style.css';
import _Button from 'mint-ui/lib/button';
/*
入口JS
*/
import Vue from 'vue';
import App from './App.vue';
// 引入FastClick，解决0.3s延迟
// import FastClick from 'fastclick'
// 引入路由，就是引入配置好的路由表
import router from './router';
// 引入Vuex的store对象
import store from './store';
import './mock/mockServer'; // 加载mockServer即可
// 注册全局组件标签

Vue.component(_Button.name, _Button); // <mt-button>
// 创建vue实例
new Vue({
  el: '#app',
  render: function render(h) {
    return h(App);
  },
  // 为根组件添加路由
  router: router, // 使用上vue-router
  store: store // 使用上vuex
});

//# sourceMappingURL=main-compiled.js.map