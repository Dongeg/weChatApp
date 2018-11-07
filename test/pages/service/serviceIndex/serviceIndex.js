// pages/contact.js
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
  hideSq: function (e) {
    this.setData({
      showShouquan: true,
    })
  },
  //拨打电话
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '13060634596',
      success:function(res){
        console.log(res)
      },
      fail:function(res){

      }
    })
  },
  //跳转到在线客服
  goToChat:function(){
    wx.navigateTo({
      url: '../chat/chat',
    })
  },
  // 跳转到问题详情页
  toQueDetail:function(){
    wx.navigateTo({
      url: '../questionDetails/questionDetails',
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