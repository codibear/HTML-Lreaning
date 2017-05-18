/*立即购买点击跳转到小米手机五*/
	function toPage(){
		window.location.href="mi5Buy.html";
	}


//外观视频弹出
	$(function(){
		$("#surface").click(function(){
		$("#video1").slideToggle(1000);
		});
	});
	//4轴防抖视频弹出
	$(function(){
		$("#photo").click(function(){
		$("#video2").slideToggle(1000);
		});
	});	
	
	//鼠标移入相机图片变化
	$(document).ready(function() {
			$("#p1").mouseover(function(){
			$("#p1").css("width","55px");
			$("#p7").fadeIn();
		}); 
			$("#p1").mouseout(function(){
	    	$("#p1").css("width","43px");
	    	$("#p7").fadeOut();
		});
	});
	$(document).ready(function() {
			$("#p2").mouseover(function(){
			$("#p2").css("width","255px");
			$("#p8").fadeIn();
		}); 
			$("#p2").mouseout(function(){
	    	$("#p2").css("width","214px");
	    	$("#p8").fadeOut();
		});
	});
	$(document).ready(function() {
			$("#p3").mouseover(function(){
			$("#p3").css("width","175px");
			$("#p9").fadeIn();
		}); 
			$("#p3").mouseout(function(){
	    	$("#p3").css("width","153px");
	    	$("#p9").fadeOut();
		});
	});
	$(document).ready(function() {
			$("#p4").mouseover(function(){
			$("#p4").css("width","145px");
			$("#p10").fadeIn();
		}); 
			$("#p4").mouseout(function(){
	    	$("#p4").css("width","125px");
	    	$("#p10").fadeOut();
		});
	});
	$(document).ready(function() {
			$("#p5").mouseover(function(){
			$("#p5").css("width","125px");
			$("#p11").fadeIn();
		}); 
			$("#p5").mouseout(function(){
	    	$("#p5").css("width","99px");
	    	$("#p11").fadeOut();
		});
	});
			$(document).ready(function() {
			$("#p6").mouseover(function(){
			$("#p6").css("width","120px");
			$("#p12").fadeIn();
		}); 
			$("#p6").mouseout(function(){
	    	$("#p6").css("width","92px");
	    	$("#p12").fadeOut();
		});
	});
	
	//一键换机视频
	$(function(){
		$("#change").click(function(){
		$("#id-video2").slideToggle(1000);
		});
	});	
	//年度品牌视频
	$(function(){
		$("#go").click(function(){
		$("#video4").slideToggle(1000);
		});
	});	
