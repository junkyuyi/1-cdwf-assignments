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

    // FOCUS STUFF
    $("#focus .input-1").focus( function(){
        $("#focus .span-1").css("display","inline").fadeOut(2000);

    });
    $("#focus .input-2").focus( function(){
        $("#focus .span-2").css("display","inline").fadeOut(2000);

    });

    // HTML TEXT
    $("#text-html #txt-btn").click(function(){
        $("#text-html p").text("<h3>New Paragraph</h3>");
    });
    $("#text-html #html-btn").click(function(){
        $("#text-html p").html("<h3>New Paragraph</h3>");
    });

    $("#data button").click(function(){
        $("#data p").data("custom-attr", {a:1, b:2, c:3});
        console.log($("#data p").data("custom-attr").a);
        console.log($("#data p").data("custom-attr").b);
        console.log($("#data p").data("custom-attr").c);
    });


    // VAL stuff
    $("#val button").click(function(){
        $("#val .input-2").val( $("#val .input-1").val() );
    });    

    $
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


    //BEFORE/AFTER STUFF
    var num = 0;
    $("#before-after .btn-1").click(function(){
        num++;
         $("#before-after p#origin").before("<p>BEFORE: " + num  + "</p>");
    });
    $("#before-after .btn-2").click(function(){
        num++;
         $("#before-after p#origin").after("<p>AFTER " + num  + "</p>");
    });

    //APPEND STUFF
    var paragraph = $("#append p").text();
    $("#append .btn").click(function(){
         $("#append p").append(paragraph);
    });

    //SHOW HIDE TOGGLE
    $("#sht .btn-1").click(function(){
         $("#sht img").show(4000);
    });

    $("#sht .btn-2").click(function(){
         $("#sht img").hide(4000);
    });

    $("#sht .btn-3").click(function(){
         $("#sht img").toggle(4000);
    });

    //SLIDE
    $("#fade .btn-1").click(function(){
         $("#fade img").fadeIn(4000);
    });

    $("#fade .btn-2").click(function(){
         $("#fade img").fadeOut(4000);
    });

    $("#fade .btn-3").click(function(){
         $("#fade img").fadeToggle(4000);
    });

    //SLIDE
    $("#slide .btn-1").click(function(){
         $("#slide img").slideDown(4000);
    });

    $("#slide .btn-2").click(function(){
         $("#slide img").slideUp(4000);
    });

    $("#slide .btn-3").click(function(){
    	 $("#slide img").slideToggle(4000);
    });
});