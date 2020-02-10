/**
 * Created by lenovo on 2019/8/24.
 */

var keywords = getParamsFromUrl(location.href,'keywords');//获取搜索关键字
$(function () {
    $.ajax({
        url:'/router/searchResult',//请求地址
        type:'get',
        data:{
            keyword:keywords
        },
        success: function (res) {
            var html = template('search-result',{
                result:res.rows
            });
            $('#searchResult').html(html);

        }
    })
});
