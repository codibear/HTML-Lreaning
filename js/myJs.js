//导航栏移动到文字上文字变化
			$(function(){
				$("li").mouseover(function(){
					$("li:hover").css("color","white");
				});
				$("li").mouseout(function(){
					$("li").css("color","#B0B0B0");
				});
			});
			//搜索图标的切换
			$(function(){
				$("#sumbit").mouseover(function(){
					$("#sumbit").css("background","url(img/搜索可点击.png)");
					$("#sumbit").css("cursor","pointer");
					$("#search").css("border-color","black");
				});
				$("#sumbit").mouseout(function(){
					$("#sumbit").css("background","url(img/搜索icon.png)");
					$("#search").css("border-color","darkgray");
				});
			});
			//购物车
			$(function(){
				$("#header-down-shopCar").mouseover(function(){
					$("#header-down-shopCar").css("background","url(img/购物车点击.png)");
					$("#shopcar").slideToggle("fast",function(){
						
					});
				});	
				$("#header-down-shopCar").mouseout(function(){
					$("#header-down-shopCar").css("background","url(img/购物车未点击.png)");
					$("#shopcar").slideToggle("fast",function(){
						
					});
				});
				
			});
			//第二导航文字
			$(function(){
				$(".li-main-navigation").mouseover(function(){
					$(".li-main-navigation:hover").css("color","#FF6700");
					$(".li-main-navigation:hover").css("color","#FF6700");
				});
				$("li").mouseout(function(){
					$(".li-main-navigation").css("color","black");
					$(".li-main-navigation:hover").css("color","#FF6700");
				});
			});
			//显示栏的文字
			$(function(){
				$(".span-show").mouseover(function(){
					$(".span-show:hover").css("color","#FF6700");
					
				});
				$(".span-show").mouseout(function(){
					$(".span-show").css("color","black");
					$(".span-show:hover").css("color","#FF6700");
				});
			});
			//主导航栏菜单
			$(function(){
				$(".li-main-nav-left").mouseover(function(){
					$(".li-main-nav-left:hover").css("background","#FF6700");
					$(".li-main-nav-left").css("color","white");
					$("#main-navi-left").css("background","rgba(0,0,0,0.5)");
				});
				$("li").mouseout(function(){
					$(".li-main-nav-left").css("background","rgba(0,0,0,0.5)");
					$(".li-main-nav-left").css("color","white");
					$("#main-navi-left").css("background","rgba(0,0,0,0.5)");
				});
			});
			//导航栏下滑效果
			$(function(){
				$("#li1").mouseover(function(){
					$("#nav-slide-down1").stop(true,false).slideDown();
					});
				$("#li1").mouseout(function(){
						$("#nav-slide-down1").stop(true,false).slideUp();
					});
				});
				$(function(){
				$("#li2").mouseover(function(){
					$("#nav-slide-down2").stop(true,false).slideDown();
					});
				$("#li2").mouseout(function(){
						$("#nav-slide-down2").stop(true,false).slideUp();
					});
				});
				$(function(){
				$("#li3").mouseover(function(){
					$("#nav-slide-down3").stop(true,false).slideDown();
					});
				$("#li3").mouseout(function(){
						$("#nav-slide-down3").stop(true,false).slideUp();
					});
				});
				$(function(){
				$("#li4").mouseover(function(){
					$("#nav-slide-down4").stop(true,false).slideDown();
					});
				$("#li4").mouseout(function(){
						$("#nav-slide-down4").stop(true,false).slideUp();
					});
				});
				$(function(){
				$("#li5").mouseover(function(){
					$("#nav-slide-down5").stop(true,false).slideDown();
					});
				$("#li5").mouseout(function(){
						$("#nav-slide-down5").stop(true,false).slideUp();
					});
				});
			
			//固定下滑栏
			$(function(){
				$("#nav-slide-down1").mouseover(function(){
					$("#nav-slide-down1").stop(true,false).slideDown();
				});
				$("#nav-slide-down1").mouseout(function(){
					$("#nav-slide-down1").stop(true,false).slideUp();
				});
			});
			$(function(){
				$("#nav-slide-down2").mouseover(function(){
					$("#nav-slide-down2").stop(true,false).slideDown();
				});
				$("#nav-slide-down2").mouseout(function(){
					$("#nav-slide-down2").stop(true,false).slideUp();
				});
			});
			$(function(){
				$("#nav-slide-down3").mouseover(function(){
					$("#nav-slide-down3").stop(true,false).slideDown();
				});
				$("#nav-slide-down3").mouseout(function(){
					$("#nav-slide-down3").stop(true,false).slideUp();
				});
			});
			$(function(){
				$("#nav-slide-down4").mouseover(function(){
					$("#nav-slide-down4").stop(true,false).slideDown();
				});
				$("#nav-slide-down4").mouseout(function(){
					$("#nav-slide-down4").stop(true,false).slideUp();
				});
			});
			$(function(){
				$("#nav-slide-down5").mouseover(function(){
					$("#nav-slide-down5").stop(true,false).slideDown();
				});
				$("#nav-slide-down5").mouseout(function(){
					$("#nav-slide-down5").stop(true,false).slideUp();
				});
			});
			/**
			 * 
			 */
			//导航栏右划
