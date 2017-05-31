$(function() {
  $('#menu-button').on('click', function() {
    $('#nav').toggleClass('open');
  });

  $('#page-top').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 200);
  });
});
