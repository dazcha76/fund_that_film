<?php 

session_start();
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output=[
    'success'=>false
];


$id_query ="SELECT `projects_id`
            FROM `users_projects`
            WHERE `users_id`={$_SESSION['user_id']}";



$id_result = $db->query($id_query);
$id_output=[];

while($row=$id_result->fetch_assoc()){
    $id_output[]=$row['projects_id'];
};

print_r($id_output);



?>