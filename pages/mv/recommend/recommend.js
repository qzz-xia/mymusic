// pages/mv/recommend/recommend.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    // 获取最新mv
    this.getMv()
  },

  // 获取最新mv
  async getMv(){
    let recommendListData = await request('/mv/first')
    // console.log(recommendListData.data)
    // console.log(recommendListData.data[0].id)
    this.setData({
      recommendList:recommendListData.data,
    })
  },

  // 跳转到detail
  goDetail(event){
    // 跳转传参，传mvid给detail
    // console.log(event.currentTarget.dataset.id)
    let mvId = event.currentTarget.dataset.id
    // console.log(mvId)
    wx.navigateTo({
      url: '/pages/mv/detail/detail?data=' + mvId
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
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})