console.log('page 2')

// $(window).resize(function() {
$(document).ready(function() {

console.log("test " + $('#illustration_3-trigger').offset().top);

    var distance = $('#illustration_3-trigger').offset().top,
      $window = $(window),
      release3 = $("#illustration_3-trigger-release").offset().top;
  if ($(window).width() > 1000) {
    $window.scroll(function() {
      console.log(distance, $window.scrollTop(), release3);
      if ($window.scrollTop() >= distance && $window.scrollTop() <= release3) {
        console.log("fire");
        $('.sticky').fadeIn("slow");
      } else {
        $('.sticky').fadeOut("slow");
      }
    });
  }
});



// });
