	/* 鼠标移入修改变色	 */
	$(document).ready(function(e){
				$("#alter1").mouseover(function(){
					$("#alter1").css("background","#757575");
					$("#alter1").css("color","white");
				});
				$("#alter1").mouseout(function(){
					$("#alter1").css("background","white");
					$("#alter1").css("color","black");
				});
			});
			$(document).ready(function(e){
				$("#alter2").mouseover(function(){
					$("#alter2").css("background","#757575");
					$("#alter2").css("color","white");
				});
				$("#alter1").mouseout(function(){
					$("#alter2").css("background","white");
					$("#alter2").css("color","black");
				});
			});
  
