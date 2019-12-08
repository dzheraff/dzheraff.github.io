// Анимация часов начало
$(function() {

	let numb_start = $(".digital__hours_animated").text();

	$({numberValue: 0}).animate({numberValue: numb_start}, {

		duration: 3000,
		easing: "linear",

		step: function(val) {
			$(".digital__hours_animated").html(Math.ceil(val));
		}
	});
});
// Анимация часов конец

// Анимация картинки digital-transformation начало
$('.digital-transformation__img').on('mousemove', (e) => {
	const x = e.clientX / $('.digital-transformation__img').width();
	const y = e.clientY / $('.digital-transformation__img').height();

	$('.digital-transformation__img img').css(
		'transform',
		'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
	);
});
// Анимация картинки digital-transformation конец

// Мобильное меню начало
$(function() {
	let adaptiveMenu = $("#adaptiveMenu");
	let mainMenu = $("#menu");
	let hamburger = $(".hamburger");
	adaptiveMenu.click(function() {
		mainMenu.slideToggle(500);
		if((hamburger).hasClass('is-active')) {
			$('.hamburger').removeClass('is-active');
		} else {
		$('.hamburger').addClass('is-active');
		};

		$(document).mouseup(function (e) {
	  if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0 && $(window).width() < 599 && !adaptiveMenu.is(e.target) && adaptiveMenu.has(e.target).length === 0) {
        mainMenu.hide(500);
        $('.hamburger').removeClass('is-active');
	  		};
	  });
	});
});
// Мобильное меню конец

// Кнопка наверх начало
$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
		$('.returnToTop').addClass('active');
	} else {
		$('.returnToTop').removeClass('active');
	}
});

$('.returnToTop').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
// Кнопка наверх конец

AOS.init({
	once: true,
});