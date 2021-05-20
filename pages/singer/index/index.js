// pages/singer/index/index.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singerList:[],//歌手列表
    singerPic:[],//点击歌手的图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取歌手列表
    this.getSingerList()
  },

  // 获取歌手列表
  async getSingerList(){
    let singerListData = await request('/artist/list',{limit:100})
    // console.log(singerListData)
    this.setData({
      singerList:singerListData.artists
    })
  },

  // 跳转到detail
  goDetail(event){
    // console.log(event)
    let singerId = event.currentTarget.dataset.id
    // 微信小程序 wx.navigateTo传参，参数过长被截取
    // 跳转时参数先编码，到第二个页面再解码 
    let singerPic = encodeURIComponent(JSON.stringify(event.currentTarget.dataset.pic))
  
    wx.navigateTo({
      url: '/pages/singer/detail/detail?singerId=' + singerId + "&singerPic=" + singerPic
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