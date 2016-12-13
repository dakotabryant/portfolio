$(document).ready(function() {
	$('.nav-toggle').on('click', function() {
		$('.main-nav').toggleClass('open');
	});
	$('.contact-toggle').on('click', function() {
		$('.contact').toggleClass('open');
	});
	$('#spinner').bind('ajxSend', function() {
			$(this).show();
	}).bind('ajaxStop', function() {
		$(this).hide();
	}).bind('ajaxError', function() {
		$(this).hide();

	});


});
