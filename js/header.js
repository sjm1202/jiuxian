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
	$(".navList li").hover(function(){
		$(this).addClass("on");
	},function(){
		$(this).not(".home").removeClass("on");
	})

	
	$(".nav .navCategoryMenu .categoryBox li").hover(function(){
		$(this).find(".menuBox").css("display","block");
//		                                   .end()
//		                                   .siblings()
//		                                   .find(".menuBox")
//		                                   .css("display","none");
		$(this).find(".catItemCon").css({"border-color":"#ce171f","background-color": "#f1f1f1"})
	},function(){
		$(this).find(".catItemCon").css({"border-color":"#ffffff","background-color": "#ffffff"});
		$(this).find(".menuBox").css("display","none");
		                                  
	})