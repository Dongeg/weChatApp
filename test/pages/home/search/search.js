// pages/search/search.js
var util = require('../../../static/js/common.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchBtnText:'搜索',
    isSearchFocus:false, // 搜索框是否聚焦
    key:'',  // 搜索框的值
    param: {start: 0,count: 18 },
    pageindex: 1,
    callbackcount: 18,
    url: '',
    shopList:[], // 门店列表
    canReqdata: true, // 是否可以下拉刷新
  },
  /**
   * 
   * 
  */
  goToDetails:function(){
    wx.navigateTo({
      url: '../../common/shopDetails/shopDetails',
    })
  },
  /**
   * 
   * 
  */
  goToOrder:function(){
    wx.navigateTo({
      url: '../../common/order/order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 清空输入框
  inputClear:function(){
    this.setData({
      key: ''
    })
  },
  // 关键字搜索
  searchReal:function(){
    // to do

  },
  //点击取消
  searchBtnClick:function(){
      // 返回上一页
      wx.navigateBack();
  },
  // 搜索框聚焦
  searchFocus:function(){
    this.setData({
        isSearchFocus:true,
        searchBtnText:'取消'
      })
  },
  // 搜索框失焦
  searchBlur:function(){
    this.setData({
      isSearchFocus: false,
      searchBtnText: '搜索'
    })
  },
  /**
   * 获取搜索框的值
   * */ 
  getKey:function(e){
    this.setData({
      key: e.detail.value
    })
  },
  // 获取附近的门店列表
  getShop:function(){
    util.getData({
      url:'',
      data:{},
      callback:function(res){

      }

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
   * 上拉加载更多数据
   */
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数")
    var that = this;
    if (that.data.canReqdata) {
      that.data.canReqdata = false;
      that.setData({
        pageindex: that.data.pageindex + 1,  //每次触发上拉事件，把searchPageNum+1
        param: {
          start: that.data.param.start + that.data.param.count + 1,
          count: 18,
        }
      });
      that.getShop();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})