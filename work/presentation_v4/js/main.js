$(document).ready(function(){
    //Высота страницы
    var footerHeight = $('footer').height();
    var containerHeight = $(document).height()-'100';
    $('.container').css({'height':containerHeight});
    $('.cont ul').css({'height':containerHeight});
    $('.footer').css({'margin-top':-footerHeight});

    //Вертикальное выравнивание текста
    $('p').each(function(){
        var contentHeight = $(this).height();
        $(this).css({"position":"absolute","top":"50%","margin-top":(0-contentHeight/2)});
    });

    //Hide  все слайды после первого
    $(".slide:gt(0)").hide();

    //Форма настроек
    //input type="radio" типа элементов
    $('#input-radio').buttonset();
    
    defaultState();
    //Слайдер количества элементов
    $("input[name=presentation-form]:radio").change(function(){
        if($('#circle').attr("checked")){
        	console.log(1);
     		defaultState();
        } else {
         console.log(2);
            $( "#elements-result" ).html( "1" );
            $( ".elements-slider" ).slider({
                animate: true,
                range: "min",
                value: 1,
                min: 1,
                max: 9,
                step: 1,

                slide: function( event, ui ) {
                    $( "#elements-result" ).html( ui.value );
                },

                change: function(event, ui) {
                    $('#elements-numb').attr('value', ui.value);
                }
            });
        }
    });
    function defaultState(){
        $( "#elements-result" ).html( "1" );
        $("#elements-numb").attr("value",1);
        $( ".elements-slider" ).slider({
            animate: true,
            range: "min",
            value: 1,
            min: 1,
            max: 6,
            step: 1,

            slide: function( event, ui ) {
                $( "#elements-result" ).html( ui.value );
            },

            change: function( event, ui ) {
                $('#elements-numb').attr('value', ui.value);
            }
        });
    }
    //Слайдер скорости анимации
    $("#duration-time").html("0.7");
    $("#duration-numb").attr("value",0.7);
    $('.duration-slider').slider({
        animate: true,
        range: "min",
        value: 0.7,
        min: 0.1,
        max: 2.9,
        step: 0.1,

        slide: function( event,ui ){
            $('#duration-time').html( ui.value );
        },

        change: function( event, ui){
            $('#duration-numb').attr('value',ui.value);
        }
    });
    //input[type="submit"] Apply
    $("#apply").button().click(function(){
        var inputChecked = $("#circle");
        var numbElements = parseInt($("#elements-numb").attr("value"));
        var animateDuration = parseFloat($("#duration-numb").attr("value"));
		console.log("click");
        if(inputChecked.is(":checked")){
       		console.log("checked");
            switch(numbElements){
                case 1:
                	console.log("show1");
                    $(".slide").hide();
                    $(".one-column .circle").css({"-webkit-animation-duration":animateDuration+'s'});
                    if ($(".one-column").is(":visible")){
                        var el = $(".one-column");
                        el.before( el.clone(true) ).remove();
                    } else {
                        $(".one-column").show();
                    }
                    break;

                case 2:
                    console.log("show2");
                    $(".slide").hide();
                    $(".two-column .circle").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<2;i++){
                        $(".two-column .circle:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".two-column").is(":visible")){
                        var el = $(".two-column");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".two-column").show();
                    }
                    break;

                case 3:
                    console.log("show3");
                    $(".slide").hide();
                    $(".three-column .circle").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<3;i++){
                        $(".three-column .circle:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".three-column").is(":visible")){
                        var el = $(".three-column");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".three-column").show();
                    }
                    break;

                case 4:
                    console.log("show4");
                    $(".slide").hide();
                    $(".four-column .circle").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<4;i++){
                        $(".four-column .circle:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".four-column").is(":visible")){
                        var el = $(".four-column");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".four-column").show();
                    }
                    break;

                case 5:
                    console.log("show5");
                    $(".slide").hide();
                    $(".five-column .circle").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<5;i++){
                        $(".five-column .circle:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".five-column").is(":visible")){
                        var el = $(".five-column");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".five-column").show();
                    }
                    break;

                case 6:
                	console.log("show6");
                    $(".slide").hide();
                    $(".six-column .circle").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<6;i++){
                        $(".six-column .circle:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".six-column").is(":visible")){
                        var el = $(".six-column");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".six-column").show();
                    }
                    break;
            }
        }else{
       		console.log("unchecked");
            switch(numbElements){
                case 1:
                    console.log("show-rect1");
                    $(".slide").hide();
                    $(".one-rect .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    if ($(".one-rect").is(":visible")){
                        var el = $(".one-rect");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".one-rect").show();
                    }
                    break;

                case 2:
                    console.log("show-rect2");
                    $(".slide").hide();
                    $(".two-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<2;i++){
                        $(".two-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".two-rects").is(":visible")){
                        var el = $(".two-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".two-rects").show();
                    }
                    break;

                case 3:
                    console.log("show-rect3");
                    $(".slide").hide();
                    $(".three-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<3;i++){
                        $(".three-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".three-rects").is(":visible")){
                        var el = $(".three-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".three-rects").show();
                    }
                    break;

                case 4:
                    console.log("show-rect4");
                    $(".slide").hide();
                    $(".four-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<4;i++){
                        $(".four-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".four-rects").is(":visible")){
                        var el = $(".four-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".four-rects").show();
                    }
                    break;

                case 5:
                    console.log("show-rect5");
                    $(".slide").hide();
                    $(".five-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<5;i++){
                        $(".five-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".five-rects").is(":visible")){
                        var el =$(".five-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".five-rects").show();
                    }
                    break;

                case 6:
                    console.log("show-rect6");
                    $(".slide").hide();
                    $(".six-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<6;i++){
                        $(".six-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".six-rects").is(":visible")){
                        var el =$(".six-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".six-rects").show();
                    }
                    break;

                case 7:
                    console.log("show-rect7");
                    $(".slide").hide();
                    $(".seven-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<7;i++){
                        $(".seven-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".seven-rects").is(":visible")){
                        var el =$(".seven-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".seven-rects").show();
                    }
                    break;

                case 8:
                    console.log("show-rect8");
                    $(".slide").hide();
                    $(".eight-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<8;i++){
                        $(".eight-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".eight-rects").is(":visible")){
                        var el =$(".eight-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".eight-rects").show();
                    }
                    break;

                case 9:
                	console.log("show-rect9");
                    $(".slide").hide();
                    $(".nine-rects .rect").css({"-webkit-animation-duration":animateDuration+'s'});
                    for(i=0;i<9;i++){
                        $(".nine-rects .rect:eq("+i+")").css({"-webkit-animation-delay":animateDuration*i+'s'});
                    }
                    if ($(".nine-rects").is(":visible")){
                        var el = $(".nine-rects");
                        el.before( el.clone(true)).remove();
                    }else{
                        $(".nine-rects").show();
                    }
                    break;
            }
        }
        return false;
    });
});
