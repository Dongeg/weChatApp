// pages/chat/chat.js
const app = getApp()
var util = require('../../../static/js/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showShouquan:true,
      inputValue:'',
      /*
      type:1  己方文字
      type:2  己方图片      
      **/
      chatRecord:[],
      isShowInputMenu:false
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    
  },
  //
  hideSq:function(e){
    this.setData({
      showShouquan: true,
    })
  },
  //聊天发送图片
  chooseImg:function(){
    var that = this;
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        var _chatRecord = that.data.chatRecord
        var _data = {
          content: tempFilePaths[0],
          type: 2
        }
        _chatRecord.push(_data)
        that.setData({
          chatRecord: _chatRecord,
          inputValue: '',
        })
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
  //
  toggleMenu:function(){
    this.setData({
      isShowInputMenu: true
    })
  },
  // 点击发送
  send:function(){
    var _chatRecord = this.data.chatRecord
    var _data = {
      content:this.data.inputValue,
      type:1
    }
    _chatRecord.push(_data)
    this.setData({
      chatRecord: _chatRecord,
      inputValue:'',
    })
  },
  // 双向绑定input
  wxModel:function(e){
    var value = e.detail.value
    this.data.inputValue = value
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