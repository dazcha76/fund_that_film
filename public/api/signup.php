<?php 

session_start();
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');


$output = [
    'success'=> false
];

$data = json_decode( file_get_contents( 'php://input'),true);

if(!$data){
    throw new Exception('No data was sent');
}

$email = $data["email"];
$password = sha1($data["password"]);
$dateJoined = date("y-m-d h:i:s");
unset($data["password"]);


/*
INSERT INTO `users` SET `name` = "madeup",
            `last_login` = "19-04-13 03:38:20",
           `email` = "madeup@.com",
           `password` = "madeuppassword"

*/

$query_insert_user = "INSERT INTO `users` SET `name` = {$data["name"]},
            `last_login` = {$dateJoined},
            `email` = {$email},
            `password` = {$password} ";


$result_insert_user = $db->query($query_insert_user);
print_r($result_insert_user);
$user_id = mysqli_insert_id($db);
print_r($user_id);


if($result_insert_user ){
    $output['insert new user'] = true;
}else{
    throw new Exception('failed to add user');
};


$json_output = json_encode($output);
print_r($json_output);


?>