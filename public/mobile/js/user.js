/**
 * Created by lenovo on 2019/8/24.
 */
var userInfo = null;    //将用户信息存起来


//显示用户信息
$.ajax({
    url:'',
    type:'get',
    async:false,//改成同步请求
    success: function (res) {
        if(res.error &&res.error == 400){//如果用户没有登录
            location.href = 'login.html';
        }
        userInfo = res;
    }
});

$(function () {
    //退出登录
    $('#logout').on('click', function () {
        $.ajax({
            url:'',
            type:'get',
            success: function (res) {
                if(res.success){
                    mui.toast('退出登录成功！')
                    setTimeout(function () {
                        location.href = 'index.html';
                    },2000);
                }
            }
        })
    });

    var html = template('userInfo',userInfo);
    $('#user').html = html;
});