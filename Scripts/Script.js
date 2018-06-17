$("#upp").click(function(){
	$("#box").animate({
		top: "-=10px",
		opacity: "+=0.1"
	}, function() {

	});
	$(this).css("color","red");
});

$("#doown").click(function(){
	$("#box").animate({
		bottom: "-=10px",
		opacity: "-=0.1"
	}, function() {

	});
	$(this).css("color","red");
});

$("#leftt").click(function(){
	$("#box").animate({
		left: "-=10px",
		fontSize: "-=2px"
	}, function() {

	});
	$(this).css("color","red");
});

$("#rightt").click(function(){
	$("#box").animate({
		right: "-=10px",
		fontSize: "+=2px"
	}, function() {

	});
	$(this).css("color","red");
});