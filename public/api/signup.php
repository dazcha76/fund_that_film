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
foreach ($data as $key => $value) {
    $data[$key] = addslashes($value);
}

if(empty($data['project_id'])){
    throw new Exception('need the project id to be sent');
}

if(empty($data['email'])){
    throw new Exception('email is a required field');
}

if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
    throw new Exception('Not a valid email');
}

if(empty($data['password'])){
    throw new Exception('password is a required field');
}



$email = $data["email"];
$password = sha1($data["password"]);
$dateJoined = date("y-m-d h:i:s");
unset($data["password"]);



$query_insert_user = "INSERT INTO `users` SET `name` = '{$data["name"]}',
            `last_login` = '{$dateJoined}',
            `email` = '{$email}',
            `password` = '{$password}' ";


$result_insert_user = $db->query($query_insert_user);
$user_id = mysqli_insert_id($db);



if($result_insert_user){
    $output['insert new user'] = true;
}else{
    throw new Exception('failed to add user');
};


$json_output = json_encode($output);
print_r($json_output);


?>