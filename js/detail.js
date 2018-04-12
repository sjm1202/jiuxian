onload=function(){
	$(".headerWrap").load("header.html" ,function(){
		var js = document.createElement("script");
		js.src ="js/header.js";
		document.body.appendChild(js);
		
	});
	
	$(".footerWrap").load("footer.html",function(){
		var js = document.createElement("script");
		js.src ="js/footer.js";
		document.body.appendChild(js);
		headerInit();
	});
	$(".rightSidebarWrap").load("rightSidebar.html",function(){
		var js = document.createElement("script");
		js.src ="js/rightSidebar.js";
		document.body.appendChild(js);
	});
	function headerInit(){
		$(".navWrap .nav .navList .home").removeClass("on").removeClass("home");
		$(".navWrap .nav .categoryBox").css("display","none");
		$(".navWrap .nav .navCategoryMenu").hover(function(){
			$(this).find(".categoryBox").css("display","block");
		},function(){
			$(this).find(".categoryBox").css("display","none");
		})
	}
	
	
	//放大镜
	$(".dIntro .left .show-list ul li").mouseenter(function(){
		var index = $(this).index();
		$(this).css("border-color","#CC0000")
				.siblings().css("border-color","#ffffff");
		$(".dIntro .left .show-pic .mPic")
		      .attr("src","img/detail/middle"+(index+1)+".jpg");
	    $(".dIntro .left .show-big img")
		      .attr("src","img/detail/big"+(index+1)+".jpg");
	})
	$(".dIntro .left .show-pic").hover(function(){
		$(this).find(".mask").css("display","block");
		$(this).next(".show-big").css("display","block");
	},function(){
		$(this).find(".mask").css("display","none");
		$(this).next(".show-big").css("display","none");
	})
	$(".dIntro .left .show-pic").mousemove(function(e){
		var e = e || event;
		var disX = e.pageX - $(this).offset().left-121;
		disX = Math.max(0,Math.min(198,disX))
		var disY = e.pageY - $(this).offset().top-121;
		disY = Math.max(0,Math.min(198,disY))
		$(this).find(".mask").css({"top":disY,"left":disX});
		$(this).next(".show-big").find("img")
		                         .css({"top":-disY*440/242,"left":-disX*440/242})
	})
	
	var fdjIndex = 0;
	$(".dIntro .left .show-list .btnL").click(function(){
		var size = $(this).next("ul").find("li").size();
		if(size-fdjIndex>4){
			fdjIndex++;
		}
		$(this).next("ul").animate({left:28-fdjIndex*72},500);
	});
	$(".dIntro .left .show-list .btnR").click(function(){
		var size = $(this).next("ul").find("li").size();
		
		fdjIndex--;
		fdjIndex = Math.max(0,fdjIndex);
		$(this).prev("ul").animate({left:28-fdjIndex*72},500);
	});
	$(".dIntro .center .mobileBay .mb-head").hover(function(){
		$(this).next("p").stop().slideDown(500);
	},function(){
		$(this).next("p").stop().slideUp(500);
	})
	$(".ChooseBay .infoBuyNum .buyNum .buyNum-add").click(function(){
		
		var num = $(this).parent().find("#_nub").val();
		var num = Number(num) + 1;
		$(this).parent().find("#_nub").val(num);
	})
	$(".ChooseBay .infoBuyNum .buyNum .buyNum-reduce").click(function(){
		
		var num = $(this).parent().find("#_nub").val();
		var num = Number(num) - 1;
		num = Math.max(1,num);
		$(this).parent().find("#_nub").val(num);
	})
	$(".main1 .group .goods .ckbtn").click(function(){
		var tNum = 0
		var tPrice = 0;
		$(".main1 .group .goods .ckbtn").each(function(){
			if($(this).prop("checked")){
				tNum ++;
				pri= $(this).parent()
							.find(".price")
							.html();
				tPrice +=parseFloat(pri);
			}
			
		})
		$(".main1 .group .right .total").find(".tNum")
											.html(tNum-1)
											.end()
											.find(".tPrice")
											.html(tPrice.toFixed(2));
	})
	var titT = $(".main2  .right .tit").offset().top+300;
	
	$(window).scroll(function(){
		var scT = $(document).scrollTop();
		
		if(scT > titT){
			$(".main2  .right .tit").css({"position":"fixed","top":0})
									.find(".addCarst")
									.css("display","block");
		}else{
			$(".main2  .right .tit").css({"position":"relative"})
									.find(".addCarst")
									.css("display","none");
		}
	})
	$(".main2  .right .tit li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".main2  .right .content li").eq($(this).index())
										.css("display","block")
										.siblings("li")
										.css("display","none");
	})
}
