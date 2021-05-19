// pages/mv/detail/detail.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvUrl:'',//mv视屏
        mvList:'',//mv详情
        simiMvList:'',//相似mv
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
         // 跳转传参，接收recommend传过来的mvID
        let data = options.data
        // console.log('mvid=',data)
        // 获取mv视屏
        let mvUrlData = await request('/mv/url',{id:data})
        // 获取mv详情
        let mvListData = await request('/mv/detail',{mvid:data})
        // console.log(mvListData)

        // 获取相似mv
        let simiListData = await request('/simi/mv',{mvid:data})
        // console.log(simiListData)

        this.setData({
            mvUrl:mvUrlData.data,
            mvList:mvListData.data,
            simiList:simiListData.mvs
        })
    },

    // 跳转detail
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