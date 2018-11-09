// pages/user/user.js
const app = getApp()
var util = require('../../../static/js/common.js');
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    showShouquan: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 链接跳转
  goto:function(e){
    console.log(e)
    debugger
    var type = e.currentTarget.dataset.type;
    var link = '';
    switch (type){
      case '1':
        link = '../reservation/reservation';
        break;
      case '2':
        link = '../order/order';
        break;
      case '3':
        link = '../garage/garage';
        break;
      case '4':
        link = '../coupon/coupon';
        break;
      case '5':
        link = '../tank/tank';
        break;
    }
    wx.navigateTo({
      url: link,
    })
  },

  // 隐藏授权组件
  hideSq: function (e) {
    this.setData({
      showShouquan: true,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    util.isNeedShowAuthorization(this)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})