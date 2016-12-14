$(document).ready(function() {
	$('.nav-toggle').on('click', function() {
		$('.main-nav').toggleClass('open');
	});
	$('.contact-toggle').on('click', function() {
		$('.contact').toggleClass('open');
	});
	$(window).on('load', function() {
			// Animate loader off screen
			$(".loader").delay(1500).fadeOut("slow");
		});

});
