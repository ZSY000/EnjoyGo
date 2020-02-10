/**
 * Created by Solin·J on 2019/8/26.
 */
$(function () {
    var leftNum = 30;//库存数量
    var size = null;
    var id = getParamsFromUrl(location.href,'id');
    //$.ajax({
    //    url:'',
    //    type:'get',
    //    data:{
    //
    //    },
    //    success: function (res) {
    //        var html = template("detailTpl",res);
    //
    //        //获得slider插件对象
    //        var gallery = mui('.mui-slider');
    //        gallery.slider({
    //            interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    //        });
    //    }
    //})

    $('#box').on('tap','.size span', function () {
        $(this).addClass('active').siblings('span').removeClass('active');
        size = $(this).html();
    });

    $('.plus').on('tap', function () {
        var count = Number($('.count').html());
        $('.count').html(count>leftNum-1?leftNum:++count);
    });
    $('.minus').on('tap', function () {
        var count = Number($('.count').html());
        $('.count').html(count<1?1:--count);
    });

    //加入购物车
    $('.addToCart').on('tap', function () {
        if(!size){
            mui.toast('请选择尺码！');
            return;
        }
        $.ajax({
            url:'',
            type:'get',
            data:{
                
            },
            success: function (res) {
                //加入购物车成功
                if(res.success){
                    mui.confirm('加入购物车成功，是否跳转到购物车？','温馨提示', function (message) {
                        if(message.index==1){
                            //跳转到购物车
                            location.href = 'cart.html';
                        }
                    })
                }
            }
        });
        location.href = 'cart.html';
    })
});