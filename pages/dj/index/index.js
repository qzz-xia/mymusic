// pages/dj/index/index.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],//轮播图
    djRecommend:[],//电台列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 得到轮播图
    this.getBanner()

    // 得到电台列表
    this.getDjRecommend()     
  },

  // 得到轮播图
  async getBanner(){
    let bannerListData = await request('/dj/banner')
    this.setData({
      bannerList:bannerListData.data
    })
  },

  // 得到电台列表
  async getDjRecommend(){
    let djRecommendData = await request('/dj/recommend')
    // console.log(djRecommendData)
    this.setData({
      djRecommend:djRecommendData.djRadios
    })
  },

  // 跳转到detail
  goDetail(event){
    // console.log(event.currentTarget.dataset.id)
    let recommendId = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/dj/detail/detail?recommendId=' + recommendId
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