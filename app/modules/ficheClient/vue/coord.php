<link rel="stylesheet" href="./modules/ficheClient/vue/feuille.css">
<div class="container-fluid">
    <div class="row">
        <div class="col-xl-6">
            <div class="card card-light">
                <div class="card-header">
                    <h6 class="card-title text-primary mt-2">
                        Coordonnées client numéro
                        <span id="numClient" class="text-danger"></span>
                    </h6>
                </div>
                <div class="card-body">
                    <form>
                        <label class="newForm">
                            <p class="label-txt">Raison sociale</p>
                            <input type="text" class="input" id="raisonSoc">
                            <div class="line-box">
                                <div class="line"></div>
                            </div>
                        </label>
                        <label class="newForm">
                            <p class="label-txt">Adresse</p>
                            <input type="text" class="input" id="adresse">
                            <div class="line-box">
                                <div class="line"></div>
                            </div>
                        </label>
                        <label class="newForm">
                            <p class="label-txt">Complément adresse</p>
                            <input type="text" class="input" id="compAdre">
                            <div class="line-box">
                                <div class="line"></div>
                            </div>
                        </label>
                        <div class="form-group row mb-0">
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Code Postal</p>
                                    <input type="text" class="input" id="CP">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Ville</p>
                                    <input type="text" class="input" id="ville">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Pays</p>
                                    <input type="text" class="input" id="pays">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Téléphone</p>
                                    <input type="text" class="input" id="tel">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Mail</p>
                                    <input type="text" class="input" id="mail">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="col-xl-6">
            <div class="card card-light">
                <div class="card-header">
                    <h6 class="card-title text-primary mt-2">
                        Coordonnées contact
                    </h6>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group row mb-0">
                            <div class='col-xl-6'>
                                <label class="newForm">
                                    <p class="label-txt">Nom</p>
                                    <input type="text" class="input" id="tel">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                            <div class='col-xl-6'>
                                <label class="newForm">
                                    <p class="label-txt">Prénom</p>
                                    <input type="text" class="input" id="nomCont">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Mail</p>
                                    <input type="text" class="input" id="mailCont">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                            <div class='col-xl-6'>
                                <label class="mt-0 newForm">
                                    <p class="label-txt">Téléphone</p>
                                    <input type="text" class="input" id="telCont">
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card card-light">
                <div class="card-header">
                    <h6 class="card-title text-primary mt-2">
                        Statut
                    </h6>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <div class="form-group row">
                            <label class="col-xl-3 col-form-label">Statut</label>
                            <div class="col-xl-6"><select class="form-control custom-select">
                                    <option>Actif</option>
                                    <option>Inactif</option>
                                    <option>Prospect </option>
                                    <option>Archivé</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-light">
                <div class="card-header">
                    <h6 class="card-title text-primary mt-2">
                        Info
                    </h6>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <div class="form-group row">

                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-light">
                <div class="card-body">
                    <div class="col-xl-12">
                        <button type="button" class="btn btn-primary pull-right">Enregistrer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
