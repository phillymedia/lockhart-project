var _ = require('lodash');
var AOS = require('aos');

$(document).ready(function() {

  
    // if ($(".content").attr("class").includes("is-subscriber")) {
    //     console.log("subscriber")
    //     $(".content").css("padding-top","0")
    // }
    $("body").append('<link href="https://fonts.googleapis.com/css?family=Teko:300,400,700" rel="stylesheet">')
    if ($(".content").attr("class").includes("is-subscriber")) {
        console.log('logged in')
    } else {
        $(".headerIntro").css("padding-top", $(".header").height())
    }
    if ($(window).width() <= 520) {
        var isclicked = false;
        $(".heroNav").on("click", function() {
            if (isclicked == false) {
                $(".parts").css("display", "block");
                setTimeout(function() {
                    $(".parts").addClass("dropDown");
                }, 100);
                isclicked = true;

            } else if (isclicked == true) {
                $(".parts").removeClass("dropDown");
                setTimeout(function() {
                    $(".parts").css("display", "");
                }, 400);
                isclicked = false;
            }
        })
    }

    AOS.init({
        easing: "ease",
        once: "true",
        duration: 2000,
        offset: -50,
        anchor: "center-bottom",
        disable: window.innerWidth < 1000
    });

    var winScrollTop = 0;

    $.fn.is_on_screen = function() {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        //viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        //bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.illustration-absolute').each(function() {

            if ($(this).is_on_screen()) {
                var firstTop = $(this).offset().top;
                var $span = $(this);
                var moveTop = (firstTop - winScrollTop) * 0.2 //speed;
                // $span.css("transform","translateY("+-moveTop+"px)");
                $span.css("top", (moveTop));
            }

        });
    }

    $(window).scroll(function(e) {
        winScrollTop = $(this).scrollTop();
        parallax();
    });




    $(window).scroll(_.throttle(slowscroll, 500));
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
                if (lastScrollTop - st > 120) {
                    $(".header").addClass("scrollIn")
                }
            }
        }

        lastScrollTop = st;

        if ($(window).scrollTop() < $(".byline-section").offset().top + $(window).height() / 2) {
            if ($(".stickynav").length > 0) {
                setTimeout(function() {
                    $(".stickynav").remove();
                }, 1000);
                $(".stickyheader").addClass("stickyOut");
            }

        } else if ($(window).scrollTop() >= $(".byline-section").offset().top + $(window).height() / 2 && $(window).scrollTop() < $(".footerNav").offset().top - $(window).height() * 1.5) {
            if ($(".stickynav").length < 1) {
                $("body").append('<div class="stickynav" id="invnav-rail"><div class="stickyheader">Undercover<br>Gangster</div><div class="menu"><div class="part"><a href="http://www.philly.com/philly/news/crime/philly-undercover-gangster-part-1.html" data-link-type=“invnav-rail”><div class="name">In Their Fathers’ Footsteps</div><div class="pubdate">Nov. 13</div></a></div><div class="part"><a href="http://www.philly.com/philly/news/crime/philly-undercover-gangster-part-2.html" data-link-type=“invnav-rail”><div class="name">Portrait of a Suspect</div><div class="pubdate">Nov. 14</div></a></div><div class="part"><a href="http://www.philly.com/philly/news/crime/philly-undercover-gangster-part-3.html" data-link-type=“invnav-rail”><div class="name">Another Twist, Another Crime</div><div class="pubdate">Nov. 15</div></a></div><div class="part"><a href="http://www.philly.com/philly/news/crime/philly-undercover-gangster-part-4.html" data-link-type=“invnav-rail”><div class="name">Interrogation</div><div class="pubdate">Nov. 16</div></a></div><div class="part"><a href="http://www.philly.com/philly/news/crime/philly-undercover-gangster-part-5.html" data-link-type=“invnav-rail”><div class="name">The Reckoning</div><div class="pubdate">Nov. 17</div></a></div></div></div>')
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
                    }, 500);
                    $(".stickyShow").css("opacity", "");

                }
            );
            // $(".stickynav .part").each(function(){
            //     var $this = $(this);
            //
            //
            //
            // })
            $(".heroNav .part").each(function(){
                getclass = $(this).attr("class");
                    if(getclass.includes("notready")){
                        var getindex = $(this).index()
                        $(".stickynav .part").eq(getindex).addClass("notready")
                    }
            })

        } else if ($(window).scrollTop() >= $(".footerNav").offset().top - $(window).height() * 1.5) {
            if ($(".stickynav").length > 0) {
                setTimeout(function() {
                    $(".stickynav").remove();
                }, 1000);
                $(".stickyheader").addClass("stickyOut");
            }
        }

    }

    $(".heroNav .part").each(function() {
        var $this = $(this);
        if($this.attr("class").includes("notready")) {
            $this.find("a").attr("href","#");
        }
        // $this.find("a").attr("class")

    })


});

$(window).resize(function() {
    if ($(window).width() <= 520) {
        var isclicked = false;
        $(".heroNav").on("click", function() {
            if (isclicked == false) {
                $(".parts").css("display", "block");
                setTimeout(function() {
                    $(".parts").addClass("dropDown");
                }, 100);
                isclicked = true;

            } else if (isclicked == true) {
                $(".parts").removeClass("dropDown");
                setTimeout(function() {
                    $(".parts").css("display", "");
                }, 400);
                isclicked = false;
            }
        })
    }
})
