// 发送ajax请求
/**
 * 1.封装功能函数
 *  1.功能点明确
 *  2.函数内部应该保留固定代码（静态的）
 *  3.将动态的数据抽取成形参，由使用者根据自身的情况动态的传入实参
 *  4.一个良好的功能函数应该设置形参的默认值（ES6的形参默认值）
 * 
 * 2.封装功能组件
 *  1.功能点明确
 *  2.函数内部应该保留固定代码（静态的）
 *  3.将动态的数据抽取成props参数，由使用者根据自身的情况以标签属性的形式动态传入props数据
 *  4.一个良好的组件应该设置组件的必要性及数据类型
 *      props:{
 *          msg:{
 *              required:true,
 *              default:默认值,
 *              type:String
 *          }     
 *      }
 */
import config from './config'

export default (url,data={},method='GET')=>{
    return new Promise((resolve,reject)=>{
        // 1.new Promise 初始化promise实例的状态为pending
        wx.request({
            // url:config.host + url,
            url:config.mobileHost + url,
            data,
            method,
            header:{
              //cookies:
              // [
              //   "MUSIC_U=dd1e20826b21763258367a135c6327d6205caacef6b1283e1dd353c9dd9842480931c3a9fbfe3df2; Max-Age=1296000; Expires=Fri 21 May 2021 01:55:47 GMT; Path=/;",
              //   "__remember_me=true; Max-Age=1296000; Expires=Fri 21 May 2021 01:55:47 GMT; Path=/;",
              //   "__csrf=fc71693f53342f932629f6ef21327c09; Max-Age=1296010; Expires=Fri 21 May 2021 01:55:57 GMT; Path=/;"
              // ]
              
              // cookie:wx.getStorageSync('cookies')[0]
              cookie:wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item=>item.indexOf('MUSIC_U') !== -1) : ''
            },
            success: (res) => {
            //   console.log('请求成功： ',res)

              if (data.isLogin) {// 登录请求
                // 将用户的cookie存入本地
                wx.setStorage({
                  key: 'cookies',
                  data: res.cookies,
                });
              }

              // console.log(res)
              resolve(res.data) // resolve修改promise的状态为成功状态resolved
            },
            fail: (err) => {
            //   console.log('请求失败：',err)
              reject(err) // reject修改promise的状态为成功状态rejected
            }
        })
    })
}