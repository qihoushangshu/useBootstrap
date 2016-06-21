/**
 * Created by Administrator on 2016/6/20.
 */

var pre = null;
var index = null;
function setColor(flag) {
    if('pre' == flag){
        pre = true;
    }else {
        pre = false;
    }
}
function slideIndex(obj) {
    if('0'==obj){
        index = '0'
    }else if('1' == obj){
        index = '1';
    }else{
        index = '2';
    }
}
$(function(){
    $('#myCarousel').on('slide.bs.carousel', function () {
        var color = $('#ab').css('background-color');
        var c1 = 'rgba(3, 169, 244, 0.960784)';
        var c2 = 'rgb(139, 195, 74)';
        var c3 = 'rgb(136, 130, 130)';
        var c4 = 'rgba(3, 169, 244, 0.96)';
        if(pre != null){
            if (pre == true){
                if(c1 == color || c4 == color){
                    $('#ab').css({'background-color':c3});
                }else if(c3==color){
                    $('#ab').css('background-color',c2);
                }else if(c2==color){
                    $('#ab').css('background-color',c1);
                }
            }else{
                if(c1 == color || c4 == color){
                    $('#ab').css('background-color',c2);
                }else if(c2==color){
                    $('#ab').css('background-color',c3);
                }else if(c3==color){
                    $('#ab').css('background-color',c1);
                }
            }
            pre = null;
        }else{
            if(index != null){
                if('0'==index){
                    $('#ab').css('background-color',c1);
                }else if('1'==index){
                    $('#ab').css('background-color',c2);
                }else {
                    $('#ab').css('background-color',c3);
                }
            }else{
                if(c1 == color || c4 == color){
                    $('#ab').css('background-color',c2);
                }else if(c2==color){
                    $('#ab').css('background-color',c3);
                }else if(c3==color){
                    $('#ab').css('background-color',c1);
                }
            }
        }
    });
});