$(document).ready(function(){
	$("label").click(function(){
		$("#city").animate({
			height:'toggle'
		});
	});
});



$(document).ready(function(){
	$("#show").mouseover(function(){
		$(".sweep-code").show();
	});
	$("#show").mouseleave(function(){
		$(".sweep-code").hide();
	});
});



$(document).ready(function(){
	$(".come").click(function(){
		$(".select").slideToggle(200);
	});
});