$(document).ready(function(){
    // your jQuery codes will go here
    $("img").click( function(){
    	var temp = $(this).attr("alt-img-src");
        $(this).attr("alt-img-src", $(this).attr("src"));   
        $(this).attr("src", temp); 
    });
});