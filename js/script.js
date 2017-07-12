$(function() {

  $('#menu-button').on('click', function() {
    $('#nav').toggleClass('open');
  });

  $('#scroll-down').on('click', function() {
    $('body,html').animate({ scrollTop: $('#main-content').offset().top - $('#main-header').outerHeight()}, 400);
  });

  var ua = navigator.userAgent.toUpperCase();
  if(ua.indexOf('IPHONE') == -1 && ua.indexOf('IPAD') == -1 && ua.indexOf('IPOD') == -1 && ua.indexOf('ANDROID') == -1 && ua.indexOf('WINDOWS PHONE') == -1) {
    $('#top').addClass('pc');
    $('#news-title').addClass('pc');
    $('#products-title').addClass('pc');
    $('#contact').addClass('pc');
  }

});
