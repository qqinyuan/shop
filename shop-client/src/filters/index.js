/**
 * 自定义过滤器
 */
import Vue from 'vue'
// import moment from 'moment'
// 优化，减少内存空间
import format from 'date-fns/format'
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)

})
