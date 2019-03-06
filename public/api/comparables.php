<?php
/* 
this file is the endpoint that the client will reach when they submit their project details provided by the user

we expect a string from the fields film 1 and film 2
    we need to sanitize the string and store it as variables outside of the sql query

we will now make the call to the database passing it the query, the varaibles, callback function
    we will use the get method?
    we will pass the SELECT query and variables as a prepared statment to the database
    the query
        will search through the database comparables table for a matching titles
        if titles are found then we would then get the information for the funding_partners and 
            the ditribution_companies tables, this would entail a join

        if the titles are not found in the database then we make a call the the api The Movie Database to retrieve the information about the films
            then we send out an  INSERT query that will store the information into comparables table
            but also prepare the data to be sent out to the client 

    when sending back to the client we want to restructure the data recieved from the database (or the movie databse) into the approved the dummy data object 

    then we json-ify the object and send it back to the client

*/

require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output = [
    'success'=>false
];


$id_query = 'SELECT c.`id`,c.`title`
                FROM `comparables` AS c
                WHERE c.`title`="The Amazing Spider-Man" OR c.`title`="The Lake House"';

$id_result=$db->query($id_query);
$id_array=[];


while($row_id=$id_result->fetch_assoc()){
    $id_array[]=$row_id['id'];
}

$queryPiece='';

for($index=0;$index<count($id_array);$index++){
    $queryPiece.='c.`id`= '.$id_array[$index];
    if($index<count($id_array)-1){
        $queryPiece.= ' OR ';
    }
}


$query = 'SELECT c.*, fp.`name` AS fp_name, dc.`id` AS dc_id, dc.`name` AS dc_name, GROUP_CONCAT(fp.`id`) AS funding_partners_ids, GROUP_CONCAT(fp.`name`)  AS funding_partners_names, ci.`image_url`
            FROM `comparables` AS c
            JOIN `comparables_funding` AS cf ON cf.`comparables_id` = c.`id`
            JOIN `funding_partners` AS fp ON fp.`id` = cf.`funding_partners_id`
            JOIN `comparables_distribution` AS cd ON cd.`comparables_id` = c.`id`
            JOIN `distribution_companies` AS dc ON dc.`id` = cd.`distribution_companies_id`
            JOIN `comparables_images` AS ci ON ci.`comparables_id` = c.`id`
            WHERE '.$queryPiece.'
            GROUP BY cf.`comparables_id`';
$result = $db->query($query);

$data=[];



if ($result){
    if ($result -> num_rows > 0) {
        $output['success']=true;


            while($row=$result->fetch_assoc()){
                $row['distribution_companies_info'] = [
                    [
                    'id'=>$row['dc_id'],
                    'name'=>$row['dc_name']
                    ]
                ];
                
                $row['funding_partners_info']=[];
                
                if(strlen($row['funding_partners_ids']) == 1){
                    $row['funding_partners_info'][]=[
                        'id'=>$row['funding_partners_ids'],
                        'name'=>$row['funding_partners_names']
                    ];
                }elseif(strlen($row['funding_partners_ids']) > 1){
                    $id = explode(',',$row['funding_partners_ids']);
                    $name = explode(',',$row['funding_partners_names']);
                    for( $index=0; $index<count($id) ; $index++){
                            $row['funding_partners_info'][]=[
                                'id' => $id[$index],
                                'name'=>$name[$index]
                            ];
                    }
                }
    
                unset($row['funding_partners_ids']);
                unset($row['funding_partners_names']);    
    
                $row['year'] = explode('-',$row['us_theatrical_release'] )[0];
                
                unset($row['fp_id']);
                unset($row['fp_name']);
                unset($row['dc_id']);
                unset($row['dc_name']);
                
                $data[]=$row;
                
            }
        
        


    }
} else {
    throw new Exception('SQL Error');
}

$output['data']=$data;

$json_output =json_encode($output);

print($json_output)

?>