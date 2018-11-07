// components/getUserInfo/getUserInfo.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {


    /*
    判断是否授权
    如果已经授权直接获取用户信息
    **/
    bindGetUserInfo:function(){
        var that  = this; 
        wx.getSetting({
            success (res){
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function(res) {
                          app.userInfo = res.userInfo;
                          that.triggerEvent('hideSq', true)
                        }
                    })
                }
            }
        })
    },

  }
})
