$(document).ready(function(){
    // your jQuery codes will go here
    var blue = true;
    $("#add-class h2").addClass("color-blue");

    //ADD CLASS STUFF
    $("#add-class button").click(function(){
    	if (blue) {
	        $("#add-class h2").removeClass("color-blue").addClass("color-red");
	        blue = false;
    	}
    	else {
    		$("#add-class h2").removeClass("color-red").addClass("color-blue");
    		blue = true;
    	}
    });
    //AFTER STUFF
    $("#after button").click(function(){
    	$("#after-divs .square-div").text(""); // clears text in case user clicks button multiple times
    	$("#after-divs .after1").css("border","2px solid red").css("font-size","0.6em").append("Solid Red Border<br>")
    	.add("#after-divs .after2").css("outline","2px dotted blue").css("font-size","0.6em").append("Dotted Blue Outline<br>")
    	.add("#after-divs .after3").css("background","yellow").css("font-size","0.6em").append("Yellow Background<br>");   	
    });
    //APPEND STUFF
    var appendNum = 0;
    $("#append button").click(function(){
    	switch (appendNum%4){
    		case 0:
    			$("#append h2").replaceWith("<h2>Jun is</h2>");
    			$("#append h2").append(" cool");
    			appendNum++;
    			break;
    		case 1:
    			$("#append h2").append(" and funny");
    			appendNum++;
    			break;
    		case 2:
    			$("#append h2").append(" and AWESOME!!!");
    			appendNum++;
    			break;
    		default:
    			$("#append h2").replaceWith("<h2>Jun is ???</h2>");
    			appendNum = 0;
    		break;
    	}	 	
    });
    //ATTR STUFF
    $("#attr button").click(function(){
    	 var title = $("#attr a").attr("href");
    	 console.log(title);
    });


    //SLIDETOGGLE STUFF
    $("#slideToggle button").click(function(){
    	 $("#slideToggle div:last-child").slideToggle("fast");
    });



});