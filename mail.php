<?php

$firstName = $_POST['f_name'];
$lastName = $_POST['l_name'];
$emailAddress = $_POST['mail'];
$mobNum = $_POST['mobNo'];
$query = $_POST['query'];
$fullName = $firstName. " " . $lastName;

$to = "abjp021@gmail.com";
$subject = "Mail from Jalaram Accountancy";
$txt = "Name: ". $fullName . "\r\n Email Address: " . $emailAddress . "\r\n Mobile Number: " . $mobNum . "\r\n Query: " . $query;

$headers = "From: noreply@jalaramaccountancy.com";

if($emailAddress != NULL){
    mail($to,$subject,$txt,$headers);
}

header("Location:thankyou.html");

?>