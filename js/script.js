$(function() {
  $('#menu-button').on('click', function() {
    $('#nav').toggleClass('open');
  });

  $('#page-top').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 200);
  });

  $('#scroll-down').on('click', function() {
    $('body,html').animate({ scrollTop: $('#main-content').offset().top - $('header').outerHeight()}, 400);
  });
});
