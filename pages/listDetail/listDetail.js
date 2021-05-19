// pages/listDetail/listDetail.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listname:[],//歌单
    listId:'',//歌单id
    listItem:[],//歌单数据
    List:[],//歌单列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 接收来自list的id
    // console.log(options.listId)
    let listId = options.listId

    // 获取精品歌单详情
    let listItemData = await request('/playlist/detail',{id:listId})
  
    let ListData = listItemData.playlist.tracks
    // console.log(ListData)

    this.setData({
      listItem:listItemData.playlist,
      List:ListData
    })
  },

  // 跳转到songDetail页面
  goSongDetail(event){
    // 把歌曲id传给songDetail
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