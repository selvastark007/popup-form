
 <?php 

$getName = $_REQUEST['quotename'];
$getEmail = $_REQUEST['quoteemail'];
$getTel = $_REQUEST['quotetel'];
$getZipcode = $_REQUEST['quotezipcode'];
$getSelect = $_REQUEST['quoteselect'];
$getContent = $_REQUEST['quotecontent'];
$getDateTime = date('Y/m/d h:i:sa');
$getCC = 'slmn5900@gmail.com';

$to = 'ragavender@webdads2u.in';
$subject = 'New  Quote From:'.$getName.' '.$getDateTime.'';
$from = $getEmail;
 
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'CC: '.$getCC."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
// Compose a simple HTML email message
$message = '<html>
            <body>
            <style>
            background color:"black";
            </style>
            <h1>Thank for Contact us</h1>
                <table>
                <tr>
                    <td>Name</td>
                    <td>'.$getName.'</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>'.$getEmail.'</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>'.$getTel.'</td>
                </tr>
                <tr>
                    <td>Zipcode</td>
                    <td>'.$getZipcode.'</td>
                </tr>
                
                <tr>
                    <td>Messages</td>
                    <td>'.$getContent.'</td>
                </tr>
                </table>
            </body>
            </html>';
 
// Sending email
if(mail($to, $subject, $message, $headers)){
    // Subject of confirmation email.
    $conf_subject = 'Your recent enquiry';
    // Who should the confirmation email be from?   
    $conf_sender = 'securitaz <no-reply@support@securitaz.com>';
    $msg = $getName. ",\n\nThank you for your recent enquiry. A member of our 
    team will respond to your message as soon as possible.";
    if(mail( $getEmail, $conf_subject, $msg, 'From: ' . $conf_sender )) {
        // echo 'Your mail has been sent successfully.';
        echo '<script type="text/javascript">'; 
        echo 'alert("Your mail has been sent successfully.");'; 
        echo 'window.location.href = "index.html";';
        echo '</script>';
    } else {
        // echo 'Unable to send email. Please try again.';
        echo '<script type="text/javascript">'; 
        echo 'alert("Unable to send email. Please try again.");'; 
        echo 'window.location.href = "index.html";';
        echo '</script>';
    };
   
} else{
    // echo 'Unable to send email. Please try again.';
        echo '<script type="text/javascript">'; 
        echo 'alert("Unable to send email. Please try again.");'; 
        echo 'window.location.href = "index.html";';
        echo '</script>';
}

// Sending email
// if(mail($to, $subject, $message)){
//     echo 'Your mail has been sent successfully.';
// } else{
//     echo 'Unable to send email. Please try again.';
// }

?> 



<?php

$getName = $_REQUEST['quotename'];
$getEmail = $_REQUEST['quoteemail'];
$getTel = $_REQUEST['quotetel'];
$getZipcode = $_REQUEST['quotezipcode'];
$getSelect = $_REQUEST['quoteselect'];
$getContent = $_REQUEST['quotecontent'];
$getDateTime = date('Y/m/d h:i:sa');
$getCC = 'slmn5900@gmail.com';


$to = 'issac.webdads2u@gmail.com';
$subject = 'New  Quote From:'.$getName.' '.$getDateTime.'';
$from = $getEmail;
 
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'CC: '.$getCC."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
// Compose a simple HTML email message
$message = '<html>
            <body>
            <style>
            background color:"black";
            </style>
            <h1>Thank for Contact us</h1>
                <table>
                <tr>
                    <td>Name</td>
                    <td>'.$getName.'</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>'.$getEmail.'</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>'.$getTel.'</td>
                </tr>
                <tr>
                    <td>Zipcode</td>
                    <td>'.$getZipcode.'</td>
                </tr>
                
                <tr>
                    <td>Messages</td>
                    <td>'.$getContent.'</td>
                </tr>
                </table>
            </body>
            </html>';
 
// Sending email
if(mail($to, $subject, $message, $headers)){
    // Subject of confirmation email.
    $conf_subject = 'Your recent enquiry';
    // Who should the confirmation email be from?   
    $conf_sender = 'securitaz <no-reply@support@securitaz.com>';
    $msg = $getName. ",\n\nThank you for your recent enquiry. A member of our 
    team will respond to your message as soon as possible.";
    if(mail( $getEmail, $conf_subject, $msg, 'From: ' . $conf_sender )) {
        // echo 'Your mail has been sent successfully.';
        echo '<script type="text/javascript">'; 
        echo 'alert("Your mail has been sent successfully.");'; 
        echo 'window.location.href = "index.html";';
        echo '</script>';
    } else {
        // echo 'Unable to send email. Please try again.';
        echo '<script type="text/javascript">'; 
        echo 'alert("Unable to send email. Please try again.");'; 
        echo 'window.location.href = "index.html";';
        echo '</script>';
    };
   
} else{
    // echo 'Unable to send email. Please try again.';
        echo '<script type="text/javascript">'; 
        echo 'alert("Unable to send email. Please try again.");'; 
        echo 'window.location.href = "index.html";';
        echo '</script>';
}

// Sending email
// if(mail($to, $subject, $message)){
//     echo 'Your mail has been sent successfully.';
// } else{
//     echo 'Unable to send email. Please try again.';
// }

?>