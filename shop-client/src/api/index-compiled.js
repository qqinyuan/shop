/* 包含n个接口请求函数的模块
* 函数的返回值：promise对象 */
import ajax from './ajax';
// import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:4000'
// const BASE_URL = 'http://localhost:4000'
var BASE_URL = '/api';
// 1、根据经纬度获取位置详情,这个接口的经纬度参数是在url路径里的，没有query参数
export var reqAddress = function reqAddress(geohash) {
  return ajax(BASE_URL + '/position/' + geohash);
};
// 2、获取食品分类列表
export var reqCategorys = function reqCategorys() {
  return ajax(BASE_URL + '/index_category');
};
// 3、根据经纬度获取商铺列表,将经纬度两个数据作为一个参数对象传入,也可以两个数据分别传入ajax， 然后再放入一个对象参数内， 如下面的手机号接口
export var reqShops = function reqShops(longitude, latitude) {
  return ajax(BASE_URL + '/shops', { longitude: longitude, latitude: latitude });
};
// 4、根据经纬度和关键字搜索商铺列表
export var reqSearchShops = function reqSearchShops(geohash, keyword) {
  return ajax(BASE_URL + '/search_shops', { geohash: geohash, keyword: keyword });
};
// 5、获取一次性验证码,不用发ajax请求
// export const reqCapture = () => ajax('/captcha')
// 6、用户名密码登陆
export var reqPwdLogin = function reqPwdLogin(_ref) {
  var name = _ref.name,
      pwd = _ref.pwd,
      captcha = _ref.captcha;
  return ajax(BASE_URL + '/login_pwd', { name: name, pwd: pwd, captcha: captcha }, 'POST');
};
// 7、发送短信验证码
export var reqSendCode = function reqSendCode(phone) {
  return ajax(BASE_URL + '/sendcode', { phone: phone });
};
// 8、手机号验证码登陆
export var reqSmsLogin = function reqSmsLogin(phone, code) {
  return ajax(BASE_URL + '/login_sms', { phone: phone, code: code }, 'POST');
};
// 9、根据会话获取用户信息
export var reqUserInfo = function reqUserInfo() {
  return ajax(BASE_URL + '/userinfo');
};
// 10、用户登出
export var reqLogout = function reqLogout() {
  return ajax(BASE_URL + '/logout');
};
// 获取商家信息
export var reqShopInfo = function reqShopInfo() {
  return ajax('/info');
};
// 获取商家评论数组
export var reqShopRatings = function reqShopRatings() {
  return ajax('/ratings');
};
// 获取商家商品数组
export var reqShopGoods = function reqShopGoods() {
  return ajax('/goods');
};

//# sourceMappingURL=index-compiled.js.map