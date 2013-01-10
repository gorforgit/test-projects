$(document).ready(function(){
    //Высота страницы
    var footerHeight = $('footer').height();
    var containerHeight = $(document).height()-'100';
    $('.container').css({'height':containerHeight});
    $('.cont ul').css({'height':containerHeight});
    $('.footer').css({'margin-top':-footerHeight});
});
