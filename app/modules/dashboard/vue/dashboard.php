    <div class="row">
        <div class="col-xl-3 col-sm-6">
            <div class="card card-dark bg-danger drag">
                <div class="card-body d-flex">
                    <i class="display-2 material-icons">people</i>
                    <div class="ml-auto align-self-center text-right">
                        <span class="card-title mb-1">Clients</span>
                        <h3 class="card-title font-montserrat mb-0">800 k</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6">
            <div class="card card-dark bg-dark drag">
                <div class="card-body d-flex">
                    <i class="display-2 material-icons">mail</i>
                    <div class="ml-auto align-self-center text-right">
                        <span class="card-title mb-1">Messages</span>
                        <h3 class="card-title font-montserrat mb-0">200 k</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6">
            <div class="card card-dark bg-info drag">
                <div class="card-body d-flex">
                    <i class="display-2 material-icons">shopping_basket</i>
                    <div class="ml-auto align-self-center text-right">
                        <span class="card-title mb-1">Commandes</span>
                        <h3 class="card-title font-montserrat mb-0">100 k</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-sm-6">
            <div class="card card-dark bg-primary drag">
                <div class="card-body d-flex">
                    <i class="display-2 material-icons">trending_up</i>
                    <div class="ml-auto align-self-center text-right">
                        <span class="card-title mb-1">Profit</span>
                        <h3 class="card-title font-montserrat mb-0">120 k</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class='row'>
        <div class="col-xl-3">
            <div class='row'>
                <div class="col-xl-12 col-sm-6 drag">
                    <div class="drag">
                        <div class="card">
                            <div id="calendar-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class='col-md-9'>
            <div class="drag">
                <div class="card card-light">
                    <div class="card-header">
                        <h6 class="card-title">Chiffre du mois</h6>
                    </div>
                    <div class="card-body">
                        <canvas id="bar-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $('.drag').draggable();

        });
    </script>