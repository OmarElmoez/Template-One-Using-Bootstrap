$(document).ready(function(){
    $('html').niceScroll();

    $(".gear-check").click(function(){
        $(".color-option").fadeToggle();
    });

    //Change the color of li
    var colorLi = $(".color-option ul li i");

    colorLi
    .eq(0).css("color","#fb7c66").end()
    .eq(1).css("color","#0895D1").end()
    .eq(2).css("color","#60c819").end()
    .eq(3).css("color","#dd950f");

    colorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        //console.log($(this).attr("data-value"));
    });

    var scrollButton = $(".arrow-up");

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 1000) {
            scrollButton.show();
        }
        else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){
        $('html,body').animate({scrollTop: 0}, 600);
    });
});