$(function () {

	setTimeout(function(){
		$("body").stop().animate({opacity:'1'},1000);
	},200);







	$('.number-box').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).addClass('is-active');
		}
	});
	$('.ttl03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).addClass('is-active');
		}
	});




init();


function init(){


}




	var height,thum01,recommends,episode1,episode2,episode3;


	$(window).on("load resize", function () {
		height = $(window).height();
		thum01 = $('#thum01').offset().top;
		episode1 = $('.episode01').offset().top;
		episode2 = $('.episode02').offset().top;
		episode3 = $('.episode03').offset().top;
		recommends = $('#recommends').offset().top;
	});

	$("body").on("resize", function () {
		height = $(window).height();
		thum01 = $('#thum01').offset().top;
		episode1 = $('.episode01').offset().top;
		episode2 = $('.episode02').offset().top;
		episode3 = $('.episode03').offset().top;
		recommends = $('#recommends').offset().top;
	});

	$(window).on("scroll", function () {
		var scrollTop = $(window).scrollTop();
		// thum01
		if (scrollTop > episode1 && !$('#thum01').hasClass('fixed')) {
			$('#thum01').addClass('fixed');
		} else if(scrollTop < episode1 && $('#thum01').hasClass('fixed')){
			$('#thum01').removeClass('fixed');
			$('#thum01').removeClass('bottom');
		}
		if(scrollTop > episode2 - height - 200 && $('#thum01').hasClass('fixed')){
			$('#thum01').removeClass('fixed');
			$('#thum01').addClass('bottom');
		}
		// thum02
		if (scrollTop > episode2 && !$('#thum02').hasClass('fixed')) {
			$('#thum02').addClass('fixed');
		} else if(scrollTop < episode2 && $('#thum02').hasClass('fixed')){
			$('#thum02').removeClass('fixed');
			$('#thum02').removeClass('bottom');
		}
		if(scrollTop > episode3 - height - 200 && $('#thum02').hasClass('fixed')){
			$('#thum02').removeClass('fixed');
			$('#thum02').addClass('bottom');
		}
		// thum03
		if (scrollTop > episode3 && !$('#thum03').hasClass('fixed')) {
			$('#thum03').addClass('fixed');
		} else if(scrollTop < episode3 && $('#thum03').hasClass('fixed')){
			$('#thum03').removeClass('fixed');
			$('#thum03').removeClass('bottom');
		}
		if(scrollTop > recommends - height && $('#thum03').hasClass('fixed')){
			$('#thum03').removeClass('fixed');
			$('#thum03').addClass('bottom');
		}
	});




	$('.episode01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView && !$(this).hasClass('is-scrolling')) {
			$(this).toggleClass('is-scrolling');
			thum01 = $('#thum01').offset().top;
			episode1 = $('.episode01').offset().top;
			episode2 = $('.episode02').offset().top;
			episode3 = $('.episode03').offset().top;
			recommends = $('#recommends').offset().top;
		}
	});
	$('.episode02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView && !$(this).hasClass('is-scrolling')) {
			$(this).toggleClass('is-scrolling');
			thum01 = $('#thum01').offset().top;
			episode1 = $('.episode01').offset().top;
			episode2 = $('.episode02').offset().top;
			episode3 = $('.episode03').offset().top;
			recommends = $('#recommends').offset().top;
		}
	});
	$('.episode03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView && !$(this).hasClass('is-scrolling')) {
			$(this).toggleClass('is-scrolling');
			thum01 = $('#thum01').offset().top;
			episode1 = $('.episode01').offset().top;
			episode2 = $('.episode02').offset().top;
			episode3 = $('.episode03').offset().top;
			recommends = $('#recommends').offset().top;
		}
	});

});