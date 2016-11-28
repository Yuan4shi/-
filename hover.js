$(function(){
	$(".head li").mouseover(function(){
		$(this).append("<div class='navhover'></div>");
		});
	$(".head li").mouseout(function(){
		$(this).children(".navhover").remove();
		});
	
	});