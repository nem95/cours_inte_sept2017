$(document).ready(function(){
  $('.header__leftScroll').on('click', function() {
    $('html,body').animate({scrollTop: $('.section__2').offset().top});
  });

  $('.view_button').on('click', function() {
    window.location.href="http://www.dji.com/phantom-2-vision-plus";
  });
});
