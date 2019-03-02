<?php 

require_once('../../config/mysqlcredentials.php');

$db = mysqli_connect($credentials['host'],$credentials['username'],$credentials['password'],$credentials['database'],$credentials['port']);



?>