$(document).ready(function(){
    // your jQuery codes will go here
    $("button").click(function(){
    	$("table tbody").append(
    		"<tr><td>"+$("#fn").val()+"</td>"+
    		"<td>"+$("#ln").val()+"</td>"+
    		"<td>"+$("#em").val()+"</td>"+
    		"<td>"+$("#no").val()+"</td></tr>"
    	);
    	$("form").children().val("");
    	return false;
    });
});