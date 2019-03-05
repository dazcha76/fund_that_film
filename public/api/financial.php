<?php

require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output = [
    'success'=>false
];


$query = 'SELECT c.`id`,c.`title`,c.`us_gross_bo`
            FROM `comparables` AS c
            WHERE c.`id`=3 OR c.`id`=4';

$result = $db->query($query);


$data=[
    [
        'north america'=>[
            "theatrical"=> [
                "gross"=> 0,
                "film rental"=> 0,
                "distribution fee"=> 0,
                "direct distribution expenses"=> 0,
                "distributor's net"=> 0
            ],
            "home entertainment"=> [
                "gross"=> 0,
                "expenses"=> 0,
                "distribution fee"=> 0,
                "distributor's net"=>0
            ],
            "home entertainment"=> [
                "gross"=> 0,
                "expenses"=> 0,
                "distribution fee"=> 0,
                "distributor's net"=> 0
            ],
            "theatrical and home"=> [
                "sales agent fee"=> 0,
                "distributor's net"=> 0
            ],
            "pay per view"=> [
                "gross"=> 0,
                "distribution fee"=> 0,
                "direct distribution expenses"=> 0,
                "sales agent fee"=> 0,
                "distributor's net"=> 0
            ],
            "premium cable"=>[
                "gross"=> 0,
                "distribution fee"=> 0,
                "direct distribution expenses"=>0,
                "sales agent fee"=> 0,
                "distributor's net"=>0
            ],
            "free tv premiere"=>[
                "gross"=> 0,
                "distribution fee"=> 0,
                "direct distribution expenses"=> 0,
                "sales agent fee"=> 0,
                "distributor's net"=> 0
            ],
            "cable and syndicated tv"=> [
                "gross"=> 0,
                "distribution fee"=> 0,
                "direct distribution expenses"=> 0,
                "sales agent fee"=> 0,
                "distributor's net"=> 0
            ],
            "total net earnings"=> 0
        ],
        'international'=>[
            "theatrical, home, tv gross"=> 0,
            "sales agent fee"=> 0,
            "total net earnings"=> 0
        ],
        'global consumer products'=>[
            "royalties gross"=> 0,
            "merchandising distribution fee"=> 0,
            "sales agent fee"=> 0,
            "distributor's net"=> 0
        ],
        "total distributor's net"=>0,
        'global brand tie-in fees'=> 0,
        'production financing expense'=> 0,
        'negative cost'=> 0,
        'studio burden'=> 0,
        'talent residuals'=> 0,
        'sales agent direct sales expenses'=> 0,
        "producer's gross"=> 0,
        'talent participation'=> 0,
        "producer's net"=> 0,
        "studio's share"=> 0,
        "producer's share"=> 0,
        "distributor's net earning to cost ratio"=> '',
        "expenses after distributor's net"=> 0
    ]
];



$us_gross=[];

while($row = $result->fetch_assoc()){
    // $films[]=[
    //     "film id"=>$row['id'],
    //     "film title"=>$row['title'],
    //     "us_gross_bo" =>$row['us_gross_bo']
    
    // ];
        $us_gross[]=$row['us_gross_bo'];
}


$avg = array_sum($us_gross)/count($us_gross);
$conservative_avg=$avg*0.60;
print($con_avg);
$data[0]['north america']['theatrical']['gross']=$conservative_avg;
print_r($data[0]['north america']['theatrical']['gross']);
 $output['data']=$data;

 $json_data =json_encode($data);

print($json_data);

?>