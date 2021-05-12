// pages/mv/detail/detail.js
import { get_mv_url, get_mv_detail} from '../../../utils/api/index'
Page({

/**
 * 页面的初始数据
 */
data: {
    mv_url: '',
    artists: '',
    name: '',
    publishTime: '',
    artists: '',
    playCount: '',
    desc: '',
},
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {
    const id = options.id;
    // 获取mv地址
    get_mv_url(id).then(res => {
        let data = res.data;
        if (data.code === 200) {
            this.setData({
                mv_url: data.data.url
            })
        } else {
            console.log('请求mv地址失败');
        }
    })
    // 获取mv详情
    get_mv_detail(id).then(res => {
        if (res.statusCode === 200) {
            let data = res.data.data
            this.setData({
                name: data.name,
                publishTime: data.publishTime,
                desc: data.desc,
                playCount: data.playCount,
                artists: data.artists
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