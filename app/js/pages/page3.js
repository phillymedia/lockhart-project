console.log('page 3')

$(document).ready(function() {

    var distance_1 = $('#illustration_1-trigger').offset().top,
    distance_3 = $('#illustration_3-trigger').offset().top,
    distance_5 = $('#illustration_5-trigger').offset().top,
      $window = $(window),
      release_1 = $("#illustration_1-trigger-release").offset().top,
      release_3 = $("#illustration_3-trigger-release").offset().top,
      release_5 = $("#illustration_5-trigger-release").offset().top;
  if ($(window).width() > 1000) {
    $window.scroll(function() {
      if ($window.scrollTop() >= distance_1 && $window.scrollTop() <= release_1) {
        $('#illustration_1').fadeIn("slow");
      } else {
        $('#illustration_1').fadeOut("slow");
      }

      if ($window.scrollTop() >= distance_3 && $window.scrollTop() <= release_3) {
        $('#illustration_3').fadeIn("slow");
      } else {
        $('#illustration_3').fadeOut("slow");
      }

      if ($window.scrollTop() >= distance_5 && $window.scrollTop() <= release_5) {
        $('#illustration_5').fadeIn("slow");
      } else {
        $('#illustration_5').fadeOut("slow");
      }
    });
  }
});
