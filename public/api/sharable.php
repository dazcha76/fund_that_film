<?php

header("Access-Control-Allow-Origin: *");

require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

foreach($_GET AS $key=>$value){
    $_GET[$key]=addslashes($value);
}

$token = ['token'=>$_GET['token']];

//$sharable_comps = json_decode( file_get_contents( 'php://input'),true);
//$token = sha1($sharable_comps);
$query_token = json_encode($token);
// $sharable_comps = [3,4];// TODO: Make sure the frontend is passing in the actual data from the form fields

// if (!$sharable_comps) {
//     exit();
// }

// $sharable_ids = '';

// if($sharable_comps){
//     for($share_index=0;$share_index<count($sharable_comps);$share_index++){
//         if(is_numeric($sharable_comps[$share_index])){
//             $share_id=floatVal($sharable_comps[$share_index]);
//             $sharable_ids.='c.`id`= '.$share_id;
//             if($share_index<count($sharable_comps)-1){
//                 $sharable_ids.= ' OR ';
//             }
//         }else{
//             exit();
//         }
//     }
// }

$sharable_query = 'SELECT s.`comparables_id` 
            FROM `sharable` AS s 
            WHERE s.`token` = '.$query_token.'';

$sharable_result = $db->query($sharable_query);

require_once('./financial.php');

?>