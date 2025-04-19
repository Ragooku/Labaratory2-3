<?php

session_start();

// выносим данные из пост в отдельные переменные
$number = $_POST['number'];
$Username = $_POST['Username'];
$password = $_POST['password'];

//Validation
$_SESSION['validation'] =[];

if (empty($Username)) {
    $_SESSION['validation']['Username'] = "Username is required";
}

if(empty($_SESSION['validation']['Username'])){
    //refirect
    header('location: ../login.php');
}

