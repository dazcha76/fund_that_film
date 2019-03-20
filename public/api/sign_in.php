<?php 

session_start();
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output = [
    'sucess'=>false
];



$data = json_decode( file_get_contents( 'php://input'),true);

if(!$data){
    throw new Exception('no data was sent');
}


$password = sha1($data['login']['password']);
$login=$data['login'];

if(empty($login['email'])){
    throw new Exception('email is a required field');
}

if(!filter_var($login['email'], FILTER_VALIDATE_EMAIL)){
    throw new Exception('Not a valid email');
}

if(empty($login['password'])){
    throw new Exception('password is a required field');
}







$query ='SELECT `id` 
            FROM  `users` AS u
            WHERE u.`email`= '{$login['email']}'  ';


?>