$(function() {

  $('#scroll-down').on('click', function() {
    $('body,html').animate({ scrollTop: $('#main-content').offset().top - $('#main-header').outerHeight()}, 400);
  });

});
