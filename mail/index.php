<?php
$parts = parse_url($url);
parse_str($parts['query'], $query);
$to      = $query['to'];
$subject = 'New sysCHAT Account';
$message = 'Thank you for using sysCHAT!\r\nTo ensure that you do not lose your information, it is provided below.\r\nUsername: ' . $query['user'] . "\r\nPassword: " . $query['pass'];
$headers = 'From: exsystemctl@gmail.com' . "\r\n" . 'Reply-To: exsystemctl@gmail.com';
mail($to, $subject, $message, $headers);
?>