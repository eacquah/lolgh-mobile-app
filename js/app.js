// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
    //Enable swiping...
    $(".display-comic").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).text("You swiped " + direction );
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
    });
});