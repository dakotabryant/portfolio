const nav = $('.main-nav')
const contact = $('.contact')

$(window).on('load', function() {
  // Animate loader off screen
  $(".loader").delay(1500).fadeOut(750);
});

$(document).ready(function() {
  $('.nav-toggle, .contact-toggle').on('click', (event) => {
    if ($(event.target).hasClass('nav-toggle')) {
      if (contact.hasClass('open')) {
        contact.toggleClass('open');
        nav.toggleClass('open');
      } else {
        nav.toggleClass('open');
      }
    } else {
      if (nav.hasClass('open')) {
        contact.toggleClass('open');
        nav.toggleClass('open');
      } else {
        contact.toggleClass('open');
      }
    }
  })
  $('.nav-li').on('click', function() {
    nav.toggleClass('open');
  });
  $('.row').on('mouseover', '.logos', (e) => {})

  var top_header = '';
  $(document).ready(function() {
    top_header = $('.hello');
  });
  $(window).scroll(function() {
    var st = $(window).scrollTop();
    top_header.css({
      'background-position': "center " + (st * .2) + "px"
    });
  });
  var hilti = '';
  $(document).ready(function() {
    hilti = $('.hilti');
  });
  // Smooth scroll function
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
