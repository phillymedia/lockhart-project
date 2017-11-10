console.log('page 2')

$(document).ready(function() {
    // $(window).resize(function() {
    if ($(window).width() > 1000) {
        var distance = $('#illustration_3-trigger').offset().top,
            $window = $(window),
            release3 = $("#illustration_3-trigger-release").offset().top;
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
