<?php

require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output = [
    'success' => false
];

// $request = json_decode( file_get_contents( 'php://input'),true);
$request = [
    "runtime"=> "130",
    "logline"=> "In class no one can hear you scream",
    "title"=> "The Greatest Movie",
    "releasedYear"=> "2019",
    "genre"=> "Horror",
    "mpaa"=> "PG-13",
    "developmentStage"=> "Pre-production",
    "synopsis"=> "Student try to finalize a student project as well as juggling the demands of a portfolio and trying to find a job.",
    "film1"=> "The Amazing Spider-Man",
    "film2"=> "The Lake House"
];

foreach($request AS $key=>$value){
    $request[$key] = addslashes($value);
}

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
    $output['new_id']=mysqli_insert_id($db);
}else{
    $output['error']=mysqli_error($db);
}

$json_output = json_encode($output);
print($json_output);

?>