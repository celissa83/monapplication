<?php
try {
    $bdd = new PDO('mysql:host=db5000190634.hosting-data.io;dbname=dbs185453;charset=utf8', 'dbu256370', 'Diesel83$');
    // echo'ok';
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}


$email = $_POST['email'];
$mdp = $_POST['mdp'];
$response = "";

//  Récupération de l'utilisateur et de son pass hashé
$req = $bdd->prepare('SELECT id, password, pseudo FROM membres WHERE email = :email');
$req->execute(array(
    'email' => $email
));

$resultat = $req->fetch();

// Comparaison du pass envoyé via le formulaire avec la base
$isPasswordCorrect = password_verify($_POST['mdp'], $resultat['password']);


if (!$resultat) {
    echo 'Mauvais identifiant ou mot de passe !';
} else {
    if ($isPasswordCorrect = true) {
        session_start();
        $_SESSION['id'] = $resultat['id'];
        $_SESSION['pseudo'] = $resultat['pseudo'];
        $response = 'ok';
    } else {
        $response = 'Mauvais identifiant ou mot de passe !';
    }
}

echo $response;
