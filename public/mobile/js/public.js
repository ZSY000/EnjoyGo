
$(function () {
    mui('body').on('tap','a',function(){
        document.location.href=this.href;
    });
});

function getParamsFromUrl(url,name){
    var params = url.substr(url.indexOf('?')+1);
    var param = params.split('&');
    for(var i = 0;i<param.length;i++){
        var p = param[i].split('=');
        if(p[0]==name){
            return p[1];
        }
        return null;
    }
}