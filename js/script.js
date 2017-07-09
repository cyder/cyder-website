$(function() {
  var changeHeaderTranspearent = function() {
    if($('#nav').hasClass('open')) {
      $('#main-header').removeClass('transparent');
    } else {
      var obj_t_pos = $('#main-content').offset().top - $('#main-header').outerHeight(); //位置設定
      var scr_count = $(window).scrollTop();  //スクロールした量
      if(scr_count >= obj_t_pos) {
        $('#main-header').removeClass('transparent');
      } else {
        $('#main-header').addClass('transparent');
      }
    }
  };

  changeHeaderTranspearent();

  $('#menu-button').on('click', function() {
    $('#nav').toggleClass('open');
    changeHeaderTranspearent();
  });

  $('#page-top').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 200);
  });

  $('#scroll-down').on('click', function() {
    $('body,html').animate({ scrollTop: $('#main-content').offset().top - $('#main-header').outerHeight()}, 400);
  });

  $(window).scroll(function() {
    changeHeaderTranspearent();
  });
});
