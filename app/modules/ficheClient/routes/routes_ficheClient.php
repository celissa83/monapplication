<?php
if(isset($_GET['categorie'])){
    include './modules/ficheClient/controller/ctr_ficheGroupe.php';
}else{
    include './modules/ficheClient/controller/ctr_defaut_ficheClient.php';
}

