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
          $('form').find("textarea, :text, select").val("").end().find(":checked").prop("checked", false);
        else
          error();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        error();
      },
    })
    return false;
  });

  function error() {
    alert("error");
  };
});
