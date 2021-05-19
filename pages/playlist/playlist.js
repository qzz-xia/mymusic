// pages/playlist/playlist.js
import request from '../../utils/request'
// 获取全局实例
const appInstance = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0, // 点击音乐的下标
    recommendList:[],// 推荐歌单数据
    songListId:'',//歌单id
    songList:'',//歌单数据
    songPic:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 跳转传参，接收index传过来的歌单ID
    let data = options.data
    // console.log('recommendListId=',data)

    // 获取推荐歌单数据

    let songListData = await request('/playlist/detail',{id:data})
    
    // console.log(songListData)
    // console.log(songListData.playlist.tracks)
    // console.log(songListData.playlist.coverImgUrl)
    this.setData({
      songList:songListData.playlist.tracks,
      songPic:songListData.playlist,
      // recommendList: recommendListData.result
    })
  },

  // 跳转到songDetail
  toSongDetail(event){
    let {song, index} = event.currentTarget.dataset

    this.setData({
      index
    })
    // 路由跳转传参： query参数
    wx.navigateTo({
      // 不能直接将song对象作为参数传递，长度过长，会被自动截取掉
      // url: '/pages/songDetail/songDetail?songPackage=' + JSON.stringify(songPackage)
      url: '/pages/songDetail/songDetail?musicId=' + song.id
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