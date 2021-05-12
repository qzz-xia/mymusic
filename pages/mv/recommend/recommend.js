// pages/mv/recommend/recommend.js
import { get_mv_recommend} from '../../../utils/api/index'
Page({

/**
 * 页面的初始数据
 */
data: {
    list: [],
    limit: 30,
    offset: 0,
    count: null
},

/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {
    get_mv_recommend(this.data.limit).then(res => {
        let data = res.data
        // console.log(data)
        if (data.code = 200) {
            let list = data.data;
            this.setData({
                list: list,
                count: data.count,
                offset:list.length
            })
        }
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