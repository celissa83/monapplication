<!--code CSS pour menu gén de gauche(ne fonctionne pas dasn une feuille css à part)-->
<style>
    @media screen and (max-width: 991px) and (min-width: 768px) {
        .sidebar-container {
            width: 100px;
        }
    }
</style>


<div id="wrapper-left">
    <!-- SIDEBAR -->
    <div class="sidebar sidebar-light sidebar-danger" id="menuGauche">
        <!-- SIDEBAR HEADER -->
        <div class="sidebar-header border-fade">
            <!-- SIDEBAR BRAND -->
            <a href="index.php?page=clients" class="sidebar-brand">
                <!-- SIDEBAR BRAND IMG -->
                <img class="sidebar-brand-img" src="assets/img/logo/blue.png" />
                <!-- SIDEBAR BRAND TEXT -->
                <span class="sidebar-brand-text">mon App</span>
            </a>
            <!-- SIDEBAR CLOSE -->
            <a href="javascript:void(0);" class="sidebar-close d-md-none" data-toggle="class" data-target="#wrapper" toggle-class="toggled">
                <i class="material-icons icon-sm">close</i>
            </a>
        </div>
        <!-- SIDEBAR CONTAINER -->
        <div class="sidebar-container style-scroll">
            <!-- SIDEBAR PROFILE -->
            <div class="sidebar-profile border-fade">
                <!-- SIDEBAR PROFILE image -->
                <div class="d-flex align-items-center">
                    <!-- <i class="fa fa-user text-center text-primary img-fluid img-thumbnail sidebar-profile-img" style="font-size: 40px" id="photo"></i>-->
                    <img src="assets/img/spl.jpeg" class="img-fluid img-thumbnail sidebar-profile-img" />
                </div>
                <!-- SIDEBAR PROFILE INFO -->
                <div class="sidebar-profile-info">
                    <h6 class="nomUtilisat"><?php echo $_SESSION['pseudo']; ?></h6>
                    <div class="sidebar-actions">
                        <a href=""><i class="material-icons" style="font-size: 21px">mail_outline</i></a>
                        <a href="../../../../monapp/index.php"><i class="material-icons" style="font-size: 21px">lock_outline</i></a>
                    </div>
                </div>
            </div>
            <!-- SIDEBAR NAV -->
            <ul class="sidebar-nav">
                <li class="nav-divider"></li>
                <!-- Clients -->
                <li class="nav-item">
                    <a href="index.php?page=dashboard" class="nav-link">
                        <i class="material-icons">dashboard</i><span class="link-text">Tableau de bord</span></a>
                </li>
                <li class="nav-divider"></li>
                <li class="nav-item"><a href="index.php?page=clients" class="nav-link"><i class="material-icons">supervisor_account</i>
                        <span class="link-text">Liste clients</span></a></li>
                <li class="nav-divider"></li>
                <!-- Factures -->
                <li class="nav-item"><a href="index.php?page=factures" class="nav-link">
                        <i class="material-icons">business</i><span class="link-text">Factures</span></a></li>
                <li class="nav-divider"></li>
                <!-- Modules -->
                <li class="nav-item"><a href="index.php?page=documents" class="nav-link">
                        <i class="material-icons">wallpaper</i><span class="link-text">Documents</span></a></li>
                <li class="nav-divider"></li>
                <li class="nav-divider"></li>
                <li class="nav-item has-dropdown">
                    <a href="javascript:void(0);" class="nav-link">
                        <i class="icon-sm fa fa-cogs"></i><span class="link-text">Paramétrages</span>
                    </a>
                    <ul class="dropdown-list">
                        <li><a href="index.php?page=profil" class="nav-link"> <i class="material-icons">chevron_right</i> <span class="link-text">Profil</span></a></li>
                        <li><a href="index.php?page=mails" class="nav-link"> <i class="material-icons">chevron_right</i> <span class="link-text">Mails</span></a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>