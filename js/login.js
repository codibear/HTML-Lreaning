//JavaScript
//选择方式1：账号登录
function way1(){
	document.getElementById("tdleft").style.color="red";
	document.getElementById("tdright").style.color="#666666";
	document.getElementById("saoma").style.display="none";
}
//选择方式2：扫码登录
function way2(){
	document.getElementById("tdleft").style.color="#666666";
	document.getElementById("tdright").style.color="red";
	document.getElementById("saoma").style.display="block";
	
	
}
//验证手机号码/小米账号位数是否正确
function a(){
	var num=document.getElementById("num").value;
var len1=num.length;
if(len1==10 || len1==11){
	document.getElementById("inform").innerHTML="";
}else{
	document.getElementById("inform").innerHTML="手机号码/小米账号不正确！";
}
}
//验证密码位数是否正确
function b(){
	var pwd=document.getElementById("pwd").value;
var len2=pwd.length;
if(len2>=8 && len2<=16){
	document.getElementById("inform").innerHTML="";
}else{
	document.getElementById("inform").innerHTML="密码不正确！";
}
}
//点击登录时，验证账号密码是否填写正确
function c(){
	var num=document.getElementById("num").value;
	var len1=num.length;
	var pwd=document.getElementById("pwd").value;
	var len2=pwd.length;
	if((len1==10 || len1==11)&&(len2>=8 && len2<=16)){
		window.open("index.html");
		return true;
	}else{
		document.getElementById("inform").innerHTML="账号/密码不正确！";
		return false;
	}
}


//jQuery
//鼠标放到账号登录时变成小手形状
$(function(){
	$("#tdleft").mouseover(function(){
		$("#tdleft").css("cursor","pointer");
	});
});
//鼠标放到扫码登录时变成小手形状
$(function(){
	$("#tdright").mouseover(function(){
		$("#tdright").css("cursor","pointer");
	});
});