/**
 * Created by lenovo on 2019/8/24.
 */

var keywords = getParamsFromUrl(location.href,'keywords');//��ȡ�����ؼ���
$(function () {
    $.ajax({
        url:'/router/searchResult',//�����ַ
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
