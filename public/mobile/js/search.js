
$(function () {
    var keyArr = [];//存放关键字
    //点击搜索按钮，将搜索关键字存储在localStorage中
    $('#search-btn').on('click', function () {
        var keywords = $(this).siblings('input').val();//获取关键字
        if(keywords){
            keyArr.push(keywords);
            localStorage.setItem('keyArr',JSON.stringify(keyArr));//localStorage只能存储json类型数据
            location.href='search-result.html?keywords='+keywords;//跳转到搜索结果页面
        }else{
            mui.toast('请输入关键字');
        }
    })

    //在搜索历史列表显示所有的搜索结果
    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template('search-result',{
            result:keyArr
        });
        $('#history-list').html(html);
    }

    //点击清空历史
    $('#clear-btn').on('click', function () {
        $('#history-list').html("");
        localStorage.removeItem('keyArr');
    })
});


