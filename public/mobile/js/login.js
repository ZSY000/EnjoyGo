/**
 * Created by lenovo on 2019/8/24.
 */
$(function () {

    $('#login-btn').on('click', function () {
        var username = $.trim( $('[name="username"]').val());
        var password = $.trim($("[name='password']").val());

        if(!username){
            mui.toast('请输入用户名！');
            return;
        }
        if(!password){
            mui.toast('请输入密码！');
            return;
        }

        $.ajax({
            url:'',
            type:'post',
            data:{
                username:username,
                password:password
            },
            beforeSend: function () {
                $('#login-btn').html('正在登录...');
            },
            success: function (res) {
                $('#login-btn').html('登录');
                mui.toast('登录成功！');
                setTimeout(function () {
                    location.href = 'user.html';
                },2000);
            }
        });
    });
});