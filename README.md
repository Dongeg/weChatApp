# weChatApp
微信小程序

### 获取用户准确的经纬度位置

```js
  // 获取用户位置
  // 开发者工具上的定位是不准的
  getUserLocation: function () {
    var that = this
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
      }
    })
  },
```
