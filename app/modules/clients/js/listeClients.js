//chargement du DOM


function selectAll(table) {
    var $table = table.table().node();
    var $chkbox_all = $('tbody input[type="checkbox"]', $table);
    var $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table);
    var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

    // If none of the checkboxes are checked
    if ($chkbox_checked.length === 0) {
        chkbox_select_all.checked = false;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = false;
        }

        // If all of the checkboxes are checked
    } else if ($chkbox_checked.length === $chkbox_all.length) {
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = false;
        }

        // If some of the checkboxes are checked
    } else {
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = true;
        }
    }
}


$(document).ready(function () {
    var rows_selected = [];

    //remplissage data table
    var table = $('#dataListClients').DataTable({
        'stateSave': true,
        "searching": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        },
        "ajax": {
            "url": "./modules/clients/model/clients.json",
            "dataSrc": ""
        },
        /*"fnDrawCallback": function (settings) {
         totalLines = settings.aoData.length;
         },*/
        "columnDefs": [

            {
                "className": "text-right",
                "targets": 1
            },
            {
                "height": "3%"
            }
        ],
        "fnRowCallback": function (row, data) {
            var statut = data.Statut;
            if (statut === "Inactif") {
                $(row).addClass('text-danger');
            }
            if (statut === "Archivé") {
                $(row).addClass('text-info');
            }
        },
        "columnDefs": [{
            'targets': 0,
            'searchable': false,
            'orderable': false,
            'className': 'text-center',
            'width': '1%',
            'render': function (data, type, full, meta) {

                return '<input type="checkbox">';
            }
      }],

        'order': [[1, 'asc']],
        'rowCallback': function (row, data, dataIndex) {
            // Get row ID
            var rowId = data[0];

            // If row ID is in the list of selected row IDs
            if ($.inArray(rowId, rows_selected) !== -1) {
                $(row).find('input[type="checkbox"]').prop('checked', true);
                $(row).addClass('selected');
            }
        },

        "columns": [{
                data: ""
            },
              {data: null,
                render: function (data) {
                    var raison = data.raisonSociale;
                    var idClient = data.id;
                    var href = 'index.php?page=ficheClient&idClient=' + idClient;
                    var lien = '<a href=' + href + ' class="ficheClient" name=' + idClient + '>' + raison + ' </a>';
                    return lien;
                }
            },
            {
                data: "Numéro Client"
            },
            {
                data: "Statut"
            },
            {
                data: "Contact"
            },
            {
                data: "Téléphone"
            },
            {
                data: "email"
            }
        ]

    });

    $('#dataListClients tbody').on('click', 'input[type="checkbox"]', function (e) {
        var $row = $(this).closest('tr');

        //données de la ligne
        var data = table.row($row).data();

        //récupération de l'id
        var rowId = data[0];

        // vérifie si id de la ligne fig dans la liste des id des lignes sélectionnées
        var index = $.inArray(rowId, rows_selected);

        //si ligne est cochée et que id n'est pas dans la liste des lignes sélectionnées
        if (this.checked && index === -1) {
            rows_selected.push(rowId);

            //si ligne n'est pas cochée et que id est pas dans la liste des lignes sélectionnées
        } else if (!this.checked && index !== -1) {
            rows_selected.splice(index, 1);
        }

        if (this.checked) {
            $row.addClass('selected');
        } else {
            $row.removeClass('selected');
        }


        selectAll(table);

        // empêcher qu ele click se propage au parent
        e.stopPropagation();

    });


    $('#dataListClients').on('click', 'tbody td, thead th:first-child', function (e) {
        $(this).parent().find('input[type="checkbox"]').trigger('click');
    });

    //click sur tout sélectionner
    $('thead input[name="select_all"]', table.table().container()).on('click', function (e) {
        if (this.checked) {
            $('#dataListClients tbody input[type="checkbox"]:not(:checked)').trigger('click');
        } else {
            $('#dataListClients tbody input[type="checkbox"]:checked').trigger('click');
        }

        // empêcher que le click se propage au parent
        e.stopPropagation();
    });

    // Handle table draw event
    table.on('draw', function () {

        selectAll(table);
    });


    $('#envoiMail').on('click', function () {
        var countRow = table.rows('.selected').data().length + ' row(s) selected';
        if (countRow == '0 row(s) selected') {
            swal('Attention', 'Veuillez sélectionner au moins un client', 'warning');
        } else {
            swal({
                    buttons: ["Annuler", "Confirmer"],
                    title: "Confirmation",
                    text: "Confirmez-vous l'envoi de mail " + countRow + " (s)?",
                    icon: "warning",
                    dangerMode: true
                })

                .then((confirm) => {
                    if (confirm) {

                    } else {
                        swal("Annulation de votre demande confirmée !");
                    }
                });
        }

    });

    //end DOM
});
