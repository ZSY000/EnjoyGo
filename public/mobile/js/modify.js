/**
 * Created by Solin·J on 2019/8/26.
 */
$(function () {
    $("#modify-btn").on('tap', function () {
        var originPassword = $.trim($("[name='originPassword']").val());
        var newPassword = $.trim($("[name='newPassword']").val());
        var comfirmNewPassword = $.trim($("[name='comfirmNewPassword']").val());
        var vcode = $.trim($("[name='vcode']").val());

        if(!originPassword){
            mui.toast('请输入原密码！');
            return;
        }
        if(newPassword!=comfirmNewPassword){
            mui.toast('两次输入的密码不一致！');
        }

        $.ajax({
            url:'',
            type:'post',
            data:{

            },
            success: function (res) {
                //如果修改成功，
                mui.toast('修改成功！');
                setTimeout(function () {
                    location.href = 'login.html';
                },2000);
            }
        })
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