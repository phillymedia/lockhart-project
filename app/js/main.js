var _ = require('lodash');

$(document).ready(function() {
    // if ($(".content").attr("class").includes("is-subscriber")) {
    //     console.log("subscriber")
    //     $(".content").css("padding-top","0")
    // }
    if ($(window).width() <= 520) {
        console.log($(window).width())
        $(".heroNav").hover(
            function() {
                $(".parts").css("display", "block");
                setTimeout(function() {
                    $(".parts").addClass("dropDown");
                }, 100);
            },
            function() {
                $(".parts").removeClass("dropDown");
                setTimeout(function() {
                    $(".parts").css("display", "");
                }, 400);
            }
        );
    }
});


$(window).scroll(_.throttle(slowscroll, 100));
var lastScrollTop = 0;

function slowscroll() {
    var st = $(this).scrollTop();
    if ($(window).scrollTop() > $(window).height()) {
        if (st > lastScrollTop) {
            if ($(".header").attr("class").includes("scrollIn")) {
                $(".header").addClass('scrollOut');
                setTimeout(function() {
                    $(".header").removeClass("scrollIn").removeClass('scrollOut');
                }, 500);
            }
        } else {
                $(".header").addClass("scrollIn")
        }
    }
    lastScrollTop = st;


    if($(".subHead").offset().top <= $(window).scrollTop()){
        if($(".stickynav").length <1) {
            $("body").append("<div class='stickynav'></div>")
        }

    }
}
