/*保存跳转到商品管理主体1*/
	$(function(){
		$("#mer-spe1").click(function(){
			alert("保存成功")
		   $("#mer-body1").css("display","block");	
		});
		$("#mer-spe2").click(function(){
			alert("保存成功")
		   $("#mer-body1").css("display","block");	
		});
	});			
		/*删除按钮*/	
	function del() {
		if (window.confirm("是否确认要删除?")) {
		// 确认时做的操作
			alert("删除成功");
		} else {
		// 取消时做的操作
			alert("取消删除");
		}
	}
		//标题列表点击变色		
	$(function(){
		
		$("#mer-add").click(function(){
			$(".head-btn").css("color","silver");
			$("#mer-add").css("color","#FF6700");		
		});
	});
	$(function(){
		$("#mer-explain").click(function(){
			$(".head-btn").css("color","silver");
			$("#mer-explain").css("color","#FF6700");					
		});
	});
	$(function(){
		$("#mer-delete").click(function(){
			$(".head-btn").css("color","silver");
			$("#mer-delete").css("color","#FF6700");
			
		});
	});
	$(function(){
		$("#mer-look").click(function(){
			$(".head-btn").css("color","silver");
			$("#mer-look").css("color","#FF6700");					
		});
	});
		//提交按钮
	$(function(){
		$("#sumbit").mouseover(function(){
			$("#search").css("border","#FF6700 2px solid");
			$("#sumbit").css("color","white");
			$("#sumbit").css("background","#FF6700");
			$("#sumbit").css("border","white");
		});
		$("#sumbit").mouseout(function(){
			$("#search").css("border","black 1px solid");
			$("#sumbit").css("color","#FF6700");
			$("#sumbit").css("background","rgba(0,0,0,0)");
			$("#sumbit").css("border","silver 1px solid");
			
		});
	});

		/* 鼠标单击四个界面相互换面字体换色*/
	$(function(){
		$("#mer-add").click(function(){
			$(".mer-body").css("display","none");
			
			$("#mer-body2").css("display","block");	
		});
		$("#mer-explain").click(function(){
			$(".mer-body").css("display","none");
			
			$("#mer-body3").css("display","block");	
		});
		$("#mer-look").click(function(){
			$(".mer-body").css("display","none");
			
			$("#mer-body4").css("display","block");	
		});
		$(".add-btn").click(function(){
			$(".mer-body").css("display","none");
			
			$("#mer-body1").css("display","block");	
		});
		$(".add-btn1").click(function(){
			$(".mer-body").css("display","none");
			
			$("#mer-body1").css("display","block");	
		});
	});