<style>
    .note-card .note-box-aside {
        border-right: 1px solid #ddd;
    }
    .btn-group, .btn-group-vertical {
        display:inline-block;
    }
</style>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-4 col-md-4">
            <div class="card card-light card-justify">
                <div class="box-file">
                    <div class="card-header">
                        <h6 class="text-primary">Vos notes</h6>
                    </div>
                    <div class="row">
                        <div class="col-xl-2">
                            <i class="fa fa-file-text  ml-2 mt-4 text-primary" style="font-size: 35px"></i></div>
                        <div class="col-xl-10">
                            <input class="form-control mt-4" type="search" id="searchNote" placeholder="Chercher note">
                        </div>
                    </div>
                    <div class="notes-list mt-3">
                        <ul id="Note-list" class="Note-list list-group"></ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-8 col-md-8 pl-md-0">
            <div class="card card-light card-justify">
                <div class="box-file">
                    <div class="card-header">
                        <h6 class="text-primary">Créer une note</h6>
                    </div>
                    <div class="card-body">
                        <div class="Note-created">
                            <div class="form-group row mt-2">
                                <label class="col-xl-2 col-form-label">Titre de la note</label>
                                <div class="col-xl-4 mb-2 mt-1">
                                    <input class="form-control" id="nomNotes">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="note-write">
                                    <div class="summerNote"></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-mini btn-primary hidden-xs mt-3 pull-right" id="btnAjtNote">Ajoutez la note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script scr="./modules/ficheClient/js/note.js"></script>
