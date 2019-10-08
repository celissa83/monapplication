<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

if (!isset($_GET['page'])) {
    $page = "dashboard";
} else {
    $page = $_GET['page'];
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Mon App</title>
    <!-- ENCODING -->
    <meta charset="UTF-8" />
    <!-- AUTHOR -->
    <meta name="author" content="snazzysheet" />
    <!-- DESCRIPTION -->
    <meta name="description" content="Modern Bootstrap 4 Admin Template - Fully Responsive" />
    <!-- IE EDGE COMPATIBILITY -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- RESPONSIVE BROWSER TO SCREEN WIDTH -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
    <!------------------------------------------------------------------------------------------------>
    <!--select2-->

    <script src="assets/libraries/jquery/jquery.min.js"></script>
    <!-- JQUERY UI -->
    <script src="assets/libraries/jquery-ui/jquery-ui.min.js"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <!-- FAVICON  -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon.png" />
    <!-- BOOTSTRAP - V 4.0.0 -->
    <link rel="stylesheet" href="assets/dist/css/bootstrap.min.css" />
    <!-- MATERIAL ICONS -->
    <link rel="stylesheet" href="assets/icons/material-icons/material-icons.css" />
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="assets/icons/font-awesome/font-awesome.min.css" />
    <!-- WEATHER ICONS -->
    <link rel="stylesheet" href="assets/icons/weather-icons/css/weather-icons.min.css" />
    <!-- FLAG ICON CSS -->
    <link rel="stylesheet" href="assets/icons/flag-icon-css/css/flag-icon.min.css" />
    <!-- OVERLAYSCROLLBARS -->
    <link type="text/css" href="assets/plugin/OverlayScrollbars/css/OverlayScrollbars.min.css" rel="stylesheet" />
    <!-- JVECTORMAP -->
    <link rel="stylesheet" href="assets/plugin/jVectormap/jquery-jvectormap-2.0.3.css" />
    <!-- Circliful Master -->
    <link rel="stylesheet" href="assets/plugin/circliful/css/jquery.circliful.css" />
    <!-- DATA TABLES -->
    <link rel="stylesheet" href="assets/plugin/DataTables/1.10.16/css/dataTables.bootstrap4.min.css" />
    <!-- SUMMERNOTE -->
    <link rel="stylesheet" href="assets/plugin/summernote/summernote-bs4.css" />
    <!-- JQUERY NOTIFY -->
    <link rel="stylesheet" href="assets/plugin/notify/css/notify.css" />
    <!-- BOOTSTRAP SLIDER -->
    <link rel="stylesheet" href="assets/plugin/bootstrap-slider/bootstrap-slider.min.css" />
    <!-- SUMOSELECT -->
    <link rel="stylesheet" href="assets/plugin/sumoselect/sumoselect.min.css" />
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Julius+Sans+One" rel="stylesheet">
    <!-- STYLE -->
    <link rel="stylesheet" href="assets/css/style.css" />

</head>

<body>
    <!------------------------------------------------------------------------------------------------>
    <!-- WRAPPER ------------------------------------------------------------------------------------->
    <div id="wrapper" class="wrapper-left-fixed wrapper-header-fixed">
        <!------------------------------------------------------------------------------------------------>
        <!-- WRAPPER HEADER ------------------------------------------------------------------------------>
        <div id="wrapper-header">
            <!-- NAVABR -->
            <nav class="navbar navbar-expand navbar-light navbar-danger">
                <!-- NAVABR NAV - LEFT -->
                <ul class="navbar-nav">
                    <!-- NAV ITEM - SIDEBARTOGGLE -->
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);" data-toggle="class" data-target="#wrapper" toggle-class="toggled">
                            <i data-toggle="switch" data-iconFirst="menu" data-iconSecond="close" class="material-icons">menu</i>
                        </a>
                    </li>
                </ul>

                <!-- NAVABR NAV - RIGHT -->
                <ul class="navbar-nav ml-auto">
                    <!-- NAV ITEM - APPS -->
                    <li class="nav-item dropdown dropdown-fluid">
                        <a class="nav-link dropdown-toggle no-caret" href="avascript:void(0);" id="mega" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="material-icons">apps</i>
                        </a>
                        <div class="dropdown-menu style-scroll" aria-labelledby="mega">
                            <div class="row ml-0 w-100">

                                <div class="col col-sm-12 p-4 border-top-md-0 border-top-sm ">
                                    <h6 class="dropdown-title mb-3">Contactez-nous</h6>
                                    <form>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-3 col-form-label d-lg-block d-md-none">Nom</label>
                                            <div class="col">
                                                <input class="form-control" type="text" id="nomContact" placeholder="nom">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-search-input" class="col-3 col-form-label d-lg-block d-md-none">Email</label>
                                            <div class="col">
                                                <input class="form-control" type="email" id="emailContact" placeholder="email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-search-input" class="col-3 col-form-label d-lg-block d-md-none">Contact</label>
                                            <div class="col">
                                                <input class="form-control" type="number" id="contact" placeholder="contact">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="exampleTextarea" class="col-3 col-form-label d-lg-block d-md-none">Message</label>
                                            <div class="col mb-1"> <textarea class="form-control" id="messageContact" palceholder="message" rows="2"></textarea> </div>
                                        </div>
                                        <button class="btn btn-wave-light btn-primary" id="demandeContact" type="button">Envoyer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- NAV ITEM - PARAMETRES -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle no-caret d-flex align-items-center" href="avascript:void(0);" id="settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/img/spl.jpeg" class="rounded-circle" width="32px">
                            <span class="d-sm-inline-block d-none pl-2 pr-1"><?php echo $_SESSION['pseudo']; ?></span>
                            <i class="d-sm-inline-block d-none material-icons icon-xs">keyboard_arrow_down</i>
                        </a>
                        <div class="dropdown-menu" style="max-width: 120px">
                            <a class="dropdown-item" href="index.php?page=profil"><i class="material-icons">settings</i>Paramétrages</a>
                            <a class="dropdown-item" href="./deconnexion.php"><i class="material-icons">power_settings_new</i> Deconnexion</a>
                        </div>
                    </li>
                </ul>

            </nav>
        </div>
        <!-- END WRAPPER HEADER -------------------------------------------------------------------------->
        <div class="navbar-search">
            <input type="text" class="form-control-search" id="send_message" placeholder="Write Something ..." />
            <a href="javascript:void(0);" data-toggle="class" data-target=".navbar-search" toggle-class="open" class="text-dark"><i class="material-icons">close</i></a>
        </div>
        <!------------------------------------------------------------------------------------------------>
        <!-- WRAPPER LEFT -------------------------------------------------------------------------------->
        <?php include('modules/index/menugauche.php'); ?>
        <!-- END WRAPPER LEFT ---------------------------------------------------------------------------->

        <!------------------------------------------------------------------------------------------------>
        <!-- WRAPPER CONTENT ----------------------------------------------------------------------------->

        <div id="wrapper-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <nav class="d-flex breadcrumb">
                            <div class="p-2">
                                <span class="mr-3 ">
                                    <?php echo $page = ucfirst($page); ?></span>
                                <span class="pageName"></span>
                            </div>
                            <div class="ml-auto p-2">
                                <span style='border-right: 1px solid #ddd;'> <span class="mr-3 ml-3 edition"></span></span>
                                <span class="mr-3 ml-3" id="time"></span>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <?php
                        include __DIR__ . '/routes/mainRoutes.php';
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <!-- END WRAPPER CONTENT ------------------------------------------------------------------------->
        <!------------------------------------------------------------------------------------------------>

        <!-- WRAPPER SLIDE ------------------------------------------------------------------------------->
        <div id="wrapper-slide">
            <button data-toggle="slideUp" data-target="body" class="btn btn-circle btn-danger btn-flash-dark ">
                <i class="material-icons">keyboard_arrow_up</i>
            </button>
        </div>
        <!-- END WRAPPER SLIDE --------------------------------------------------------------------------->
        <!------------------------------------------------------------------------------------------------>
        <!-- WRAPPER FOOTER ------------------------------------------------------------------------------>
        <div id="wrapper-footer">
            <div class="copyright text-center text-sm-left">
                <span class="text-grey">Copyright © 2019 </span>
                <span class="px-1">Moi même</span>
                <span class="text-grey">Tous droits réservés.</span>
            </div>
        </div>
        <!-- END WRAPPER FOOTER -------------------------------------------------------------------------->
        <!------------------------------------------------------------------------------------------------>
    </div>
    <!-- END WRAPPER --------------------------------------------------------------------------------->
    <!------------------------------------------------------------------------------------------------>
    <!-- JAVASCRIPT ---------------------------------------------------------------------------------->
    <!-- JQUERY -->
    <script src="assets/libraries/jquery/jquery.min.js"></script>
    <!-- JQUERY UI -->
    <script src="assets/libraries/jquery-ui/jquery-ui.min.js"></script>
    <!-- POPPER -->
    <script src="assets/libraries/popper/popper.min.js"></script>
    <!-- BOOTSTRAP - V 4.0.0 -->
    <script src="assets/dist/js/bootstrap.min.js"></script>
    <!-- CHARTJS -->
    <script src="assets/plugin/chartJs/Chart.bundle.min.js"></script>
    <!-- CIRCLIFUL MASTER -->
    <script src="assets/plugin/circliful/js/jquery.circliful.js"></script>
    <!-- OVERLAYSCROLLBARS -->
    <script src="assets/plugin/OverlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <!-- DATA TABLES -->
    <script src="assets/plugin/DataTables/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="assets/plugin/DataTables/1.10.16/js/dataTables.bootstrap4.min.js"></script>
    <!-- SUMMERNOTE -->
    <script src="assets/plugin/summernote/summernote-bs4.js"></script>
    <!-- JQUERY-NOTIFY -->
    <script src="assets/plugin/notify/js/notify.js"></script>
    <!-- JVECTORMAP -->
    <script src="assets/plugin/jVectormap/jquery-jvectormap-2.0.3.min.js"></script>
    <script src="assets/plugin/jVectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script src="assets/plugin/jVectormap/jquery-jvectormap-us-aea.js"></script>
    <script src="assets/plugin/jVectormap/jquery-jvectormap-ca-lcc.js"></script>
    <script src="assets/plugin/jVectormap/jquery-jvectormap-fr-regions-mill.js"></script>
    <!-- BOOTSTRAP SLIDER -->
    <script src="assets/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>
    <!-- TINY COLOR PICKER -->
    <script src="assets/plugin/tinyColorPicker/jqColorPicker.min.js"></script>
    <!-- SUMOSELECT -->
    <script src="assets/plugin/sumoselect/jquery.sumoselect.min.js"></script>
    <!-- INPUTMASK -->
    <script src="assets/libraries/jquery-inputmask/jquery.inputmask.bundle.js"></script>
    <!-- PLUGINS -->
    <script src="assets/js/plugin.js"></script>
    <!-- FUNCTIONS -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="assets/js/map-vector.js"></script>
    <script src="assets/js/functions.js"></script>
    <script src="assets/js/chartJs.js"></script>
    <script src="assets/js/calendar.js"></script>
    <!--summernote-->
    <script src="assets/js/form-summerNote.js"></script>
    <script src="assets/plugin/summernote/lang/summernote-fr-FR.js"></script>
    <!--select2-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script src=assets/js/fonctionsGeneriques.js> </script> 
    <script src="./js/demandeContact.js"></script>

</body>

</html>