// pages/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: !0,
    sjh: "",
    mm: "",
    confirmm: "",
    regtext: "注册"
  },

  /**
   * 输入手机号
   */
  srsjh: function(t) {
    console.log(t.detail.value), this.setData({
      sjh: t.detail.value
    }), "" != this.data.sjh && "" != this.data.mm && "" != this.data.confirmm ? this.setData({
      disabled: !1
    }) : this.setData({
      disabled: !0
    });
  },

  /**
   * 输入密码
   */
  srmm: function(t) {
    console.log(t.detail.value), this.setData({
      mm: t.detail.value
    }), "" != this.data.sjh && "" != this.data.mm && "" != this.data.confirmm ? this.setData({
      disabled: !1
    }) : this.setData({
      disabled: !0
    });
  },

  /**
   * 确认密码
   */
  qrmm: function(t) {
    console.log(t.detail.value), this.setData({
      confirmm: t.detail.value
    }), "" != this.data.sjh && "" != this.data.mm && "" != this.data.confirmm ? this.setData({
      disabled: !1
    }) : this.setData({
      disabled: !0
    });
  },

  register: function() {
    var sjh = this.data.sjh,
      mm = this.data.mm,
      confirmm = this.data.confirmm;

    if (mm !== confirmm) {
      wx.showToast({
        title: '两次密码输入不一致',
      })
      return;
    }

    wx.request({
      url: app.globalData.baseUrl + '/user/register',
      method: "POST",
      data: {
        username: sjh,
        password: mm,
        confirmm: confirmm
      },
      success: function(res) {
        console.log(res)
        if (res && res.data && res.data.data && res.data.data.length > 0) {
            

        }
      },



    })



    console.log("------")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})