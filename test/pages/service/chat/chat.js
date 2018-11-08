// pages/chat/chat.js
const app = getApp()
var util = require('../../../static/js/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      recordingMgs:'按住讲话',
      chatType:1,   // 1为文字  2为语音
      showShouquan:true,
      inputValue:'',
      /*
      type:1  己方文字
      type:2  己方图片  
      type:3  己方语音    
      **/
      chatRecord:[],
      isShowInputMenu:false
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    
  },
  //录音
  recordingStart: function () {
    console.log(111)
    RecorderManager.start()
    this.setData({
      recordingMgs: '正在录音'
    })
  },
  recordingEnd: function () {
    console.log(22)
    RecorderManager.stop()
    this.setData({
      recordingMgs: '按住讲话'
    })
    // 获取录音
    RecorderManager.onStop(function (res) {
      console.log(res)
    })
  },
  // 隐藏授权组件
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
  // 切换到文字输入
  toggleInput:function(){
    this.setData({
      chatType: 1
    })
  },
  // 切换到语音输入
  toggleVoice: function () {
    this.setData({
      chatType: 2
    })
  },
  // 显示大图
  showBig:function(){

  },
  //显示菜单
  hideMenu: function () {
    this.setData({
      isShowInputMenu: false
    })
  },
  // 收取菜单
  showMenu:function(){
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
    this.setData({
      inputValue: e.detail.value
    })
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