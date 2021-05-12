export function requst(par){
  wx.showLoading({
      title:'请求中',
      mask:true
  })
  return new Promise(function(resolve,reject){
      wx.request({
          ...par,
          url:`http://localhost:3000/${par.url}`,
          // 内网穿透
          // url:`http://mymusic.cn.utools.club/${par.url}`,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
              resolve(res)
          },
          fail (error){
              reject(error)
          },
          complete(){
              wx.hideLoading()
          }
        })
  })
}
