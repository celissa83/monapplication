<?php
try {
    $bdd = new PDO('mysql:host=db5000190634.hosting-data.io;dbname=dbs185453;charset=utf8', 'dbu256370', 'Diesel83$');
    // echo'ok';
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$response="";
$pass_hache = password_hash($_POST['mdpInscription'], PASSWORD_DEFAULT);

// Insertion
$req = $bdd->prepare('INSERT INTO membres(pseudo, password, email, date_creation) VALUES(:pseudo, :pass, :email, CURDATE())');
$req->execute(array(
    'pseudo' => $_POST['pseudo'],
    'pass' => $pass_hache,
    'email' => $_POST['email']
));
$resultat= $req;
if(!$resultat){
 $response=0;
}
else{
$response="ok";

}
echo $response;