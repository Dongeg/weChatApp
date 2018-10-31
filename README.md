# weChatApp
微信小程序

## 回去用户准确的经纬度位置

```js
  // 获取用户位置
  getUserLocation: function () {
    var that = this
    // 神坑，wx.getLocation 有误差！！！很大！！！
    // 所以只能先让用户选择所在位置
    wx.chooseLocation({
      success:function(res){
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          latitude: latitude,//纬度 
          longitude: longitude,//经度  
        })
      }
    })
  },
```
