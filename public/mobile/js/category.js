/**
 * Created by Solin.
 */

$(function () {

    mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005
    });

    $.ajax({
        url:'/router/category',
        success: function (res) {
            var html = template('category-first',{
                result:res.rows
            });
            $('#links').html(html);
            if(res.rows.length){
                var id = res.rows[0].id;
                // 给第一个一级分类添加选中状态
                $('#links').find('a').eq(0).addClass('active');
                getSecond(id)
            }
        },
        error: function () {
            console.log('error');
        }
    });

    $('#links').on('click','a', function () {
        var id = $(this).attr('data-id');
        getSecond(id)
        // 给被点击一级分类按钮添加样式
        $(this).addClass('active').siblings().removeClass('active')
    });
});

// 根据一级分类获取二级分类数据
function getSecond(id){
    $.ajax({
        url:'/router/secondCategory',
        type:'get',
        data:{
            id:id
        },
        success: function (res) {
            var html = template('second',{
                result:res
            });
            $('#secondCategory').html(html);
        }
    });
}
