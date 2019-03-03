$(function() {
  $('form').submit(function() {
    let data = {};
    $($('form').serializeArray()).each(function(i, v) {
      data[v.name] = v.value;
    });

    const url = 'https://wb35uhnz4f.execute-api.us-east-1.amazonaws.com/prod/contact'
    $.ajax({
      url: url,
      type: 'post',
      scriptCharset: 'utf-8',
      data: JSON.stringify(data),
      success: function(_) {
        success();
      },
      error: function(_, _, _) {
        error();
      },
    });

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
