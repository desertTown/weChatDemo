//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [{
      logo: '/images/pro_01.jpg',
      title: 'test',
      desc: 'asadasd'
    },
      {
        logo: '/images/pro_01.jpg',
        title: 'test',
        desc: 'asadasd'
      },
      {
        logo: '/images/pro_01.jpg',
        title: 'test',
        desc: 'asadasd'
      }]
    // proList: null,
  },
  onLoad: function () {
    this.setData({
      test: '01',
    })
    // this.getProList();
  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    wx.navigateTo({
      url: '/pages/detail/detail?title=w3c',
    })
  },  
  getProList: function() {
    var self = this; 
    wx.request({
      url: 'http://127.0.0.1:5000/',
      method:'GET',
      success: function(res){
          console.log(res);
          self.setData({
            proList: res.data
          })
      }
    })
  },
  //  处理版本过低， 不兼容情况
  copy: function() {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: '这是我要复制的内容',
        success: function (res) {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功',
          })
        }
      })
    } else{
      wx.showModal({
        title: '提示',
        content: '你的微信版本过低，请尽快升级',
      })
    }
  }
})
