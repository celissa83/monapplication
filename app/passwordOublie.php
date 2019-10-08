<!DOCTYPE html>
<html>

<head>
    <title>Mon App - Mot de passe oublié</title>
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
    <!-- FAVICON  -->
    <link rel="icon" type="image/png" sizes="30x30" href="" />
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
    <div id="wrapper" class="wrapper-left-fixed wrapper-header-fixed">
        <div class="d-sm-flex justify-content-sm-center d-block">
            <div class="card card-light p-0 my-sm-4 my-0">
                <div class="box-account">
                    <img class="box-account-logo" style="width:50%" src="assets/img/logo-2952485_960_720.png" />
                    <h6 class="box-account-title">Récupération mot de passe</h6>
                    <span class="reauth-email"> </span>
                    <input class="form-control email" type="text" required="" placeholder="Email" id="email" data-inputmask="'alias': 'email'">
                    <input class="form-control" type="password" required="" placeholder="Mot de passe" id="mdp">
                    <button class="btn btn-primary btn-lg btn-block" id="valider">Valider</button>

                </div>
            </div>
        </div>
    </div>

    <script src="assets/libraries/jquery/jquery.min.js">
    </script>
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
    <script src="assets/js/functions.js"></script>
    <script src="assets/js/form-mask.js"></script>

    <!-- END JAVASCRIPT ------------------------------------------------------------------------------>
    <!------------------------------------------------------------------------------------------------>

</body>

</html>
<script>
    $(document).ready(function() {
        $('.email').inputmask();
        $('#valider').on('click', function() {
            var email = $('#email').val();
            var mdp = $('#mdp').val();
            if (!mdp) {
                $.notify('Veuillez saisir votre mot de passe', {
                    type: "danger"
                });
            }
            if (!email) {
                $.notify('Veuillez saisir votre email', {
                    type: "danger"
                });
            }
            if (email && mdp) {
                if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
                    /* $.ajax({
                                        url: './ajax/connexion.php',
                                        type: 'POST',
                                        dataType: 'text',
                                        data: 'email=' + email + '&mdp=' + mdp,
                                        success: function(response) {
                                            if (response === 'ok') {
                                                var url = './index.php';
                                                window.location = url;
                                            } else {
                                                $.notify(response, {
                                                    type: "danger"
                                                })
                                            }

                                        }
                                    });*/
                } else {
                    $.notify('Adresse mail invalide', {
                        type: "danger"
                    });
                }
            }
        });
    });
</script>