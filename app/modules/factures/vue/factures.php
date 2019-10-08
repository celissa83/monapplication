<style>
    .colorPerso{
        color:#d12e41;
    }
    tr {
        background-color: none;
    }
    .green {
        background-color: rgba(134, 142, 150, 0.5) !important;

    }
    .disabled{
        pointer-events:none;
    }

    .selected{
        background-color: #abb9d3;
    }

</style>
<div class="row">
    <div class="col-xl-12">
        <div class="card card-fluid card-light">

            <div class="card-header">
                <div class="col-xl-8">
                    <h5 class ="text-primary card-title">Liste des factures</h5>
                </div>
            </div>
            <div class="container-fluid">
                <!--ligne sélectionnez la pèriode et envoyer factures-->
                <div class="card-header mb-2" style="border-bottom:none;margin-left:30px; margin-right: 30px;margin-top: 10px;
                     border-left: 5px solid #ef2b41;
                     background-color: rgba(0, 0, 0, 0.02);">
                    <div class="col-xl-8 col-md-6 col-sm-12">
                        <div class="form-group row mt-2">
                            <label class="col-form-label col-md-6 col-xl-4 col-sm-4 text-primary" style="font-size:14px">
                                <strong>Sélectionnez la période à afficher</strong>
                            </label>
                            <div class="col-md-3 col-xl-2 col-sm-4">
                                <select class="form-control form-control-sm inputSelect2" id="min"></select>
                            </div>
                            <div class="col-md-3 col-xl-2 col-sm-4">
                                <select  class="form-control form-control-sm inputSelect2" id="max"></select>
                            </div>
                        </div>
                    </div>
                    <span id="nbrSelect"></span>
                    <div class="col-xl-4 col-md-6 col-sm-12">
                        <div class='row pull-right'>
                            <div class='col-md-11 col-sm-11 col-xl-10'>
                                <label class='mt-2 text-primary' style="font-size:14px"><strong>Envoyer facture(s)</strong></label>
                            </div>
                            <div class='col-md-1 col-sm-1 col-xl-2'>
                                <button type='button' class='btn btn-primary pt-0 pb-0 pr-2 pl-2 btn-circle btn-sm pull-right' id="envoyerFact">
                                    <i class="material-icons">mail</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!--datatable-->
                <div class="card-body">
                    <div class="table-responsive style-scroll table-sm">
                        <table class="table table-bordered table-sm footer" id="dataFactures"
                               cellspacing="0" width="100%" style="min-width: 500px">
                            <thead>
                                <tr class="numeroFact">
                                    <th><input name="select_all" value="1" id="example-select-all" type="checkbox" class="text-center" /></th>
                                    <th>Période</th>
                                    <th>Client</th>
                                    <th>Numéro</th>
                                    <th>Montant</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script src='./modules/factures/js/factures.js'></script>
