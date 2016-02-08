$(document).ready(function(){
    var enable = 1;
    var img = 0;
    var len = $('.gallery').length;
    
    $('#forward').click(function(){
        if (enable == 1){
            enable = 0;
            go(1);
        }
        return;
    });
    
    $('#backward').click(function(){
        if (enable == 1){
            enable = 0;
            go(-1);
        }
        return;   
    });
    
    function go(forward){
        $('.gallery').eq(img).fadeToggle(400,'swing',function(){
            img = img + forward;
            img = img % len;
            console.log(img);
            $('.gallery').eq(img).fadeToggle(400,'swing',function(){
                enable = 1;
            });
        });
    }
});