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

### 小程序中使用less


安装
```
$ npm install -g wxss-cli
```

使用

```
$ wxss ./path
```

亲测可用

### input双向绑定

```html
<input type='text' style="width: 100%" value="{{inputValue}}" bindinput="wxModel"/>
```

```js
  wxModel:function(e){
    this.setData({
      key: e.detail.value
    })
  },

```


### 父子组件传值


父组件wxml
```html

<star num="123" bind:getStore='getStore' ></star>
```
父组件js

```js
  // 获取评分
  getStore:function(e){
    console.log(e.detail)
  },
```



子组件wxml

```html
<!--星星评价组件-->
<view class='star-list'>
    <view class='star-item' wx:for="{{star}}" wx:key="{{item}}" bindtap='doStar' data-index='{{index}}'>
      <image src='/static/images/star.png' hidden="{{item=='1'}}"></image>
      <image src='/static/images/star-active.png' hidden="{{item=='0'}}"></image>
    </view>
</view>

```

子组件js
```js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {            // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    star:[1,1,1,1,1]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 调用父组件传过来的值
    getParentData:function(){
      console.log(this.data.num)
    },
    
    doStar:function(e){
      var store = e.currentTarget.dataset.index;
      var _star = [];
      for (var i=0;i<5;i++){
        if (i<=store){
          _star.push(1)
        }
        else{
          _star.push(0)
        }
      }
      this.setData({
        star:_star
      })
      // 向父组件传值
      this.triggerEvent('getStore', store+1)
    }
  }
})


```
