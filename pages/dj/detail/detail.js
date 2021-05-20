// pages/dj/detail/detail.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],//推荐电台
    djList:[],//电台列表
    audioList:[]//音频
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 跳转传参，接收index传过来的id
    // console.log(options.recommendId)
    let recommendId = options.recommendId
    // 推荐详情
    let detailListData = await request('/dj/detail',{rid:recommendId})
    // console.log(detailListData)

    // 电台列表
    let djListData = await request('/dj/program',{rid:recommendId})
    // console.log(djListData)

    this.setData({
      detailList:detailListData.djRadio,
      djList:djListData.programs
    })
  },

  // 列表音频
  async getAudio(event){
    // console.log(event.currentTarget.dataset.id)
    let audioId = event.currentTarget.dataset.id
    let audioListData = await request('/song/url',{id:audioId})
    // console.log(audioListData)
    // console.log(audioListData.data[0].url)
    this.setData({
      audioList:audioListData.data[0]
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