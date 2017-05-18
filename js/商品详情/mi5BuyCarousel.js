	/*轮播方法*/
	var adbanners;
	var preindex = 0;
	var internal;
	$(function(){
		adbanners = $(".ad-container").find("div");
		fun();
		internal = setInterval("fun()",3000);
		loadProduct();
	});
	function fun(){
		adbanners.each(function(index,element){
			//如果当前的索引==要查找的索引
			if(preindex==index){
			    //淡入显示
				$(element).fadeIn(400);
			}else{
				//淡出消失
				$(element).hide();
			}
		});
		//要查找的索引变成下一个索引
		if(preindex<adbanners.length-1){
			preindex++;
		}else{
			preindex=0;
		}
	}
	
	function funPre(){				
		clearInterval(internal);
		fun();
		internal = setInterval("fun()",3000);
	}
	function funNext(){				
		clearInterval(internal);
		fun();
		internal = setInterval("fun()",3000);
	}
	

