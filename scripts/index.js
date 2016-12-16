$(document).ready(function() {
    $("header button").click(function() {
        $("aside video").fadeIn();
        $("aside div").fadeIn();
        $("aside video").get(0).play();
    });
    
    $("aside div").click(function() {
        $("aside video").fadeOut();
        $("aside div").fadeOut();
        $("aside video").get(0).pause();
    });
    
    
    $("article .play").click(function() {
        $("article .play").fadeOut();
        $("article .pause").fadeIn();
        $("audio").trigger('play')
    });
    
    $("article .pause").click(function() {
        $("article .play").fadeIn();
        $("article .pause").fadeOut();
        $("audio").trigger('pause')
    });
});