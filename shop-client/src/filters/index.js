/**
 * �Զ��������
 */
import Vue from 'vue'
// import moment from 'moment'
// �Ż��������ڴ�ռ�
import format from 'date-fns/format'
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)

})
