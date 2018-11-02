const app = getApp()




//获取小程序 access_token
// 此处需要后台做接口转发请求，微信不允许设置 https://api.weixin.qq.com 在 request 合法域名列表中
function getAccessToken() {
  app.accessToken = '123456'
  // wx.request({
  //   url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + app.appID + '&secret=' + app.appSecret,
  //   method: 'GET',
  //   data: {},
  //   success: function (res) {
  //     console.log(res);
  //     app.accessToken = '123456'
  //   }
  // })
}
/*
用户登录
获取用户的
openid   
session_key
**/
// 此处需要后台做接口转发请求，微信不允许设置 https://api.weixin.qq.com 在 request 合法域名列表中
function userLogin(){
  wx.login({
    success(res) {
      console.log(res)
      if (res.code) {
        app.code = res.code;
          // wx.request({
          //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + app.appID + '&secret=' + app.appSecret + '&js_code=' + res.code+'&grant_type=authorization_code',
          //   method: 'GET',
          //   data: {},
          //   success: function (res) {
          //     console.log(res);
          //     app.openID = res.openid
          //     app.sessionKey = res.session_key 
          //   }
          // })
      }
    }
  })
}
module.exports = {
  getAccessToken,
  userLogin,
}
