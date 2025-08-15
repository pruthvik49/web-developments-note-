<?php 


$sname = "localhost";
$uname = "root"
$password = "";

$db_name = "test_server";

$conn = mysqli_connect($sname, $uname, $password, $db_name);
if(!$conn){
    echo "connection Failed!";
}