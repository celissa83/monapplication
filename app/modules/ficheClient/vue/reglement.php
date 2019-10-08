<div class="container-fluid">
    <div class="row">
        <div class="col-lg-5 col-md-4">
            <div class="card card-light card-justify">
                <div class="card-header">
                    <h6 class="text-primary">Mode de paiement</h6>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <div class="form-group row">
                            <label class="col-xl-5 col-form-label">Mode de paiement</label>
                            <div class="col-xl-7 col-md-3">
                                <select id="chxModePaiement" class="form-control custom-select">
                                    <option value="1">
                                        Prélèvement
                                    </option>
                                    <option value="2">
                                        Virement
                                    </option>
                                    <option value="cheque">
                                        Chèque
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row" id="prelSepa">

                            <div class="offset-xl-10 col-xl-2 col-form-label">
                                <button type="button" class="btn btn-danger btn-sm pull-right" id="validerSepa">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="card card-light card-justify">
                <div class="card-header">
                    <h6 class="text-primary">Coordonnées bancaires</h6>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <div class="form-group row" id="prel">
                            <label class="col-xl-1 col-form-label">IBAN</label>
                            <div class="col-xl-4">
                                <input id="val_iban" class="form-control">
                            </div>
                            <label class="col-xl-2 col-form-label">BIC</label>
                            <div class="col-xl-3">
                                <input id="val_bic" class="form-control " type="text">
                            </div>
                            <div class="col-xl-2 ">
                                <button type="button" class="btn btn-primary btn-sm  pull-right mt-1" id="btnIban">Vérifier IBAN</button>
                            </div>
                        </div>
                        <div class="form-group row" id="sepa">
                            <label class="col-xl-1 col-form-label">N° rum</label>
                            <div class="col-xl-4">
                                <input id="rum" class="form-control">
                            </div>
                            <label class="col-xl-2 col-form-label">Date signature</label>
                            <div class="col-xl-3">
                                <input id="dateSign" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="card card-light card-justify">
                <div class="card-header">
                    <h6 class="text-primary">Edition des factures</h6>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <fieldset id="editionFact">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-check-inline">
                                        <input id="cb_factMail" class="form-check-input" type="checkbox">
                                        <label class="form-check-label col-form-label">Facture par email</label>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-check-inline">
                                        <input id="cb_detailPdf" class="form-check-input" type="checkbox">
                                        <label class="form-check-label col-form-label">Inclure détail PDF</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-check-inline">
                                        <input id="cb_factPapier" class="form-check-input" type="checkbox">
                                        <label class="form-check-label col-form-label">Impression Papier pour client</label>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-check-inline">
                                        <input id="cb_masqueNum" class="form-check-input" type="checkbox">
                                        <label class="form-check-label col-form-label">Mail de réception</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
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
