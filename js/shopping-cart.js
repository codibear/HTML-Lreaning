//单击全选复选框
			function ch(){
				var checked=document.getElementById("cb0").checked;
				//没有全不选
				if(checked==true){
					var array=document.getElementsByName ("checkbox1");
					for(var i=0;i<array.length;i++){
						array.item(i).checked=checked;	
					}
					var checked1=document.getElementById("cb1").checked;
					var checked2=document.getElementById("cb2").checked;
					var checked3=document.getElementById("cb3").checked;
					var checked4=document.getElementById("cb4").checked;
					var pay1=document.getElementById("pay1").value;
					var pay2=document.getElementById("pay2").value;
					var pay3=document.getElementById("pay3").value;
					var pay4=document.getElementById("pay4").value;
					var choose=0;
					if(checked1==true){
						allPrice1=Number(pay1);
						choose++;
					}else{
						allPrice1=0;
					}
					if(checked2==true){
						allPrice2=Number(pay2);
						choose++;
					}else{
						allPrice2=0;
					}
					if(checked3==true){
						allPrice3=Number(pay3);
						choose++;
					}else{
						allPrice3=0;
					}
					if(checked4==true){
					allPrice4=Number(pay4);
					choose++;
					}else{
						allPrice4=0;
					}
					allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
					document.getElementById("allprice").value=allPrice;
					document.getElementById("choose").value=choose;
				}
			}
			//单个商品的单选按钮点击
			function ch1(){
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				var choose=0;
				if(checked1==true){
					allPrice1=Number(pay1);
					choose++;
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
					choose++;
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
					choose++;
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				choose++;
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
				document.getElementById("choose").value=choose;
			}
			//点击顶端文本我的订单时，跳转页面
			function order(){
				 
				window.open("订单/orderManagement.html");
			}
			//选中下拉列表时实现页面跳转
			function link1(){
				window.open("");
			}
			function link2(){
				window.open("#");
			}
			function link3(){
				window.open("#");
			}
			function link4(){
				window.open("#");
			}
			function link5(){

				window.open("login.html");
			}
			//点击数量减号，数量减一，总金额减少
			function subNum1(){
				var num=document.getElementById("num1").value;
				if(num>1){
					num--;
					document.getElementById("num1").value=num;
					var pay1=document.getElementById("pay1").value;
					pay1=num*95;
					document.getElementById("pay1").value=pay1;
					var checked1=document.getElementById("cb1").checked;
					var checked2=document.getElementById("cb2").checked;
					var checked3=document.getElementById("cb3").checked;
					var checked4=document.getElementById("cb4").checked;
					var pay1=document.getElementById("pay1").value;
					var pay2=document.getElementById("pay2").value;
					var pay3=document.getElementById("pay3").value;
					var pay4=document.getElementById("pay4").value;
					if(checked1==true){
						allPrice1=Number(pay1);
					}else{
						allPrice1=0;
					}
					if(checked2==true){
						allPrice2=Number(pay2);
					}else{
						allPrice2=0;
					}
					if(checked3==true){
						allPrice3=Number(pay3);
					}else{
						allPrice3=0;
					}
					if(checked4==true){
					allPrice4=Number(pay4);
					}else{
						allPrice4=0;
					}
					allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
					document.getElementById("allprice").value=allPrice;
				}
			}
			function subNum2(){
				var num=document.getElementById("num2").value;
				if(num>1){
					num--;
					document.getElementById("num2").value=num;
					var pay2=document.getElementById("pay2").value;
					pay2=num*1499;
					document.getElementById("pay2").value=pay2;
					var checked1=document.getElementById("cb1").checked;
					var checked2=document.getElementById("cb2").checked;
					var checked3=document.getElementById("cb3").checked;
					var checked4=document.getElementById("cb4").checked;
					var pay1=document.getElementById("pay1").value;
					var pay2=document.getElementById("pay2").value;
					var pay3=document.getElementById("pay3").value;
					var pay4=document.getElementById("pay4").value;
					if(checked1==true){
						allPrice1=Number(pay1);
					}else{
						allPrice1=0;
					}
					if(checked2==true){
						allPrice2=Number(pay2);
					}else{
						allPrice2=0;
					}
					if(checked3==true){
						allPrice3=Number(pay3);
					}else{
						allPrice3=0;
					}
					if(checked4==true){
					allPrice4=Number(pay4);
					}else{
						allPrice4=0;
					}
					allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
					document.getElementById("allprice").value=allPrice;
				}
			}
			function subNum3(){
				var num=document.getElementById("num3").value;
				if(num>1){
					num--;
					document.getElementById("num3").value=num;
					var pay3=document.getElementById("pay3").value;
					pay3=num*5999;
					document.getElementById("pay3").value=pay3;
					var checked1=document.getElementById("cb1").checked;
					var checked2=document.getElementById("cb2").checked;
					var checked3=document.getElementById("cb3").checked;
					var checked4=document.getElementById("cb4").checked;
					var pay1=document.getElementById("pay1").value;
					var pay2=document.getElementById("pay2").value;
					var pay3=document.getElementById("pay3").value;
					var pay4=document.getElementById("pay4").value;
					if(checked1==true){
						allPrice1=Number(pay1);
					}else{
						allPrice1=0;
					}
					if(checked2==true){
						allPrice2=Number(pay2);
					}else{
						allPrice2=0;
					}
					if(checked3==true){
						allPrice3=Number(pay3);
					}else{
						allPrice3=0;
					}
					if(checked4==true){
					allPrice4=Number(pay4);
					}else{
						allPrice4=0;
					}
					allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
					document.getElementById("allprice").value=allPrice;
				}
			}
			function subNum4(){
				var num=document.getElementById("num4").value;
				if(num>1){
					num--;
					document.getElementById("num4").value=num;
					var pay4=document.getElementById("pay4").value;
					pay4=num*8999;
					document.getElementById("pay4").value=pay4;
					var checked1=document.getElementById("cb1").checked;
					var checked2=document.getElementById("cb2").checked;
					var checked3=document.getElementById("cb3").checked;
					var checked4=document.getElementById("cb4").checked;
					var pay1=document.getElementById("pay1").value;
					var pay2=document.getElementById("pay2").value;
					var pay3=document.getElementById("pay3").value;
					var pay4=document.getElementById("pay4").value;
					if(checked1==true){
						allPrice1=Number(pay1);
					}else{
						allPrice1=0;
					}
					if(checked2==true){
						allPrice2=Number(pay2);
					}else{
						allPrice2=0;
					}
					if(checked3==true){
						allPrice3=Number(pay3);
					}else{
						allPrice3=0;
					}
					if(checked4==true){
					allPrice4=Number(pay4);
					}else{
						allPrice4=0;
					}
					allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
					document.getElementById("allprice").value=allPrice;
				}
			}
			////点击数量加号，数量加一，总金额增加
			function addNum1(){
				var num=document.getElementById("num1").value;
				num++;
				document.getElementById("num1").value=num;
				var pay1=document.getElementById("pay1").value;
				pay1=num*95;
				document.getElementById("pay1").value=pay1;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				if(checked1==true){
					allPrice1=Number(pay1);
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
			}
			function addNum2(){
				var num=document.getElementById("num2").value;
				num++;
				document.getElementById("num2").value=num;
				var pay2=document.getElementById("pay2").value;
				pay2=num*1499;
				document.getElementById("pay2").value=pay2;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				if(checked1==true){
					allPrice1=Number(pay1);
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
			}
			function addNum3(){
				var num=document.getElementById("num3").value;
				num++;
				document.getElementById("num3").value=num;
				var pay3=document.getElementById("pay3").value;
				pay3=num*5999;
				document.getElementById("pay3").value=pay3;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				if(checked1==true){
					allPrice1=Number(pay1);
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
			}
			function addNum4(){
				var num=document.getElementById("num4").value;
				num++;
				document.getElementById("num4").value=num;
				var pay4=document.getElementById("pay4").value;
				pay4=num*8999;
				document.getElementById("pay4").value=pay4;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				if(checked1==true){
					allPrice1=Number(pay1);
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
			}
			//点击删除按钮时，重新计算合计和件数
			function delet1(){
				document.getElementById("cb1").checked=false;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				var choose=0;
				if(checked1==true){
					allPrice1=Number(pay1);
					choose++;
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
					choose++;
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
					choose++;
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				choose++;
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
				document.getElementById("choose").value=choose;
			}
			function delet2(){
				document.getElementById("cb2").checked=false;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				var choose=0;
				if(checked1==true){
					allPrice1=Number(pay1);
					choose++;
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
					choose++;
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
					choose++;
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				choose++;
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
				document.getElementById("choose").value=choose;
			}
			function delet3(){
				document.getElementById("cb3").checked=false;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				var choose=0;
				if(checked1==true){
					allPrice1=Number(pay1);
					choose++;
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
					choose++;
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
					choose++;
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				choose++;
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
				document.getElementById("choose").value=choose;
			}
			function delet4(){
				document.getElementById("cb4").checked=false;
				var checked1=document.getElementById("cb1").checked;
				var checked2=document.getElementById("cb2").checked;
				var checked3=document.getElementById("cb3").checked;
				var checked4=document.getElementById("cb4").checked;
				var pay1=document.getElementById("pay1").value;
				var pay2=document.getElementById("pay2").value;
				var pay3=document.getElementById("pay3").value;
				var pay4=document.getElementById("pay4").value;
				var choose=0;
				if(checked1==true){
					allPrice1=Number(pay1);
					choose++;
				}else{
					allPrice1=0;
				}
				if(checked2==true){
					allPrice2=Number(pay2);
					choose++;
				}else{
					allPrice2=0;
				}
				if(checked3==true){
					allPrice3=Number(pay3);
					choose++;
				}else{
					allPrice3=0;
				}
				if(checked4==true){
				allPrice4=Number(pay4);
				choose++;
				}else{
					allPrice4=0;
				}
				allPrice=Number(allPrice1)+Number(allPrice2)+Number(allPrice3)+Number(allPrice4);
				document.getElementById("allprice").value=allPrice;
				document.getElementById("choose").value=choose;
			}
	
			//鼠标放置顶端文字我的账号时，鼠标呈小手形状，字体变色，下拉列表显示
			$(function(){
				$("#link0").mouseover(function(){
				$("#link0").css("cursor","pointer");
				$("#link0").css("color","#FF6700");
				$("#hidelist").css("display","block");
				});
				$("#link0").mouseout(function(){
					$("#link0").css("color","#757575");	
					$("#hidelist").css("display","none");
				});	
			});	
			//鼠标放置到隐藏div时，显示本隐藏div
			$(function(){
				$("#hidelist").mouseover(function(){
					$("#hidelist").css("display","block");
				});
				$("#hidelist").mouseout(function(){
					$("#hidelist").css("display","none");
				});	
			});	
			//鼠标放置到隐藏div列表时，鼠标字体变化
			$(function(){
				//鼠标放置隐藏div文字时，鼠标呈小手形状，字体变色
				$("#link1").mouseover(function(){
					$("#link1").css("cursor","pointer");
					$("#link1").css("color","#FF6700");
				});
				$("#link1").mouseout(function(){
					$("#link1").css("color","#757575");	
				});	
				$("#link2").mouseover(function(){
					$("#link2").css("cursor","pointer");
					$("#link2").css("color","#FF6700");
				});
				$("#link2").mouseout(function(){
					$("#link2").css("color","#757575");	
				});	
				$("#link3").mouseover(function(){
					$("#link3").css("cursor","pointer");
					$("#link3").css("color","#FF6700");
				});
				$("#link3").mouseout(function(){
					$("#link3").css("color","#757575");	
				});	
				$("#link4").mouseover(function(){
					$("#link4").css("cursor","pointer");
					$("#link4").css("color","#FF6700");
				});
				$("#link4").mouseout(function(){
					$("#link4").css("color","#757575");	
				});	
				$("#link5").mouseover(function(){
					$("#link5").css("cursor","pointer");
					$("#link5").css("color","#FF6700");
				});
				$("#link5").mouseout(function(){
					$("#link5").css("color","#757575");	
				});	
			});	
			//鼠标放置顶端文字我的订单时，鼠标呈小手形状
			$(function(){
				$("#span-top2").mouseover(function(){
				$("#span-top2").css("cursor","pointer");
				});
			});	
			//鼠标放置和点击商品名称或图片时鼠标形状改变，跳转页面
			$(function(){
				$("#main1-list-img1").mouseover(function(){
				$("#main1-list-img1").css("cursor","pointer");
				});
				$("#main1-list-img1").click(function(){
					window.location.href="#";
				});
				$("#main1-list-span1").mouseover(function(){
					$("#main1-list-span1").css("cursor","pointer");
				});
				$("#main1-list-span1").click(function(){
					window.location.href="#";
				});
				$("#main1-list-img2").mouseover(function(){
					$("#main1-list-img2").css("cursor","pointer");
				});
				$("#main1-list-img2").click(function(){
					window.location.href="#";
				});
				$("#main1-list-span2").mouseover(function(){
					$("#main1-list-span2").css("cursor","pointer");
				});
				$("#main1-list-span2").click(function(){
					window.location.href="#";
				});
				$("#main1-list-img3").mouseover(function(){
					$("#main1-list-img3").css("cursor","pointer");
				});
				$("#main1-list-img3").click(function(){
					window.location.href="#";
				});
				$("#main1-list-span3").mouseover(function(){
					$("#main1-list-span3").css("cursor","pointer");
				});
				$("#main1-list-span3").click(function(){
					window.location.href="#";
				});
				$("#main1-list-img4").mouseover(function(){
					$("#main1-list-img4").css("cursor","pointer");
				});
				$("#main1-list-img4").click(function(){
					window.location.href="#";
				});
				$("#main1-list-span4").mouseover(function(){
					$("#main1-list-span4").css("cursor","pointer");
				});
				$("#main1-list-span4").click(function(){
					window.location.href="#";
				});
			});
			//鼠标放置和点击删除键时鼠标形状改变，背景颜色改变，字体改变，跳转页面
			$(function(){
				$("#dele1").mouseover(function(){
					$("#dele1").css("cursor","pointer");
					$("#dele1").css("border-width","1px");
					$("#dele1").css("border-style","solid");
					$("#dele1").css("background","#FF6700");
					$("#dele1").css("color","white");
					});
				$("#dele1").mouseout(function(){
					$("#dele1").css("border","none");
					$("#dele1").css("background","white");
					$("#dele1").css("color","#757575");
					});
				$("#dele1").click(function(){
					
					$("#main1-list1").remove();
					$("#hr1").remove();
					});
									
					
				$("#dele2").mouseover(function(){
					$("#dele2").css("cursor","pointer");
					$("#dele2").css("border-width","1px");
					$("#dele2").css("border-style","solid");
					$("#dele2").css("background","#FF6700");
					$("#dele2").css("color","white");
					});
				$("#dele2").mouseout(function(){
					$("#dele2").css("border","none");
					$("#dele2").css("background","white");
					$("#dele2").css("color","#757575");
					});
					$("#dele2").click(function(){
					
					$("#main1-list2").remove();
					$("#hr2").remove();
					});
					
				$("#dele3").mouseover(function(){
					$("#dele3").css("cursor","pointer");
					$("#dele3").css("border-width","1px");
					$("#dele3").css("border-style","solid");
					$("#dele3").css("background","#FF6700");
					$("#dele3").css("color","white");
					});
				$("#dele3").mouseout(function(){
					$("#dele3").css("border","none");
					$("#dele3").css("background","white");
					$("#dele3").css("color","#757575");
					});
					$("#dele3").click(function(){
					
					$("#main1-list3").remove();
					$("#hr3").remove();
					});
					
				$("#dele4").mouseover(function(){
					$("#dele4").css("cursor","pointer");
					$("#dele4").css("border-width","1px");
					$("#dele4").css("border-style","solid");
					$("#dele4").css("background","#FF6700");
					$("#dele4").css("color","white");
					});
				$("#dele4").mouseout(function(){
					$("#dele4").css("border","none");
					$("#dele4").css("background","white");
					$("#dele4").css("color","#757575");
					});
					$("#dele4").click(function(){
						$("#main1-list4").remove();
						$("#hr4").remove();
					});
				});
			//鼠标放置文字继续购物时，鼠标呈小手形状，字体颜色改变
			$(function(){
				$("#main2-span1").mouseover(function(){
					$("#main2-span1").css("cursor","pointer");
				$("#main2-span1").css("color","#FF6700");
				});
				$("#main2-span1").mouseout(function(){
					$("#main2-span1").css("color","#757575");
				});
				$("#main2-span1").click(function(){
					window.location.href="#";
				});
			});
			//鼠标放置和点击去结算时鼠标形状改变，跳转页面
			$(function(){
				$("#payall").mouseover(function(){
					$("#payall").css("cursor","pointer");
					$("#payall").css("background","#F56600");
				});
				$("#payall").mouseout(function(){
					$("#payall").css("background","#FF6700");
				});
				$("#payall").click(function(){
					window.location.href="#";
				});
			});