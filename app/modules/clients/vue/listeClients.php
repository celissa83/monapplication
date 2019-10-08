<style>
    .selected{
        background-color: #abb9d3;
    }
</style>
<div class="row">
    <div class="col-md-12">
        <div class="card card-fluid card-light">
            <div class="card-header">
                <div class="col-xl-9 col-md-6">
                    <h5 class="card-title">Liste des clients</h5>
                </div>
                <div class='col-xl-3 col-md-6 pull-right' style="padding-right:35px">
                    <button type='button' class='btn btn-primary pull-right pr-4' id='envoiMail'>
                        <i class="material-icons mr-2">mail</i>
                        Envoyer mail</button>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card-body">
                    <div class="table-responsive style-scroll table-sm">
                        <table class="table  table-bordered table-sm" id="dataListClients" cellspacing="0" width="100%" style="min-width: 500px">
                            <thead>
                                <tr>
                                    <th><input name="select_all" value="1" id="example-select-all" type="checkbox" class="text-center" /></th>
                                    <th>Raison sociale</th>
                                    <th>N° Client</th>
                                    <th>Statut</th>
                                    <th>Contact</th>
                                    <th>Téléphone</th>
                                    <th>Mail</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="./modules/clients/js/listeClients.js"></script>
<style>
    tr {
        background-color: none;
    }

    .green {
        background-color: rgba(134, 142, 150, 0.5) !important;

    }

    .ligneCouleur {
        color: #005cbf;
    }

    .disabled {
        pointer-events: none;
    }

    .ficheClient {
        cursor: pointer;
    }

</style>
