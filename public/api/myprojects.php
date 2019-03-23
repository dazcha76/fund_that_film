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
$id_array=[];

while($row=$id_result->fetch_assoc()){
    $id_array[]=$row['projects_id'];
};

print_r($id_array);


$idPiece='';

for($index=0;$index<count($id_array);$index++){
    $idPiece.='`id`= '.$id_array[$index];
    if($index<count($id_array)-1){
        $idPiece.= ' OR ';
    }
}

$proj_query='SELECT *
                FROM `projects`
                WHERE '.$idPiece.'';

print($proj_query);

?>