var _ = require('lodash');
var AOS = require('aos');

$(document).ready(function() {
    // if ($(".content").attr("class").includes("is-subscriber")) {
    //     console.log("subscriber")
    //     $(".content").css("padding-top","0")
    // }
    $(window).trigger('resize');

    AOS.init({

        easing: "ease",
        once: "true",
        duration: 2000,
        offset:-50,
        anchor: "center-bottom",
        disable: 'mobile'
      });


    $(window).bind('scroll', function(e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('.illustration-wrapper').css('top', (0 - (scrolled * .1)) + 'px');
    }
});

$(window).resize(function(){
    if ($(window).width() <= 520) {
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
})


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

console.log($(".footerNav").offset().top - $(window).height()/2, $(window).scrollTop())
    if ($(".subHead").offset().top + $(window).height()/2 <= $(window).scrollTop() || $(".footerNav").offset().top - $(window).height()/2  < $(window).scrollTop()) {
        if ($(".stickynav").length < 1) {
            $("body").append('<div class="stickynav"><div class="stickyheader">Undercover<br>Gangster</div><div class="menu"><div class="part"><div class="name">In Their Fathers’ Footsteps</div><div class="pubdate">Nov. 13</div></div><div class="part notready"><div class="name">Portrait of a Suspect</div><div class="pubdate">Nov. 14</div></div><div class="part notready"><div class="name">Another Twist, Another Crime</div><div class="pubdate">Nov. 15</div></div><div class="part notready"><div class="name">Interrogation</div><div class="pubdate">Nov. 16</div></div><div class="part notready"><div class="name">The Reckoning</div><div class="pubdate">Nov. 17</div></div></div></div>')
        }
        $(".stickynav").hover(
            function() {
                $(this).find(".menu").addClass("stickyShow");
                setTimeout(function() {
                    $(".stickyShow").css("opacity", "1");
                }, 100);

            },
            function() {
                setTimeout(function() {
                    $(".stickyShow").removeClass("stickyShow");
                }, 100);
                $(".stickyShow").css("opacity", "");

            }
        );
    } else {
        $(".stickynav").remove();

    }
}
