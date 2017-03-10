$(document).ready(function() {
	$('.nav-toggle').on('click', function() {
		if ($('.contact').hasClass('open')) {
			$('.contact').toggleClass('open');
			$('.main-nav').toggleClass('open');
		} else {
			$('.main-nav').toggleClass('open');
		}
	});
	$('.contact-toggle').on('click', function() {
		if ($('.main-nav').hasClass('open')) {
			$('.main-nav').toggleClass('open');
			$('.contact').toggleClass('open');
		} else {
			$('.contact').toggleClass('open');
		}

	});
	$('.nav-li').on('click', function() {
		$('.main-nav').toggleClass('open');
	});
	$(window).on('load', function() {
			// Animate loader off screen
			$(".loader").delay(1500).fadeOut(750);
		});
	var top_header = '';
	$(document).ready(function(){
	  top_header = $('.hello');
	});
	$(window).scroll(function () {
	  var st = $(window).scrollTop();
	  top_header.css({'background-position':"center "+(st*.2)+"px"});
	});
	var hilti = '';
	$(document).ready(function(){
	  hilti = $('.hilti');
	});









// Smooth scroll function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


});
