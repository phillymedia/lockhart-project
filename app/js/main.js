var AOS = require('aos');

$(document).ready(function() {
  AOS.init({
    offset: 50,
    easing: "ease"
  });


  $(window).bind('scroll', function(e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.illustration-wrapper').css('top', (0 - (scrolled * .1)) + 'px');
  }








  // if ($(".content").attr("class").includes("is-subscriber")) {
  //     console.log("subscriber")
  //     $(".content").css("padding-top","0")
  // }
});
console.log("working")

$('body').on('mousewheel DOMMouseScroll', function(e) {
    if($(window).scrollTop() > $(window).height()) {
        if (typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
            if (e.originalEvent.detail > 25) {
                $(".header").addClass("scrollIn")
            } else if (e.originalEvent.detail < -25) {
                if($(".header").attr("class").includes("scrollIn")) {
                    $(".header").addClass('scrollOut');
                    setTimeout(function() {
                        $(".header").removeClass("scrollIn").removeClass('scrollOut');
                    }, 500);
                }
            }
        } else if (typeof e.originalEvent.wheelDelta == 'number') {

            if (e.originalEvent.wheelDelta > 25) {
                $(".header").addClass("scrollIn")
            } else if (e.originalEvent.wheelDelta < -25) {
                if($(".header").attr("class").includes("scrollIn")) {
                    $(".header").addClass('scrollOut');


    if($(".subHead").offset().top <= $(window).scrollTop()){
        if($(".stickynav").length <1) {
            $("body").append('<div class="stickynav"><div class="stickyheader">Undercover<br>Gangster</div><div class="menu"><div class="part"><div class="name">In Their Fathers’ Footsteps</div><div class="pubdate">Nov. 13</div></div><div class="part notready"><div class="name">Portrait of a Suspect</div><div class="pubdate">Nov. 14</div></div><div class="part notready"><div class="name">Another Twist, Another Crime</div><div class="pubdate">Nov. 15</div></div><div class="part notready"><div class="name">Interrogation</div><div class="pubdate">Nov. 16</div></div><div class="part notready"><div class="name">The Reckoning</div><div class="pubdate">Nov. 17</div></div></div></div>')
        }
        $( ".stickynav" ).hover(
          function() {
              $(this).find(".menu").css("display","block");
            $(this).find(".menu").addClass("scrollIn");

          }, function() {
              // $(this).find(".menu").removeClass("stickyshow");
            // $( this ).find( "span:last" ).remove();
          }
        );

    }

});
