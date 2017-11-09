// console.log('page 1')
var setpage = "page1";

$(window).bind('scroll', function(e) {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  // $('#illustration_1').css('top', (0 - (scrolled * 0.05)) + 'px');
  $('#illustration_3').css('top', (0 - (scrolled * 0.05)) + 'px');
  $('#illustration_4').css('top', (0 - (scrolled * 0.03)) + 'px');
}
