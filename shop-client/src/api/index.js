/*包含n个接口请求函数的模块
* 函数的返回值：promise对象*/
import ajax from './ajax'
//axios.defaults.baseURL = 'http://localhost:4000';
//1、根据经纬度获取位置详情,这个接口的经纬度参数是在url路径里的，没有query参数
export const reqAddress = (geohash) => ajax('/position/${geohash}')
//2、获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
//3、根据经纬度获取商铺列表,将经纬度两个数据作为一个参数对象传入,也可以两个数据分别传入ajax， 然后再放入一个对象参数内， 如下面的手机号接口
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
//4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
//5、获取一次性验证码
//export const reqCapture = () => ajax('/captcha')
//6、用户名密码登陆
export const reqLogin = ({name, pwd, captcha}) => ajax('/login_pwd',{name, pwd, captcha}, 'POST')
//7、发送短信验证码
export const reqSendcode = (phone) => ajax('/sendcode',{phone})
//8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/login_sms',{phone, code}, 'POST')
//9、根据会话获取用户信息
export const reqUserinfo = () => ajax('/userinfo')
//10、用户登出
export const reqLogout = () => ajax('/logout')
