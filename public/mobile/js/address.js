/**
 * Created by Solin·J on 2019/8/26.
 */
//var address = null;//存储地址
$(function () {

    //$.ajax({
    //    url:'',
    //    type:'get',
    //    success:function(res){
    //        address = res;
    //        var html = template("addressList",{
    //            result:res
    //        });
    //        $("#list").html(html);
    //    }
    //})


    //删除
    $("#list").on('tap','.del-btn', function () {
        var id = this.getAttribute('data-id');//获取要删除的a的id
        var li = this.parentNode.parentNode;//获取对应的li
        mui.confirm('确定要删除吗？','提示', function (message) {
            if(message.index==1){
                //确认删除
                $.ajax({
                    url:'',
                    type:'post',
                    data:{
                        //id:id   //列表id
                    },
                    success: function (res) {
                        //如果删除成功，重新加载页面
                        location.reload();
                    }
                })
            }else if(message.index == 0){
                //取消删除
                mui.swipeoutClose(li);
            }

        });
    });

    //编辑
    $("#list").on('tap','.edit-btn', function () {
        //var id = this.getAttribute('data-id');//获取要编辑的a的id
        //for(var i = 0; i<address.length;i++){
        //    if(address[i].id = id){
        //        localStorage.setItem('editAddr',JSON.stringify(address[i]));
        //        break;
        //    }
        //}

        //跳转到添加收货地址
        location.href = 'addAddr.html?idEdit=1';
    })
});