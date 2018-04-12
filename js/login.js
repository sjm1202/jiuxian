onload = function(){
	$(".header .right .help").hover(function(){
		$(this).find("ul").css("display","block");
	},function(){
		$(this).find("ul").css("display","none");
	})
	$(".main .formBox .loginTit li").click(function(){
		$(this).find("a").addClass("active")
						.end()
						.siblings("li")
						.find("a")
						.removeClass("active");
		$(".main .formBox .loginCon li").eq($(this).index())
										.css("display","block")
										.siblings()
										.css("display","none");
	})
	var erweiTitFlag = true;
	$(".main .formBox .erweiTit").click(function(){
		if(erweiTitFlag){
			erweiTitFlag = false;
			$(this).css("background-position","-80px -230px");
			$(this).next(".erweiCon").css("display","block");
		}else{
			erweiTitFlag = true;
			$(this).css("background-position"," 0 -230px");
			$(this).next(".erweiCon").css("display","none");
		}
		
	});
	$(".main .formBox .erwei").hover(function(){
		
		$(this).find(".erweiMa").stop().animate({"left":-15},1000,function(){
			$(this).next(".phonePic").stop().fadeIn(1000);
		})
	},function(){
		$(this).find(".phonePic").stop().fadeOut(1000,function(){
			$(this).prev(".erweiMa").stop().animate({"left":60},1000);
		});
	})
}
