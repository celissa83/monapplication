$(document).ready(function () {
    $('#file').on('change', function () {
        var description = $('#desc').val();
        var files = event.target.files;
        var name = files[0].name.split('.');
        nom = name[0];
        var size = files[0].size;
        var fichier = '<div class="d-flex align-items-center">\n\
                    <div class="snazzy-file snazzy-file-lg snazzy-file-indigo mx-1 h6">ZZ</div>\n\
                    <span class="ml-3">' + nom + '</span>\n\
                    </div>'
        size = size /(1024*1024);
        size  = parseFloat(size).toFixed(2);
        var type = name[1];
        type = type.toUpperCase();
        var tr = $('<tr>');

        var td = $('<td>');
        td.html(fichier);
        td.appendTo(tr)

        var td = $('<td>');
        td.html(type);
        td.appendTo(tr)

        var td = $('<td>');
        td.html(description);
        td.appendTo(tr);

        var td = $('<td>');
        td.html(size +'MO');
        td.appendTo(tr)

        var td = $('<td>');
        td.html(formatDate());
        td.appendTo(tr);

        tr.appendTo('#tableDoc');

    });

});

function formatDate() {
    var dateDuJour = new Date();
    dateDuJour.getDate();
    var dateDuJour = dateDuJour.toLocaleDateString("fr-FR");
    var reDate = dateDuJour.replace(/\//g, "-"); //voir avec le datepicker
    return reDate;
}
