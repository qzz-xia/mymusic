// pages/singer/detail/detail.js
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singerPic:[],//歌手图片
    songList:[],//歌曲列表s
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log(options)
    // console.log(options.singerId)
    let singerId = options.singerId
    // 将index页面传来的singerPic解码，
    let singerPic = JSON.parse(decodeURIComponent(options.singerPic))

    // 获取歌手歌手热门50首歌曲
    let songListData = await request('/artist/top/song',{id:singerId})
    // console.log(songListData.songs[0].ar[0].name)
    this.setData({
      songList:songListData.songs,
      singerPic
    })
  },

  // 跳转到songDetail
  goSongDetail(event){
    // console.log(event.currentTarget.dataset.id)
    let musicId = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/songDetail/songDetail?musicId=' + musicId
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