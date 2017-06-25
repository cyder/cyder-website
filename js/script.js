$(function() {
  $('#menu-button').on('click', function() {
    $('#nav').toggleClass('open');
    $('#main-header').toggleClass('transparent');
  });

  $('#page-top').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 200);
  });

  $('#scroll-down').on('click', function() {
    $('body,html').animate({ scrollTop: $('#main-content').offset().top - $('#main-header').outerHeight()}, 400);
  });

  $(window).scroll(function(){
    var obj_t_pos = $('#main-content').offset().top; //位置設定
    var scr_count = $(window).scrollTop();  //スクロールした量
    if(scr_count > obj_t_pos) {
      $('#main-header').removeClass('transparent');
    } else {
      $('#main-header').addClass('transparent');
    }
  });

});
