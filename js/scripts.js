$(document).ready(function() {
	$(".main_slider .inner").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.slides_count span').eq(0).html(i);
		$('.slides_count span').eq(1).html(slick.slideCount);
	});
	$('.calculator .left_cnt a').on('click', function(e) {
		e.preventDefault();
		var type = $(this).html();
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		$(this).parent().next().find('.tab').removeClass('active');
		if (type == "Интернет") {
			$(this).parent().next().find('.tab').eq(0).addClass('active');
		}
		else if (type == "Телевидение") {
			$(this).parent().next().find('.tab').eq(1).addClass('active');
		}
		else {
			$(this).parent().next().find('.tab').eq(2).addClass('active');
		}
	});
	$('.main_slider .inner').slick({
		fade: true
	});
	$('.burger').on('click', function() {
		$(this).toggleClass('active');
		$('nav').toggleClass('active');
		$('header .phone').toggleClass('active');
	});
});

$(function() {
	$( ".speed_scale" ).slider({
		min: 50,
		max: 100,
		step: 10,
		range: "min",
		value: 80
	});
	$( ".percent_scale" ).slider({
		min: 0,
		max: 40,
		step: 10,
		value: 10,
		range: "min"
	});
	$( ".percent_scale_phone" ).slider({
		min: 0,
		max: 40,
		step: 10,
		value: 10,
		range: "min"
	});
	$( ".channels_scale" ).slider({
		min: 1,
		max: 5,
		step: 1,
		value: 3,
		range: "min"
	});
});
