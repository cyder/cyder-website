<?php
$data = $_POST;
$keys = array_keys($data);
foreach ($keys as $key) {
  echo $key . ':' . $data[$key];
}
?>
