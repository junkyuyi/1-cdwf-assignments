$(document).ready(function(){
    // your jQuery codes will go here
    var contactNum = 0;
    $("button").click(function(){
    	$("#card").append("<div class=cc-front id=contact-"+contactNum+"></div>");
    	$("#contact-"+contactNum).attr("fn",$("#first-name").val());
    	$("#contact-"+contactNum).attr("ln",$("#last-name").val());
    	$("#contact-"+contactNum).attr("desc",$("#description").val());
		$("#contact-"+contactNum).append("<h3>"+$("#first-name").val()+" "+$("#last-name").val()+"</h3>"
			+"<p>click for description</p>");
		$("#first-name").val("");
		$("#last-name").val("");
		$("#description").val("");
    	contactNum++;

    });

    $(document).on("click",".cc-front",function(){
    	$(this).removeClass("cc-front").addClass("cc-back");
    	$(this).html("<p>"+$(this).attr("desc")+"</p><p>click for name</p>");
    });

    $(document).on("click",".cc-back",function(){
    	$(this).removeClass("cc-back").addClass("cc-front");
    	$(this).html("<h3>"+$("#first-name").val()+" "+$("#last-name").val()+"</h3>"
			+"<p>click for description</p>");
    });

});