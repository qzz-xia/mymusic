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
    let recommendListData = await request('/personalized',{limit:10})
    this.setData({
      recommendList: recommendListData.result
    })

    // 获取排行榜数据
    /**
     * 需求分析：
     *  1.需要根据idx的值获取对应的数据
     *  2.idx的取值范围是0-20
     */
    let index = 0
    let resultArr = []
    while(index < 4){
      index++
      let topListData = await request('/top/list',{idx:index++})
      // splice(会修改原数组，，可以对指定的数组进行增删改) slice(不会修改原数组)
      let topListItem = {name:topListData.playlist.name, tracks:topListData.playlist.tracks.slice(0,21)}
      resultArr.push(topListItem)
      // console.log(resultArr)
      // 不需要等待五次请求全部结束才更新，用户体验好,但是渲染次数会多一些
      this.setData({
        topList: resultArr
      })
    }
    // 更新topList的状态值,放在此处更新会导致发送请求的过程中页面长时间白屏，用户体验差
    // this.setData({
    //   topList: resultArr
    // })

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

  // 跳转到IndexSongDetail
  toIndexSongDetail(event){
    let {song,index} = event.currentTarget.dataset
    // let index = event.currentTarget.dataset.index
    this.setData({
      index
    })
    
    // this.setData({
    //   index
    // })

    // 路由跳转传参：query参数
    wx.navigateTo({
      // 不能直接将song对象作为参数传递，长度过长，会被自动截取掉
      // url: '/pages/indexSongDetail/indexSongDetail?song=' + JSON.stringify(song)
      url: '/pages/indexSongDetail/indexSongDetail?musicId=' + song.id
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