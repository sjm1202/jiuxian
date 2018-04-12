onload = function(){
	$(".headerWrap").load("header.html" ,function(){
		var js = document.createElement("script");
		js.src ="js/header.js";
		document.body.appendChild(js);
		$(".navWrap .nav .navList .home").removeClass("on");
		
	});
	
	$(".footerWrap").load("footer.html",function(){
		var js = document.createElement("script");
		js.src ="js/footer.js";
		document.body.appendChild(js);
	});
	$(".rightSidebarWrap").load("rightSidebar.html",function(){
		var js = document.createElement("script");
		js.src ="js/rightSidebar.js";
		document.body.appendChild(js);
	});
	
	
	
	
	
	$(".mav a").hover(function(){
		$(this).find("span").css("display","none");
	},function(){
		$(this).find("span").css("display","block");
	})
	
	
	var bannerIndex = 0;
	var bannerTimer = setInterval(showBanner,3000);
	function showBanner(){
		bannerIndex++;
		if( bannerIndex >=$(".mainBanner .bigImg li").size() ){
			bannerIndex = 0;
		}
		$(".mainBanner .bigImg li").eq(bannerIndex)
									.stop()
									.fadeIn(500).siblings().fadeOut(500);
		$(".mainBanner .smallBtn li").eq(bannerIndex)
										.addClass("on")
										.siblings()
										.removeClass("on");
	}
	$(".mainBanner").hover(function(){
		clearInterval(bannerTimer);
	},function(){
		bannerTimer = setInterval(showBanner,3000);
	})
	$(".mainBanner .smallBtn li").mouseenter(function(){
		
		bannerIndex = $(this).index()-1;
		showBanner();
	})
	
	
	
	$(".main1 .left .tit li").mouseenter(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".main1 .left .content").eq(index)
									.addClass("active")
									.siblings()
									.removeClass("active");
	})
	$(".main1 .right .tit li").mouseenter(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".main1 .right .content").eq(index)
									.addClass("active")
									.siblings()
									.removeClass("active");
	})
	
	
	
	var main1RMIndex = 0;
	var main1RMTimer = setInterval(showMain1RM,2000);
	function showMain1RM(){
		main1RMIndex++;
		if( main1RMIndex >=$(".main1 .right .middle .pics li").size() ){
				main1RMIndex = 1;
				$(".main1 .right .middle .pics").css("left",0);
		}
		$(".main1 .right .middle .pics").stop().animate({"left":-268 * main1RMIndex},1000);
	
		var btnIndex = main1RMIndex >= $(".main1 .right .middle .btn li").size() ? 0 : main1RMIndex;
		$(".main1 .right .middle .btn li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".main1 .right .middle").hover(function(){
		clearInterval(main1RMTimer);
		
	},function(){
		main1RMTimer = setInterval(showMain1RM,2000);
	})
	$(".main1 .right .middle .btn li").mouseenter(function(){
		main1RMIndex = $(this).index() - 1;
		showMain1RM();
	})
	
	
	
	var main1RBIndex = 0;
	var main1RBTimer = setInterval(showMain1RB,2000);
	function showMain1RB(){
		main1RBIndex++;
		if( main1RBIndex >=$(".main1 .right .bottom .pics li").size() ){
				main1RBIndex = 1;
				$(".main1 .right .bottom .pics").css("left",0);
		}
		$(".main1 .right .bottom .pics").stop().animate({"left":-268 * main1RBIndex},1000);
	
		var btnIndex = main1RBIndex >= $(".main1 .right .bottom .btn li").size() ? 0 : main1RBIndex;
		$(".main1 .right .bottom .btn li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".main1 .right .bottom").hover(function(){
		clearInterval(main1RBTimer);
		
	},function(){
		main1RBTimer = setInterval(showMain1RB,2000);
	})
	$(".main1 .right .bottom .btn li").mouseenter(function(){
		main1RBIndex = $(this).index() - 1;
		showMain1RB();
	})
	
	
	
	
	var banner3Index = 0;
	$(".banner3 .titleBox .btn li").click(function(){
		
		banner3Index = $(this).index()
		showBanner3();
	})
	function showBanner3(){
		$(".banner3 .contentBox .content")
		                 .animate({left:banner3Index * -1200},1000);
		$(".banner3 .titleBox .btn li").eq(banner3Index)
										.addClass("active")
										.siblings()
										.removeClass("active");
	}
	$(".banner3 .contentBox .leftBtn").click(function(){
		banner3Index--;
		banner3Index = Math.max(0,banner3Index);
		showBanner3();
	})
	$(".banner3 .contentBox .rightBtn").click(function(){
		banner3Index++;
		banner3Index = Math.min(2,banner3Index);
		showBanner3();
	})
	
	var floorIndex = 0;
	var floorFlag = true;
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		var showTop = $(".mainbox .floorOneBox").offset().top
		if($(".mainbox .floorOneBox").offset().top - sTop < $(window).innerHeight()/2){
			$(".mainbox .fixDiv").fadeIn(500);
		}else{
			$(".mainbox .fixDiv").fadeOut(500);
		}
		
		
		$floor = $(".mainbox .floorBox").filter(function(){
				return Math.abs($(this).offset().top-sTop) < $(this).outerHeight()/2;
		})
		if($floor.index() != -1 && floorFlag){
			floorIndex = $floor.index();
			$(".mainbox .fixDiv .floor").eq($floor.index())
			                            .find(".floorBg")
			                            .css("display","none")
			                            .end()
			                            .siblings()
			                            .find(".floorBg")
			                            .css("display","block")
		}
		if( $floor.index() == -1 && floorIndex == 4){
			
			$(".mainbox .fixDiv .floor").find(".floorBg")
			                            .css("display","block");
		}
		
		
	})
	$(".mainbox .fixDiv .floor").click(function(){
		floorFlag = false;
		var index = $(this).index();
		floorIndex = index;
		var divTop = $(".mainbox .floorBox").eq(index).offset().top
		$(this).find(".floorBg")
			   .css("display","none")
                .end()
                .siblings()
                .find(".floorBg")
                .css("display","block")
		$("body,html").animate({"scrollTop":divTop},1500,function(){
			floorFlag  = true;
		})
	})
	$(".mainbox .fixDiv .floorBack").click(function(){
		floorFlag = false;
		$("body,html").animate({"scrollTop":0},1500,function(){
			floorFlag  = true;
		})
		$(".mainbox .fixDiv .floor").find(".floorBg")
                .css("display","block")
	})
	$(".mainbox .fixDiv .floor").hover(function(){
		$(this).find(".floorBg")
			   .css("display","none")
		switch($(this).index()){
			case 0:
				$(this).find(".floorOn").stop().animate({width:70},500,function(){
					$(this).html("白酒馆");
				});
				break;
			case 1:
				$(this).find(".floorOn").stop().animate({width:90},500,function(){
					$(this).html("葡萄酒馆");
				});
				break;
			case 2:
				$(this).find(".floorOn").stop().animate({width:70},500,function(){
					$(this).html("洋酒馆");
				});
				break;
			case 3:
				$(this).find(".floorOn").stop().animate({width:130},500,function(){
					$(this).html("养生酒/黄酒/啤酒");
				});
				break;
			case 4:
				$(this).find(".floorOn").stop().animate({width:70},500,function(){
					$(this).html("食品");
				});
				break;
		}
		
			   
	},function(){
		var flag = true;
		if($(this).index() == floorIndex){
			flag = false; 
		}
		
		switch($(this).index()){
			case 0:
				$(this).find(".floorOn").stop().animate({width:30},500,function(){
					$(this).html("1F");
					if(flag){
						$(this).next(".floorBg")
								.css("display","block");
					}
				});
				break;
			case 1:
				$(this).find(".floorOn").stop().animate({width:30},500,function(){
					$(this).html("2F");
					if(flag){
						$(this).next(".floorBg")
								.css("display","block");
					}
				});
				break;
			case 2:
				$(this).find(".floorOn").stop().animate({width:30},500,function(){
					$(this).html("3F");
					if(flag){
						$(this).next(".floorBg")
								.css("display","block");
					}
				});
				break;
			case 3:
				$(this).find(".floorOn").stop().animate({width:30},500,function(){
					$(this).html("4F");
					if(flag){
						$(this).next(".floorBg")
								.css("display","block");
					}
				});
				break;
			case 4:
				$(this).find(".floorOn").stop().animate({width:30},500,function(){
					$(this).html("5F");
					if(flag){
						$(this).next(".floorBg")
								.css("display","block");
					}
				});
				break;
		}
	   
	})
	$(".mainbox .fixDiv .floorBack").hover(function(){
		$(this).find("i")
			   .css("background-position-x",-95)
			   
	},function(){
		$(this).find("i")
			   .css("background-position-x",-74)
		
	   
	})
	
	
    var floorOneBoxIndex = 0;
	var floorOneBoxTimer = setInterval(showfloorOneBox,2000);
	function showfloorOneBox(){
		
		floorOneBoxIndex++;
		if( floorOneBoxIndex >=$(".floorOneBox .contentBox .top .pics li").size() ){
				floorOneBoxIndex = 1;
				
				$(".floorOneBox .contentBox .top .pics").css("left",0);
		}
		$(".floorOneBox .contentBox .top .pics").stop().animate({"left":-210 * floorOneBoxIndex},1000);
	
		var btnIndex = floorOneBoxIndex >= $(".floorOneBox .contentBox .top .btns li").size() ? 0 : floorOneBoxIndex;
		$(".floorOneBox .contentBox .top .btns li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".floorOneBox .contentBox .top .left").hover(function(){
		clearInterval(floorOneBoxTimer);
		
	},function(){
		floorOneBoxTimer = setInterval(showfloorOneBox,2000);
	})
	$(".floorOneBox .contentBox .top .left .btns li").click(function(){
		floorOneBoxIndex = $(this).index() - 1;
		showfloorOneBox();
	})
	
	
	$(".floorOneBox .contentBox .bottom .right .topTenNav a").mouseenter(function(){
		var index = $(this).index();
		$(this).addClass("on")
				.siblings().removeClass("on")
		$(".floorOneBox .contentBox .bottom .right .content ul").eq(index).fadeIn(500)
		                                                            .siblings().fadeOut(500);
	})
	
	
	var floorTwoBoxIndex = 0;
	var floorTwoBoxTimer = setInterval(showfloorTwoBox,2000);
	function showfloorTwoBox(){
		
		floorTwoBoxIndex++;
		if( floorTwoBoxIndex >=$(".floorTwoBox .contentBox .top .pics li").size() ){
				floorTwoBoxIndex = 1;
				
				$(".floorTwoBox .contentBox .top .pics").css("left",0);
		}
		$(".floorTwoBox .contentBox .top .pics").stop().animate({"left":-210 * floorTwoBoxIndex},1000);
	
		var btnIndex = floorTwoBoxIndex >= $(".floorTwoBox .contentBox .top .btns li").size() ? 0 : floorTwoBoxIndex;
		$(".floorTwoBox .contentBox .top .btns li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".floorTwoBox .contentBox .top .left").hover(function(){
		clearInterval(floorTwoBoxTimer);
		
	},function(){
		floorTwoBoxTimer = setInterval(showfloorTwoBox,2000);
	})
	$(".floorTwoBox .contentBox .top .left .btns li").click(function(){
		floorTwoBoxIndex = $(this).index() - 1;
		showfloorTwoBox();
	})
	
	
	$(".floorTwoBox .contentBox .bottom .right .topTenNav a").mouseenter(function(){
		var index = $(this).index();
		$(this).addClass("on")
				.siblings().removeClass("on")
		$(".floorTwoBox .contentBox .bottom .right .content ul").eq(index).fadeIn(500)
		                                                            .siblings().fadeOut(500);
	})
	
	
	
    var floorThreeBoxIndex = 0;
	var floorThreeBoxTimer = setInterval(showfloorThreeBox,2000);
	function showfloorThreeBox(){
		
		floorThreeBoxIndex++;
		if( floorThreeBoxIndex >=$(".floorThreeBox .contentBox .top .pics li").size() ){
				floorThreeBoxIndex = 1;
				
				$(".floorThreeBox .contentBox .top .pics").css("left",0);
		}
		$(".floorThreeBox .contentBox .top .pics").stop().animate({"left":-210 * floorThreeBoxIndex},1000);
	
		var btnIndex = floorThreeBoxIndex >= $(".floorThreeBox .contentBox .top .btns li").size() ? 0 : floorThreeBoxIndex;
		$(".floorThreeBox .contentBox .top .btns li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".floorThreeBox .contentBox .top .left").hover(function(){
		clearInterval(floorThreeBoxTimer);
		
	},function(){
		floorThreeBoxTimer = setInterval(showfloorThreeBox,2000);
	})
	$(".floorThreeBox .contentBox .top .left .btns li").click(function(){
		floorThreeBoxIndex = $(this).index() - 1;
		showfloorThreeBox();
	})
	
	
	$(".floorThreeBox .contentBox .bottom .right .topTenNav a").mouseenter(function(){
		var index = $(this).index();
		$(this).addClass("on")
				.siblings().removeClass("on")
		$(".floorThreeBox .contentBox .bottom .right .content ul").eq(index).fadeIn(500)
		                                                            .siblings().fadeOut(500);
	})
	
	
	var floorFourBoxIndex = 0;
	var floorFourBoxTimer = setInterval(showfloorFourBox,2000);
	function showfloorFourBox(){
		
		floorFourBoxIndex++;
		if( floorFourBoxIndex >=$(".floorFourBox .contentBox .top .pics li").size() ){
				floorFourBoxIndex = 1;
				
				$(".floorFourBox .contentBox .top .pics").css("left",0);
		}
		$(".floorFourBox .contentBox .top .pics").stop().animate({"left":-210 * floorFourBoxIndex},1000);
	
		var btnIndex = floorFourBoxIndex >= $(".floorFourBox .contentBox .top .btns li").size() ? 0 : floorFourBoxIndex;
		$(".floorFourBox .contentBox .top .btns li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".floorFourBox .contentBox .top .left").hover(function(){
		clearInterval(floorFourBoxTimer);
		
	},function(){
		floorFourBoxTimer = setInterval(showfloorFourBox,2000);
	})
	$(".floorFourBox .contentBox .top .left .btns li").click(function(){
		floorFourBoxIndex = $(this).index() - 1;
		showfloorFourBox();
	})
	
	

	
	
	var floorFiveBoxIndex = 0;
	var floorFiveBoxTimer = setInterval(showfloorFiveBox,2000);
	function showfloorFiveBox(){
		
		floorFiveBoxIndex++;
		if( floorFiveBoxIndex >=$(".floorFiveBox .contentBox .top .pics li").size() ){
				floorFiveBoxIndex = 1;
				
				$(".floorFiveBox .contentBox .top .pics").css("left",0);
		}
		$(".floorFiveBox .contentBox .top .pics").stop().animate({"left":-210 * floorFiveBoxIndex},1000);
	
		var btnIndex = floorFiveBoxIndex >= $(".floorFiveBox .contentBox .top .btns li").size() ? 0 : floorFiveBoxIndex;
		$(".floorFiveBox .contentBox .top .btns li").eq(btnIndex).addClass("active")
		                                               .siblings()
		                                               .removeClass("active");
	}
	$(".floorFiveBox .contentBox .top .left").hover(function(){
		clearInterval(floorFiveBoxTimer);
		
	},function(){
		floorFiveBoxTimer = setInterval(showfloorFiveBox,2000);
	})
	$(".floorFiveBox .contentBox .top .left .btns li").click(function(){
		floorFiveBoxIndex = $(this).index() - 1;
		showfloorFiveBox();
	})
	
	
	
	var main2Index = 0;
	$(".main2 .titleBox li").mouseenter(function(){
		var index = $(this).index();
		main2Index = index;
		$(".main2 .titleBox .point").stop().animate({left:index*105},500);
		main2Show();
	})
	function main2Show(){
		$(".main2 .content ul").eq(main2Index).addClass("active")
		                       .siblings().removeClass("active");
	}
	$(".main2 .content li").hover(function(){
		$(this).find("img").stop().animate({left:-100},500);
	},function(){
		$(this).find("img").stop().animate({left:0},500);
	})
}