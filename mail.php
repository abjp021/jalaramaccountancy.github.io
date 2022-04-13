<?php

$firstName = $_POST['f_name'];
$lastName = $_POST['l_name'];
$emailAddress = $_POST['mail'];
$mobNum = $_POST['mobNo'];
$query = $_POST['query'];
$fullName = $firstName. " " . $lastName;

$to = "utsavt22@gmail.com";
$subject = "Mail from Jalaram Accountancy";
$txt = "Name: ". $fullName . "\r\n \r\nEmail Address: " . $emailAddress . "\r\n \r\nMobile Number: " . $mobNum . "\r\n \r\nQuery: " . $query;

$headers = "From: noreply@jalaramaccountancy.com";

if($emailAddress != NULL){
    mail($to,$subject,$txt,$headers);
}

header("Location:thankyou.html");

?>