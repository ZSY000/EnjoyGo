/**
 * Created by Solin·J on 2019/8/26.
 */
$(function () {
    var isEdit = Number(getParamsFromUrl(location.href,'isEdit'));
    if(isEdit){//编辑操作
        //获取要编辑的数据
        if(localStorage.getItem('editAddr')){
            var address = JSON.parse(localStorage.getItem('editAddr'));
            var html = template("editTpl",address);
            $('#editForm').html(html);
        }
    }else{
        var html = template("editTpl",{});
        $('#editForm').html(html);
    }

    var picker = new mui.PopPicker({layer:3});
    picker.setData(
        [
            {
                text: '北京市',
                children: [
                    {
                        text: "昌平区",
                        children: [
                            {text: '北七家镇'},
                            {text: '城北街道'},
                            {text: '城南街道'},
                            {text: '崔村镇'},
                        ]
                    },
                    {
                        text: "海淀区",
                        children: [
                            {text: '东升镇'},
                            {text: '万柳镇'},
                            {text: '温泉镇'},
                            {text: '上庄镇'},
                        ]
                    }
                ]
            },
            {
                text: '湖北省',
                children: [
                    {
                        text: "武汉市",
                        children: [
                            {text: '洪山区'},
                            {text: '汉阳区'},
                            {text: '江夏区'},
                            {text: '武昌区'},
                        ]
                    },
                    {
                        text: "咸宁市",
                        children: [
                            {text: '赤壁市'},
                            {text: '通城县'},
                            {text: '咸安区'},
                            {text: '崇阳县'},
                        ]
                    }
                ]
            },

        ]
    );

    $('#selectCity').on('tap', function () {
        picker.show(function (selectItems) {
            $('#selectCity').val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
        });
    });

    $('#confirm-btn').on('tap', function () {
        var username = $("[name = 'username']").val();
        var postCode = $("[name = 'postCode']").val();
        var addr = $("[name = 'addr']").val();
        var addrDetial = $("[name = 'addrDetial']").val();
        if(!username){
            mui.toast('请输入收货人姓名！');
            return;
        }
        if(!postCode){
            mui.toast('请输入邮编！');
            return;
        }
        if(!addr){
            mui.toast('请输入收货地址！');
            return;
        }
        if(!addrDetial){
            mui.toast('请输入详细地址！');
            return;
        }


        if(isEdit){
            //如果是编辑
            url='';
            msg='修改成功！';
            //设置要删除的id
        }else{
            //如果是添加
            url='';
            msg='添加成功！';
        }
        $.ajax({
            url:'',
            type:'post',
            data:{
                
            },
            success: function (res) {
                //如果添加成功
                mui.toast(msg);
                setTimeout(function () {
                    location.href = 'address.html';
                },2000);
            }
        })
    });

});