<div class="row">
    <div class="col-xl-12">
        <div class="card card-light mb-0">
            <div class="card-body">
                <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#coord" role="tab" aria-controls="pills-home" aria-selected="true">Coordonnées</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#reglement" role="tab" aria-controls="pills-profile" aria-selected="false">Mode de réglement</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#notes" role="tab" aria-controls="pills-contact" aria-selected="false">Notes</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class='col-xl-12'>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active pt-3" id="coord" role="tabpanel" aria-labelledby="pills-home-tab">
                <?php
                 include('./modules/ficheClient/vue/coord.php');
                ?>
            </div>
            <div class="tab-pane fade pt-3" id="reglement" role="tabpanel" aria-labelledby="pills-profile-tab">
                <?php
                include('./modules/ficheClient/vue/reglement.php');
                ?>
            </div>
            <div class="tab-pane fade pt-3" id="notes" role="tabpanel" aria-labelledby="pills-contact-tab">
                <?php
                include('./modules/ficheClient/vue/note.php');
                ?>
            </div>
        </div>
    </div>
</div>
<script src='./modules/ficheClient/js/fiche.js'></script>
