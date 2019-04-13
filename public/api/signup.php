<?php 

session_start();
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');



$output = [
    'success'=> false

];

$json_output = json_encode($output);
print_r($json_output);




?>