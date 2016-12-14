$(document).ready(function() {
    $("nav .open").click(function() {
        $("nav").attr('id', 'toggle');
        $("nav .open").fadeOut();
        $("nav .close").fadeIn();
    });
    
    $("nav .close").click(function() {
        $("nav").attr('id', '');
        $("nav .open").fadeIn();
        $("nav .close").fadeOut();
    });
});