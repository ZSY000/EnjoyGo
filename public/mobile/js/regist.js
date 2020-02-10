/**
 * Created by lenovo on 2019/8/24.
 */
$(function () {
    $('#regist-btn').on('click', function () {
        var username = $('[name="username"]').val();
        var telephone = $('[name="telephone"]').val();
        var password = $('[name="password"]').val();
        var passwordAgain = $('[name="passwordAgain"]').val();
        var vcode = $('[name="vcode"]').val();
        if(!username){
            mui.toast('请输入用户名！');
            return;
        }
        if(!telephone||telephone.length<11){
            mui.toast('请输入正确的手机号！');
            return;
        }
        if(password!=passwordAgain){
            mui.toast('两次输入的密码不一致，请重新输入！');
            return;
        }
        if(vcode.length!=6){
            mui.toast('请输入正确的验证码！');
            return;
        }
        
        $.ajax({
            url:'',
            type:'post',
            data:{
                username:username,
                telephone:telephone,
                password:password,
                passwordAgain:passwordAgain,
                vcode:vcode
            },
            success: function () {
                mui.toast('注册成功！');
                setTimeout(function () {
                    location.href = 'login.html';
                },2000);
            }
        });

    });
    //获取验证码
    $("#getVcode").on('click',function(){
        $.ajax({
            url:'',
            type:'get',
            success: function (res) {
                console.log(res);
            }
        })
    });
});