<?php
  $data = $_POST;
  $keys = array_keys($data);
  $message = '';
  foreach ($keys as $key) {
    $message = $message . $key . ':' . "\n" . $data[$key] . "\n\n";
  }

  mb_language("Japanese");
  mb_internal_encoding("UTF-8");

  $to      = 'contact@cyder.jp';
  $subject = 'お問合わせがありました。';
  $headers = 'From: contact@cyder.jp';

  $result = mb_send_mail($to, $subject, $message, $headers);

  if ($result) {
    echo 'true';
  } else {
    echo 'false';
  }
?>
