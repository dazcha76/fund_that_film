<?php
require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');
$output = [
    'success' => false
];
$incoming_request = json_decode( file_get_contents( 'php://input'),true);
// $request = [
//     "runtime"=> "130",
//     "logline"=> "In class no one can hear you scream",
//     "title"=> "The Greatest Movie",
//     "releasedYear"=> "2019",
//     "genre"=> "Horror",
//     "mpaa"=> "PG-13",
//     "developmentStage"=> "Pre-production",
//     "synopsis"=> "Student try to finalize a student project as well as juggling the demands of a portfolio and trying to find a job.",
//     "film1"=> "The Amazing Spider-Man",
//     "film2"=> "The Lake House"
// ];
$request = $incoming_request['newProject'];
foreach($request AS $key=>$value){
    $request[$key] = addslashes($value);
}




if(!array_key_exists('runtime',$request)){ // using gettype give us that runtime is a string
    throw new Exception('missing runtime');
}
// if(!array_key_exists('logline',$request)){
//     throw new Exception('missing logline');
// }
// if(!array_key_exists('title',$request)){
//     throw new Exception('missing the title');
// }
// if(!array_key_exists('releasedYear',$request)){
//     throw new Exception('missing the releasedYear');
// }
// if(!array_key_exists('genre',$request)){
//     throw new Exception('missing the genre');
// }
// if(!array_key_exists('mpaa',$request)){
//     throw new Exception('missing the mpaa');
// }
// if(!array_key_exists('developmentStage',$request)){
//     throw new Exception('missing the development stage');
// }
// if(!array_key_exists('synopsis',$request)){
//     throw new Exception('missing the synopsis');
// }
// if(!array_key_exists('film1',$request)){
//     throw new Exception('missing film 1');
// }
// if(!array_key_exists('film2',$request)){
//     throw new Exception('missing film 2');
// }

// foreach($request AS $key){
//     if(array_key_exists(key($request),$request)){
//         print($key);
//         print(' ');
//         print($request);
//         throw new Error(key($request).' does not exist');
//         exit();
//     };
// };




$query = "INSERT INTO `projects` SET `runtime`= '{$request["runtime"]}', 
            `logline`= '{$request["logline"]}', 
            `title`= '{$request["title"]}', 
            `year`= '{$request["releasedYear"]}', 
            `genre`= '{$request["genre"]}',
            `mpaa_rating`= '{$request["mpaa"]}',
            `production_stage`= '{$request["developmentStage"]}',
            `synopsis`= '{$request["synopsis"]}'";
$result = $db -> query($query);
if($result){
    $output['success']=true;
    $output['project_id']=mysqli_insert_id($db);
}else{
    $output['error']=mysqli_error($db);
}

$queryTitle=' c.`title`= '.json_encode($request['film1']).' OR  c.`title`= '.json_encode($request['film2']);
$id_query = 'SELECT c.`id`,c.`title`
                FROM `comparables` AS c
                WHERE '.$queryTitle.'';
$id_result=$db->query($id_query);
$insert_ids=[];
$comparables_ids=[];

while($row_id=$id_result->fetch_assoc()){
    $comparables_ids[]=$row_id['id'];
    $insert_query = "INSERT INTO `projects_comparables` SET `projects_id`='{$output["project_id"]}', `comparables_id`='{$row_id["id"]}'";
    $insert_result=$db->query($insert_query);
    $insert_ids[]= mysqli_insert_id($db);
}

$output['comparables_ids']=$comparables_ids;

$json_output = json_encode($output);
print($json_output);
?>