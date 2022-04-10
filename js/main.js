// slider
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
	});
});
// smooth scroll
$('a[href^="#"').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
			scrollTop: $(href).offset().top
	});
	return false;
});