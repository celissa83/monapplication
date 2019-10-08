<?php
/**
 * fichier mainRoutes.php
 *
 * @author Emmanuel Simon
 *
 * @copyright (c) 2018, Gentel SAAS
 *
 * @filesource /app/routes/mainRoutes.php
 *
 * Date de création 08/01/2018
 *
 * Date de modification 08/01/2018
 *
 * Modifié par : Emmanuel Simon
 */

ini_set('display_errors', 1);
ini_set('html_errors', 1);

$listRouteValide=['profil', 'mails','clients', 'factures', 'dashboard', 'documents', 'news', 'ficheClient'];

if(isset($_GET['page'])){
	$page=$_GET['page'];

	if(in_array($page, $listRouteValide, true)){
		include __DIR__.'/../modules/'.$page.'/routes/routes_'.$page.'.php';
	}else{
		echo "a faire page inexistante";
	}
}else{

	include ('./modules/dashboard/controller/ctr_defaut_dashboard.php');
}
