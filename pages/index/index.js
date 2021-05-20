import request from '../../utils/request'
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],// 轮播图数据
    recommendList:[],// 推荐歌单数据
    topList:[],// 排行榜数据
    index: 0, // 点击音乐的下标
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取轮播图数据
    let bannerListData = await request('/banner',{type:3})
    // console.log('结果数据', result)
    this.setData({
      bannerList: bannerListData.banners
    })

    // 获取推荐歌单数据
    let recommendListData = await request('/personalized',{limit:20})
    // console.log(recommendListData)
    this.setData({
      recommendList: recommendListData.result
    })

    // 获取排行榜数据
    // idx的取值范围是0-20
    let idx = 0
    let resultArr = []
    while(idx < 10){
      idx++
      let topListData = await request('/top/list',{idx:idx++})
      // console.log(idx)
      // splice(会修改原数组，，可以对指定的数组进行增删改) slice(不会修改原数组)
      let topListItem = {name:topListData.playlist.name, tracks:topListData.playlist.tracks.slice(0,20)}

      resultArr.push(topListItem)
      // console.log(resultArr)

      this.setData({
        topList: resultArr
      })

    }
    // this.setData({
    //   topList: resultArr
    // })

   
  },

  // 跳转到dj页面
  goDj(){
    wx.navigateTo({
      url: '/pages/dj/index/index'
    })
  },

  // 跳转到list页面
  goList(){
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },

   // 跳转至playlist页面
  goPlayList(event){
    // 跳转传参，传歌单ID给playlist
    
    // console.log(event.currentTarget.dataset.id)
    let recommendListId = event.currentTarget.dataset.id
    // console.log(recommendListId)
    
    wx.navigateTo({
      url: '/pages/playlist/playlist?data=' + recommendListId
    })
  },

  // 跳转至recommendSong页面
  toRecommendSong(){
    wx.navigateTo({
      url: '/pages/recommendSong/recommendSong'
    })
  },

  // 跳转到search界面
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  // 跳转到mv
  goMv(){
    wx.navigateTo({
      url: '/pages/mv/recommend/recommend'
    })
  },

  // 跳转到songDetail
  toSongDetail(event){
    let {song,index} = event.currentTarget.dataset
    // let index = event.currentTarget.dataset.index
    this.setData({
      index
    })

    // 路由跳转传参：query参数
    wx.navigateTo({
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