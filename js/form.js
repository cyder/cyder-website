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
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("error");
      },
    })
    return false;
  });
});
