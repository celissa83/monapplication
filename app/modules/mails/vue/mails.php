<style>
    .select2-container--default .select2-results__option--highlighted[aria-selected] {
        background:#9E9E9E;
        color:white;
    }
       .select2-container--default .select2-selection--single{
        color: #000;
        font-size: 12px;
        border-radius: 0;
        border: 2px solid rgba(0,0,0,0.2);
        width: auto;
        height: 35px;
        line-height: 35px;
    }
    .select2-container--default .select2-selection--single .select2-selection__rendered {
        line-height: 30px;
        color:#ec3545;
    }
</style>
<div class="row">
    <div class="col-lg-3 col-md-4 pr-md-0">
        <div class="card card-light card-justify">
            <div class="box-mail">
                <div class="col-lg-12">
                    <button class="btn btn-lg btn-block btn-primary" style="cursor:default"><i class="material-icons">edit</i></button>
                </div>
                <nav class="nav flex-column d-md-block">
                    <label class="col-md-12 col-form-label">Mail</label>
                    <div class="col-md-12">
                        <input type="text" class="form-control email " id="mailExpe" placeholder="mail expéditeur" id="mailProfil">
                    </div>
                    <label class="col-form-label col-md-12">Nom</label>
                    <div class="col-md-12">
                        <input class="form-control mailo" id="nomExpe" placeholder="nom expéditeur">
                    </div>
                    <label class="col-md-12 col-form-label">Objet</label>
                    <div class="col-md-12">
                        <input class="form-control" placeholder="objet du mail" id="objetMail">
                    </div>
                    <div class="w-100 border-bottom mt-4"></div>
                </nav>
                <div class="col-md-12 mt-4">
                    <div class="card">
                        <div class="card-header bg-danger card-dark">
                            <span class="card-title">Liste des variables</span>
                        </div>
                        <div class="card-body">
                            <table class="mt-2 col-md-12 col-xl-12 table-responsive">
                                <tr>
                                    <td>{raison}</td>
                                    <td>-></td>
                                    <td>Raison sociale</td>
                                </tr>
                                <tr>
                                    <td>{id}</td>
                                    <td>-></td>
                                    <td>Identifiant</td>
                                </tr>
                                <tr>
                                    <td>{mdp}</td>
                                    <td>-></td>
                                    <td>Mot de passe</td>
                                </tr>
                                <tr>
                                    <td>{civilite}</td>
                                    <td>-></td>
                                    <td>Civilité</td>
                                </tr>
                                <tr>
                                    <td>{nom}</td>
                                    <td>-></td>
                                    <td>Nom</td>
                                </tr>
                                <tr>
                                    <td>{prenom}</td>
                                    <td>-></td>
                                    <td>prenom du contact</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-9 col-md-8 pl-md-0">
        <div class="card card-light card-justify">
            <div class="box-mail">
                <div class="box-mail">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="col-sm-8 col-md-6 col-lg-5">
                                <select class="inputSelect2" id="selectMail">
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-body">
                                <div class="summerNote"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-2 col-form-label">Adresse mail</label>
                        <div class="col-lg-5">
                            <input class="form-control" id="testMail">
                        </div>
                        <div class="col-lg-3">
                            <button type="button" class="btn btn-primary" id="testerMail">Tester le mail</button>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <div class="card-body">
                            <button type="button" class="btn btn-primary pull-right mb-2" id="validMail">
                                <i class="icon-md material-icons mr-1">save</i>Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--<script src="./assets/js/fonctionsGeneriques.js"></script>-->
<script src="./modules/mails/js/mails.js">
