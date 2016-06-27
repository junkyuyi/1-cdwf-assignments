$(document).ready(function(){
    // your jQuery codes will go here


    $("img").click( function(){
        $(this).parent().css("height","104px");
        $(this).parent().css("width","104px");
        $(this).fadeOut();
    });
    $("button").click( function(){
        $("img").fadeIn();
    });
});