//			$(function(){
//				$("#leftLi1").mouseover(function(){
//					$("#nav-slide-right1").stop(true,false).css("display","block");
//				});
//				$("#leftLi1").mouseout(function(){
//					$("#nav-slide-right1").stop(true,false).css("display","none");
//				});
//			});
			$(function(){
				$("#leftLi1").mouseover(function(){
					$("#nav-slide-right1").fadeToggle();
				});
				$("#leftLi1").mouseout(function(){
					$("#nav-slide-right1").css("display","none");
				});
			});


			$(function(){
				$("#leftLi2").mouseover(function(){
					$("#nav-slide-right2").fadeToggle();
				});
				$("#leftLi2").mouseout(function(){
					$("#nav-slide-right2").css("display","none");
				});
			});
			$(function(){
				$("#leftLi3").mouseover(function(){
					$("#nav-slide-right3").fadeToggle();
				});
				$("#leftLi3").mouseout(function(){
					$("#nav-slide-right3").css("display","none");
				});
			});

			//固定导航	
			$(function(){
				$("#nav-slide-right1").mouseover(function(){
					$("nav-slide-right1").stop(true,false).css("display","block");
				});
				$("#nav-slide-right1").mouseout(function(){
					$("#nav-slide-right1").stop(true,false).css("display","none");
				});
			});
			
			//提出效果
			$(function(){
				$(".img1").mouseover(function(){
					$(".img1:hover").css("transform","translateY(-10px)");
					$(".img1:hover").css("box-shadow","0px 5px 5px rgba(0,0,0,0.3)")
				});
				$(".img1").mouseout(function(){
					$(".img1").css("transform","translateY(0px)");
					$(".img1").css("box-shadow","0px 0px 0px ");
				});
			});
			
			//展示柜显示
			$(function(){
				$(".img2").mouseover(function(){
					$(".img2:hover").css("transform","translateY(-10px)");
					$(".img2:hover").css("box-shadow","0px 5px 5px rgba(0,0,0,0.3)")
				});
				$(".img2").mouseout(function(){
					$(".img2").css("transform","translateY(0px)");
					$(".img2").css("box-shadow","0px 0px 0px ");
				});
			});
			$(function(){
				$("#img2-1").mouseover(function(){
					$("#img2-1").css("transform","translateY(-10px)");
					$("#img2-1").css("box-shadow","0px 5px 5px rgba(0,0,0,0.3)");
					$("#span-show-div1").css("display","block");
				});
				$("#img2-1").mouseout(function(){
					$("#img2-1").css("transform","translateY(0px)");
					$("#img2-1").css("box-shadow","0px 0px 0px ");
					$("#span-show-div1").css("display","none");
				});
			});
			$(function(){
				$("#span-show-div1").mouseover(function(){
					$("#span-show-div1").stop(true,false).css("display","block");
					$("#img2-1").css("transform","translateY(-10px)");
					$("#img2-1").css("box-shadow","0px 5px 5px rgba(0,0,0,0.3)");
				});
				$("#span-show-div1").mouseover(function(){
					$("#img2-1").css("transform","translateY(0px)");
					$("#img2-1").css("box-shadow","0px 0px 0px ");
					$("#span-show-div1").stop(true,false).css("display","none");
				});
			});
			
			//圆角框图片
			$(function(){
				$("#imgb1").mouseover(function(){
					$("#imgb1").css("background","url(img/黑2-1.png)r");
				});
				$("#imgb1").mouseover(function(){
					$("#imgb1").css("src","img/黑1.png");
				});
			});
			//后期
			$(function(){
				$(".bottom-li").mouseover(function(){
					$(".bottom-li:hover").css("color","#FF6700");
				});
				
					$(".bottom-li").mouseout(function(){
					$(".bottom-li").css("color","black");
				
				});
			});
			//24小时按钮
			$(function(){
				$("#btn").mouseover(function(){
					$("#btn").css("color","white");
					$("#btn").css("background","#FF6700");
				});
				
				$("#btn").mouseout(function(){
					$("#btn").css("color","#FF6700");
					$("#btn").css("background","white");
					
				});
			});