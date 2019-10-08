//chargement du DOM

var urlFacture = "./modules/factures/model/getAllFactures.json";
var tablePeriode = [];

function selectPeriode() {
    return $.getJSON(urlFacture);
}

function selectAll(table) {
    var $table = table.table().node();
    var $chkbox_all = $('tbody input[type="checkbox"]', $table);
    var $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table);
    var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

    if ($chkbox_checked.length === 0) {
        chkbox_select_all.checked = false;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = false;
        }

    } else if ($chkbox_checked.length === $chkbox_all.length) {
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = false;
        }

    } else {
        chkbox_select_all.checked = true;
        if ('indeterminate' in chkbox_select_all) {
            chkbox_select_all.indeterminate = true;
        }
    }
}

$(document).ready(function () {

    //initialisation des variables
    var rows_selected = [];

    //filtre sur la pèriode : "sélectionnez la pèriode"
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var min = parseInt($('#min option:selected').val(), 10);
            var max = parseInt($('#max option:selected').val(), 10);
            var fact = parseFloat(data[1]) || 0;
            if ((isNaN(min) && isNaN(max)) ||
                (isNaN(min) && fact <= max) ||
                (min <= fact && isNaN(max)) ||
                (min <= fact && fact <= max)) {
                return true;
            }
            return false;
        }
    );

    //construction datatable
    var table = $('#dataFactures').DataTable({
        "processing": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        },
        "select": true,
        "ajax": {
            "url": urlFacture,
            "dataSrc": ""
        },
        "fnRowCallback": function (row, data) {
            var statut = data.statut;
            if (statut === "Non réglée") {
                $(row).addClass('text-danger');
            }
            if (statut === "Recouvrement") {
                $(row).addClass('text-warning');
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
            var rowId = data[0];
            if ($.inArray(rowId, rows_selected) !== -1) {
                $(row).find('input[type="checkbox"]').prop('checked', true);
                $(row).addClass('selected');
            }
        },

        "columns": [
            {
                data: ""
            },
            {
                data: "periode"
            },
            {
                data: "client"
            },
            {
                data: "numero"
            },
            {
                data: function (data) {
                    var montHT = data.montant;
                    var mont = parseFloat(montHT).toFixed(2);
                    return mont + '€';
                },
            },
            {
                data: "statut"
            },
        ],
    });
    //tri sur la pèriode
    $('#min, #max').change(function () {
        table.draw();
    });

    selectPeriode().done(function (listePeriode) {
        var option = $('<option>');
        $('#min').append((option).text('de'));

        var dateDebut = [];
        $(listePeriode).each(function (key, periode) {
            var tab = $.inArray(periode.periode, dateDebut);
            if (tab === -1) {
                dateDebut.push(periode.periode);
                option = $('<option>');
                $('#min').append((option).attr('value', periode.periode).text(periode.periode));
            }
        });
    });

    selectPeriode().done(function (listePeriode) {
        var option = $('<option>');
        $('#max').append((option).text('à'));
        var dateDebut = [];
        $(listePeriode).each(function (key, periode) {
            var tab = $.inArray(periode.periode, dateDebut);
            if (tab === -1) {
                dateDebut.push(periode.periode);
                option = $('<option>');
                $('#max').append((option).attr('value', periode.periode).text(periode.periode));
            }
        });
    });

    $('#dataFactures tbody').on('click', 'input[type="checkbox"]', function (e) {
        var $row = $(this).closest('tr');
        var data = table.row($row).data();
        var rowId = data[0];
        var index = $.inArray(rowId, rows_selected);
        if (this.checked && index === -1) {
            rows_selected.push(rowId);
        } else if (!this.checked && index !== -1) {
            rows_selected.splice(index, 1);
        }
        if (this.checked) {
            $row.addClass('selected');
        } else {
            $row.removeClass('selected');
        }

        selectAll(table);

        e.stopPropagation();

    });


    $('#dataFactures').on('click', 'tbody td, thead th:first-child', function (e) {
        $(this).parent().find('input[type="checkbox"]').trigger('click');
    });

    //click sur tout sélectionner
    $('thead input[name="select_all"]', table.table().container()).on('click', function (e) {
        if (this.checked) {
            $('#dataFactures tbody input[type="checkbox"]:not(:checked)').trigger('click');
        } else {
            $('#dataFactures tbody input[type="checkbox"]:checked').trigger('click');
        }
        e.stopPropagation();
    });

    table.on('draw', function () {
        selectAll(table);
    });

    $('#envoyerFact').on('click', function () {
        var countRow = table.rows('.selected').data().length + ' row(s) selected';
        console.log(countRow);
        if (countRow == '0 row(s) selected') {
          swal('Attention', 'Veuillez sélectionner au moins une facture', 'warning');


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
    })
    //end DOM
});
