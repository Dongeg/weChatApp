// pages/pay/pay.js
const app = getApp()
const RecorderManager = wx.getRecorderManager()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordingMgs:'按住讲话'
  },

  //录音
  recordingStart:function(){
    console.log(111)
    RecorderManager.start()
    this.setData({
      recordingMgs:'正在录音'
    })
  }, 
  recordingEnd:function(){
    console.log(22)
    RecorderManager.stop()
    this.setData({
      recordingMgs: '按住讲话'
    })
    // 获取录音
    RecorderManager.onStop(function(res){
        console.log(res)
    })
  },
  // 微信支付
  pay :function(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { },
      fail(res) { }
    })
  },
  // 上传
  uploadFile:function(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success(res) {
        //     const data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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