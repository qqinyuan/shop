/*
ajax请求函数模块
返回值： promise对象(异步返回的数据是：response.data)
*/
import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  // 直接返回response.data
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求,异步返回的数据是response.data，而不是response
    let promise // 这个内部的promise用来保存axios的返回值(promise对象)
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 数据拼接字符串，将data连接到url
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // return promise
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    })
      .catch(function (error) {
        // 失败了调用reject()
        reject(error)
      })
  })
}
/* const response = await ajax()
* const result = response.data
* 希望得到的是：
* const result = await ajax() */
