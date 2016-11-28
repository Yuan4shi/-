$(function(){

		$("#a1").click(function(){
			   $(this).addClass("next").next().show();
			   $("#a2").removeClass("prev").next().hide();
			   });
	    $("#a2").click(function(){
			   $(this).addClass("prev").next().show();
			   $("#a1").removeClass("next").next().hide();
			   });
	});