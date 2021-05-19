// pages/list/list.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 得到歌单数据
    let listData = await request('/top/playlist/highquality')
    // console.log(listData)
    this.setData({
      list:listData.playlists
    })
  },

  // 跳转到listDetail
  goListDetail(event){
    // console.log(event.currentTarget.dataset.id)
    let listId = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/listDetail/listDetail?listId=' + listId
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