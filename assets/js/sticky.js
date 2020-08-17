$(window).scroll(function(){
  var sticky = $('.usa-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) usa-nav.addClass('fixed');
  else usa-nav.removeClass('fixed');
});