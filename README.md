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
      inputValue: e.detail.value
    })
  },

```


### 父子组件传值


父组件wxml
```html
<!-- 评论列表 -->
<view class='comment-list'>
  <view class='good page-header'>
      <view>好评率：80%</view>
      <view><star bind:getStore='getStore' store="4" canChange="{{false}}" id='star'></star></view>
  </view>
</view>
```
父组件js

```js
  onLoad: function (options) {
    // 父组件执行子组件方法
    this.selectComponent("#star").setStore();
  },
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
    num: {            
      type: Number,     
      value: ''     
    }
    // 父组件传过来的评分
    store: {         // 属性名   
      type: Number,  // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '5'     // 默认值（可选），如果未指定则会根据类型选择一个
    },
    // 是否可以操作评分
    canChange:{
      type: Boolean,
      value: true,     
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
    setStore() {
      console.log(this.data.store)
      var store = this.data.store - 1;
      var _star = [];
      for (var i = 0; i < 5; i++) {
        if (i <= store) {
          _star.push(1)
        }
        else {
          _star.push(0)
        }
      }
      this.setData({
        star: _star
      })
    },
    doStar:function(e){
      if (!this.data.canChange){
        return
      }
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
      this.triggerEvent('getStore', store+1)
    }
  }
})


```
