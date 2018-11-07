//index.js

//获取应用实例
const app = getApp()
var util = require('../../../static/js/common.js');
Page({
  data: {
    isShowTop:true,
    isShowMsg:true,
    markerId:'', // 当前点击的标记点id
    latitude:0,
    longitude:0,
    markers: [
      {
        iconPath: "/static/images/loc.png",
        id: 0,
        longitude:113.3282,
        latitude: 23.08451,
        width: 30,
        height: 30,
        callout: {
          content: " 语言：珊珊是不是傻 \n 预计到达时间：10分钟 \n 车牌号：12345",
          padding: 10,
          display: 'ALWAYS',
          textAlign: 'left',
          borderRadius:5,
        }

      },
    ]
  },
  // 跳转到搜索页
  toSearchPage:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  // 页面加载执行
  onLoad: function () {
    this.getUserLocation();
  },
  onReady:function(){

  },
  updated:function(){


  },
  //
  toggle:function(e){
    this.setData({
      isShowTop:!this.data.isShowTop
    })
  },
  // 页面跳转
  linkTo:function(){
    wx.redirectTo({
      url: '../contact/contact',
      success: function (res) {
        wx.showToast({
          title: '获取密码成功',
          duration: 1000
        })
      }
    }) 
  },
  // 返回到用户当前所在位置
  back:function(e){
    var that = this;
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
  },
  // 获取用户经纬度
  getUserLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          latitude: latitude,//纬度 
          longitude: longitude,//经度  
        })
        wx.nextTick(function(){
          let mpCtx = wx.createMapContext("map");
          mpCtx.moveToLocation();
        }) 
      }
    })
  },
  // 获取附近的门店信息
  getNearlyShop:function(lat,lon){
    wx.request({
      url: '',
      data: { latitude:lat,longitude:lon},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        this.setData({
          markers: res.data.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  // 点击气泡触发
  callouttap:function(e){
    var that = this;
    console.log(e.markerId);
    that.setData({
      markerId: e.markerId,
      isShowMsg: false,
    })
  },
  // 点击地图触发
  clickMap: function(){
    this.setData({
      isShowMsg: true,
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 视野发生变化时触发
  regionchange(e) {
    var that = this;
    console.log(e.type)
    if (e.type == 'end'){
      // 获取此时中心点的坐标
      let mpCtx = wx.createMapContext("map");
      mpCtx.getCenterLocation({
        success: function (longitude,latitude){
          console.log(longitude, latitude)
          // that.getNearlyShop(longitude,latitude)
        }
      })
    }

  },
  // 点击标记点触发
  markertap(e) {
    console.log(e)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
