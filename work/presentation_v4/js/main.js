$(document).ready(function(){
    //Высота страницы
    var footerHeight = $('footer').height();
    var containerHeight = $(document).height()-'100';
    $('.container').css({'height':containerHeight});
    $('.cont ul').css({'height':containerHeight});
    $('.footer').css({'margin-top':-footerHeight});

    //Вертикальное выравнивание
    $('.circle p').each(function(){
        var contentHeight = $(this).height();
        $(this).css({"position":"absolute","top":"50%","margin-top":(0-contentHeight/2)});
    });
});
