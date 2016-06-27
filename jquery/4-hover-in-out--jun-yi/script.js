$(document).ready(function(){
    // your jQuery codes will go here
    $("img").hover(
    	function(){
    		var temp = $(this).attr("alt-img-src");
	        $(this).attr("alt-img-src", $(this).attr("src"));   
	        $(this).attr("src", temp); 
    	},
    	function(){
    		var temp = $(this).attr("alt-img-src");
	        $(this).attr("alt-img-src", $(this).attr("src"));   
	        $(this).attr("src", temp); 
    	}
    );
});