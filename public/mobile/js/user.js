/**
 * Created by lenovo on 2019/8/24.
 */
var userInfo = null;    //���û���Ϣ������


//��ʾ�û���Ϣ
$.ajax({
    url:'',
    type:'get',
    async:false,//�ĳ�ͬ������
    success: function (res) {
        if(res.error &&res.error == 400){//����û�û�е�¼
            location.href = 'login.html';
        }
        userInfo = res;
    }
});

$(function () {
    //�˳���¼
    $('#logout').on('click', function () {
        $.ajax({
            url:'',
            type:'get',
            success: function (res) {
                if(res.success){
                    mui.toast('�˳���¼�ɹ���')
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