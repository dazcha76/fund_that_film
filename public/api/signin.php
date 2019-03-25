<?php 

session_start();
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');


if(isset($_SESSION['user_id'])){ //if is set, user is logged in
    $output['success']=true;
    $output['login']=true;
    $output['check-signin']=true;
    $json_output=json_encode($output);
}else{//if user is not logged in
    $output = [
        'success'=>false,
        'login'=>false
    ];

    $data = json_decode( file_get_contents( 'php://input'),true);

    if(!$data){
        throw new Exception('no data was sent');
    }

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

    $password = sha1($data['login']['password']);
    unset($data['login']['password']);

    $query ="SELECT `id` 
                FROM  `users` AS u
                WHERE  u.`password`='{$password}'
                AND u.`email`= '{$login['email']}' ";


    $result = $db->query($query);

    if($result){
        if($result->num_rows===1){
            while($row=$result->fetch_assoc()){
                $user_id=$row['id'];
            }

            $_SESSION['user_id']=$user_id;
            $output['success']=true;
            $output['login']=true;

        }else{
            throw new Exception('Invalid email or password');
        } 
    }else{
        throw new Exception('SQL Error');
    }  
}

    $json_output=json_encode($output);
    print_r($json_output);

?>