<?php
session_start();


$output = [
    'logged in' => false
];


if(isset($_SESSION['user_id'])){
    $output =[
        'logged in'=>true
    ];
}

$json_output = json_encode($output);


print_r($json_output);

?>