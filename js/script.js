$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });
});

$(document).ready(function(){
    $("nav > ul > li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});