$(function() {
  $('form').submit(function() {
    var data = $('form').serialize();
    var url = './mail.php'
    $.ajax({
      url: url,
      type: 'post',
      scriptCharset: 'utf-8',
      data: data,
      success: function(data) {
        if(data === 'true')
          success();
        else
          error();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        error();
      },
    })

    $('#pop-up').on('click', function() {
      $(this).removeClass('show');
    });
    return false;
  });

  function success() {
    $('form').find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);
    popUp('送信が完了しました。');
  };

  function error() {
    popUp('送信に失敗しました。');
  };

  function popUp(text) {
    $('#pop-up').text(text).addClass('show');
    setTimeout( function() {
      $('#pop-up').removeClass('show');
    }, 3000);
  }
});
