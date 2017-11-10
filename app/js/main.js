var _ = require('lodash');
var AOS = require('aos');

$(document).ready(function() {

  // if ($(".content").attr("class").includes("is-subscriber")) {
  //     console.log("subscriber")
  //     $(".content").css("padding-top","0")
  // }
  if ($(".content").attr("class").includes("is-subscriber")) {
    console.log('logged in')
  } else {
    $(".headerIntro").css("padding-top", $(".header").height())
  }
  if ($(window).width() <= 520) {
    var isclicked = false;
    $(".heroNav").on("click", function() {
      console.log(isclicked)
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
    disable: 'mobile'
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
    $('.illustration-wrapper').each(function() {

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
  }
  lastScrollTop = st;


  // console.log($(".footerNav").offset().top - $(window).height()*1.5, $(window).scrollTop())
  if ($(".byline-section").offset().top + $(window).height() / 2 <= $(window).scrollTop() && $(".footerNav").offset().top - $(window).height() * 1.5 > $(window).scrollTop()) {

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

    setTimeout(function() {
      $(".stickynav").remove();
    }, 1000);
    $(".stickyheader").addClass("stickyOut");

  }
}


    $(window).scroll(_.throttle(slowscroll, 800));
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
                if(lastScrollTop - st > 120) {
                $(".header").addClass("scrollIn")
                }
            }
        }
        lastScrollTop = st;

        if ($(".byline-section").offset().top + $(window).height() / 2 < $(window).scrollTop() && $(".footerNav").offset().top - $(window).height() * 1.5 > $(window).scrollTop()) {
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
                    }, 500);
                    $(".stickyShow").css("opacity", "");

                }
            );
        } else {
            setTimeout(function() {
                $(".stickynav").remove();
            }, 1000);
            $(".stickyheader").addClass("stickyOut");

        }
    }
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
