onload = function(){
	$(".dropTitle").hover(function(){
		$(this).addClass("on");
		$(this).find(".dropTitleBox").css("display","block");
	},
	function(){
		$(this).removeClass("on");
		$(this).find(".dropTitleBox").css("display","none");
	});
	$(".hd-n6").hover(function(){
		
		$(this).find(".erm2015922").css("display","block");
	},
	function(){
		$(this).removeClass("on");
		$(this).find(".erm2015922").css("display","none");
	});
}
