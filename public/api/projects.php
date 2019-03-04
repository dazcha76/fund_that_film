<?php

 /*
Objective: Insert the data that the user has given us into our database in the projects table.

We expect multiple strings from the client upon accepting the comparable pictures.
    The strings are title, year, logline, synopsis, production_stage, and genre
    We will then sanitize each string and store it in a variable.
    We will send the INSERT query to the database seperate from the variables in a prepared statement
    We will then INSERT the  strings into the projects table and send a response of TRUE when it is completed

Next we will make the connections between the project and the comparables in the projects_comparables table
    we will need to grab the id of the project (server provided)
    then we will need to grab the ids of the comparable films
    then we will need to associate them to each other on the projects_comparables table one row for each comparables id

 */

require_once('../../config/setup.php');
require_once('../../config/mysqlconnect.php');

$output = [
    'success' => false
];

$query = 'SELECT p.`id`, p.`title`, p.`year`, p.`logline`, p.`synopsis`, p.`production_stage`, p.`genre`,
            GROUP_CONCAT(pc.`comparables_id`) AS `comparables_ids`
            FROM `projects` AS p
            JOIN `projects_comparables` AS pc ON pc.`projects_id` = p.`id`
            JOIN `comparables` AS c ON c.`id` = pc.`comparables_id`';

$result = $db -> query($query);

$data = [];

if ($result){
    if ($result -> num_rows > 0) {
        while($row = $result -> fetch_assoc()){
            $data[] = $row;
        }
        $output['success'] = true;
    }
} else {
    throw new Exception('SQL Error');
}

$output['data'] = $data;
$json_output = json_encode($output);
print($json_output);

?>