onload = function(){
	$(".header .right .help").hover(function(){
		$(this).find("ul").css("display","block");
	},function(){
		$(this).find("ul").css("display","none");
	})
}
