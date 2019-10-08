<?php
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';
$response="";
        $mail = new PHPMailer(TRUE);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Username = "laetitia.gamba.spitz@gmail.com";
        $mail->Password = "btcoozooerraccxn";
        $mail->Body = htmlentities($_POST['message']);
        $mail->SetFrom($_POST['email'], $_POST['nom']);
        $objet = "Demande de Contact de la part de  :" . $_POST['nom'] . '/' . $_POST['email'] . ".";
        $mail->Subject = $objet;
        $mail->AddAddress('laetitia.gamba.spitz@gmail.com');
        $mail->isHTML(true);
        $mail->SMTPDebug = 0;
        $mail->send();
if (!$mail->send()) {
}else{
    $response = "ok";
        $mailRetour = new PHPMailer(TRUE);
        $mailRetour->isSMTP();
        $mailRetour->Host = 'smtp.gmail.com';
        $mailRetour->Port = 587;
        $mailRetour->SMTPAuth = true;
        $mailRetour->SMTPSecure = 'tls';
        $mailRetour->Username = "laetitia.gamba.spitz@gmail.com";
        $mailRetour->Password = "btcoozooerraccxn";
        $objetReponse = "Cher client, nous avons bien reçu votre demande de prise de contact et vous en remerciant. Notre équipe va traiter votre demande dans les plus brefs délais.";
        $mailRetour->Body = htmlentities($objetReponse);
        $mailRetour->SetFrom($_POST['email'], $_POST['nom']);
        $titre = "Accusé de réception";
        $mailRetour->Subject = htmlentities($titre);
        $mailRetour->AddAddress($_POST['email']);
        $mailRetour->isHTML(true);
        $mailRetour->SMTPDebug = 0;
        $mailRetour->send();  
     
}
   echo $response;





