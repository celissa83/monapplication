
<div class="row">
    <div class="col-lg-3 col-md-4 pr-md-0">
        <div class="card card-light card-justify card-fluid">
            <div class="box-file">
                <nav class="nav flex-column d-md-block">
                 <div class="form-group row">
                  <label class="col-md-3 col-form-label">Description</label>
                  <div class="col-md-9">
                   <input class="form-control" id="desc">
                    </div>
                                 </div>
                    <a class="nav-link active" href="#"><i class="material-icons">file_download</i><span class="nav-title mr-3">Télécharger</span><input type="file" class="form-control-file" id="file"></a>
                    <a class="nav-link"><i class="material-icons">folder</i><span class="nav-title">Drive</span></a>


                    <div class="w-100 border-bottom"></div>
                    <a class="nav-link" href="#"><i class="material-icons">delete</i><span class="nav-title">Supprimer</span></a>

                    <div class="m-3">
                        <p class="mb-2 text-muted small">2 Task in progress</p>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 90%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="w-100 border-bottom"></div>
                    <div id="storage" style="max-width: 230px"></div>
                    <div class="mx-3 mt-4">
                        <h6>16 GB utilisés / 4 GB libres</h6>
                        <p>Lorem ipsum dolor sit amet pes</p>
                        <button class="btn btn-wave-light btn-primary text-white btn-block">Acheter de l'espace</button>
                    </div>
                </nav>

            </div>
        </div>
    </div>
    <div class="col-lg-9 col-md-8 pl-md-0">
        <div class="card card-light card-justify">
            <div class="box-file py-0">
                <div class="table-responsive style-scroll">
                    <table class="table table-semi-bordered" style="min-width: 600px;">
                        <thead>
                            <tr class="py-2">
                                <th>Titre</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Taille</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody id="tableDoc">

                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="snazzy-file snazzy-file-lg snazzy-file-indigo mx-1 h6">W</div>
                                        <span class="ml-3">file_15</span>
                                    </div>
                                </td>
                                <td>DOCX</td>
                                <td>Mon doc</td>
                                <td>800 KB</td>
                                <td>30-01-2018</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="snazzy-file snazzy-file-lg snazzy-file-red mx-1"><img src="assets/img/file/pdf.png" width="24" /></div>
                                        <span class="ml-3">fact_2017</span>
                                    </div>
                                </td>
                                <td>PDF</td>
                                <td>Facture compta</td>
                                <td>5 MB</td>
                                <td>04-05-2018</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="snazzy-file snazzy-file-lg snazzy-file-blue mx-1 h6">Ps</div>
                                        <span class="ml-3">Photo</span>
                                    </div>
                                </td>
                                <td>PSD</td>
                                <td>Ma photo de profil</td>
                                <td>2.3 MB</td>
                                <td>20-09-2018</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="snazzy-file snazzy-file-lg snazzy-file-pink mx-1"><i class="material-icons icon-md">music_note</i></div>
                                        <span class="ml-3">music_1536</span>
                                    </div>
                                </td>
                                <td>MP3</td>
                                <td>Essai de musique</td>
                                <td>9.6 MB</td>
                                <td>02-06-2018</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="./modules/documents/js/documents.js"></script>
