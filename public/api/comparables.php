<?php

header("Access-Control-Allow-Origin: *");
/* 
this file is the endpoint that the client will reach when they submit their project details provided by the user

        if the titles are not found in the database then we make a call the the api The Movie Database to retrieve the information about the films
            then we send out an  INSERT query that will store the information into comparables table
            but also prepare the data to be sent out to the client 

*/


require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output = [
    'success'=>false
];

//$params=$_GET['title1'].', '.$_GET['title2'];

$bodyVars = ["title1"=>$_GET['title1'],"title2"=>$_GET['title2']]; 


if(!$bodyVars){
    exit(500);
}

//exit(500);
//$title_array=[];
$queryTitle=' ';
$title='';

if ($bodyVars){
    foreach ($bodyVars as $key => $value) {
        $queryTitle.='c.`title`='.json_encode($value);
        if($key === 'title1'){
            $queryTitle.=' OR ';
        }
    }
} else {
    exit(500);
}

// if($bodyVars){
//     for($index=1;$index<count($bodyVars);$index++){
//         if(array_key_exists('title'.$index,$bodyVars['title'.$index])){
//             $title = addslashes($bodyVars['title'.$index]);
//             print($title);
//             //$title= addslashes($bodyVars[$index]['title']);
//             $queryTitle.='c.`title`=' .json_encode($title);
//             if($index<count($bodyVars)-1){
//                 $queryTitle.=' OR ';
//             }
//         }else{
//             print("no title");
//             exit();
//         }
//     }
// }


$id_query = 'SELECT c.`id`,c.`title`
                FROM `comparables` AS c
                WHERE '.$queryTitle.'';

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