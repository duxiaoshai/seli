// JavaScript Document

$(function(){
	
	//头部搜索
	$('.headSearch > p').click(function(){
		var text = $(this).text();
		if( text == '搜索' ){
			$(this).text('关闭');
		} else {
			$(this).text('搜索');
		}
		$('.headSearch').toggleClass('open'); //搜索显示隐藏
	})
	
	//登录、注册、找回密码弹出框
	function loginFun(){
		if( $(window).width() < 1025 ){
			if( $('.popupBox').is(":visible") ){
				$("html, body").css({
					"height" : "100%",
					"overflow" : "hidden"
					})
			}
		}
	}
	
	$('.loginBtnJs').click(function(e){ //点击登录
		$('.popupBox, .loginBoxJs').show(); //登录弹层显示
		$('.registerBoxJs, .forgetPwBoxJs').hide(); //注册、找回密码弹层隐藏
		loginFun();
		e.stopPropagation();
	})
	$('.registerBtnJs').click(function(e){ //点击注册
		$('.popupBox, .registerBoxJs').show();
		$('.loginBoxJs, .forgetPwBoxJs').hide();
		loginFun();
		e.stopPropagation();
	})
	$('.forgetPwBtnJs').click(function(e){ //点击找回密码
		$('.popupBox, .forgetPwBoxJs').show();
		$('.loginBoxJs, .registerBoxJs').hide();
		loginFun();
		e.stopPropagation();
	})
	$(document).bind("click touchstart", function(e){ //点击任意处关闭注册弹层
		if( $(e.target).closest('.popupBox .loginBox').length > 0 ){
			$('.popupBox').show();
		} else {
			$('.popupBox').css( 'height', '100vh' )
			$('.popupBox, .loginBox').hide();
			$("html, body").css({
				"height" : "auto",
				"overflow" : "inherit"
				})
		}
		e.stopPropagation();
	})
	
})