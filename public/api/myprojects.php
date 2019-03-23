<?php 

session_start();
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output=[
    'success'=>false
];


// for the user id we want to grab the projects id and match it to the project of the user


$query ="SELECT `projects_id`
            FROM `users_projects`
            WHERE `users_id`='{$_SESSION['user_id']}'";
print_r($query);

?>