$(document).ready(function(){
    //Высота страницы
    var footerHeight = $('footer').height();
    var containerHeight = $(document).height()-'100';
    $('.cont').css({'height':containerHeight});
    $('.cont ul').css({'height':containerHeight});
    $('.footer').css({'margin-top':-footerHeight});

    //Расположение блоков
    var elementCount = document.getElementsByClassName('content-block').length;

    switch(elementCount) {
        case 6:
            $(".content-block:eq(0)").css({"margin-top":"-395px", "margin-left":"-125px"});
            $(".content-block:eq(1)").css({"margin-top":"-235px", "margin-left":"130px"});
            $(".content-block:eq(2)").css({"margin-top":"95px", "margin-left":"54px"});
            $(".content-block:eq(3)").css({"margin-top":"95px", "margin-left":"-308px"});
            $(".content-block:eq(4)").css({"margin-top":"-235px", "margin-left":"-380px"});
            $(".content-block:eq(5)").css({"margin-top":"-118px", "margin-left":"-125px"});
            break;
        case  1:
            $(".content-block:eq(0)").css({"margin-top":"-145px", "margin-left":"-145px"});
            break;
    }
});
