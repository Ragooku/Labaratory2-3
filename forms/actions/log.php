<?php

$Username = filter_var(trim($_POST['Username']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
if (mb_strlen($Username) < 5 || mb_strlen($Username) > 90) {
    echo "Логин слишком велик";
    exit;
} else if (!preg_match("#[0-9]+#", $password)) {
    echo "Пароль должен содержать хотя бы одну цифру";
    exit;
}

header('location: kabinet.php');