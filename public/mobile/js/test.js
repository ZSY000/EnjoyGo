$(function () {
    $('#btn').on('tap', function () {
        $.ajax({
            url:'',
            success: function (res) {
                console.log(res);
            }
        })
    })
});