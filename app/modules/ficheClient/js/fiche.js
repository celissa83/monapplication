$(document).ready(function () {

    //récupération du numéro client et ajout dans la page coordonnées
    var chemin = window.location.search;
    var cheminBis = chemin.split('idClient=');
    var idClient = cheminBis[1];
    $('#numClient').html(idClient);


   /* $('.summerNote').summernote({
        "focus": true,
        "lang": "fr-FR",
        "minHeight": 300,
        "maxHeight": 300
    });*/

    //formulaire
    $('.input').focus(function () {
        $(this).parent().find(".label-txt").addClass('label-active');
    });

    $(".input").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".label-txt").removeClass('label-active');
        };
    });

     //btn ajout note
    $('#btnAjtNote').on('click', function () {
        var data = {};
        data.title = $('#nomNotes').val();
        data.content = $('#Note-pad').val();
        console.log(data.content);
          console.log(data.title);
        formatDate();
        createNote(data);
    });

//suppression note
    $('#Note-list').on('click', '.Note-delete', function (e) {
        e.preventDefault();
        //($(this).data('name'));
        $(this).parent().remove();
    });

    //end chargement DOM
});

//date du jour
function formatDate() {
    var dateDuJour = new Date();
    dateDuJour.getDate();
    var dateDuJour = dateDuJour.toLocaleDateString("fr-FR");
    return dateDuJour;
}

//mise en forme content note
function _escapeHtml(html) {
    return $('<div />').text(html).html();
}

//créer la note
function createNote(data) {
    var ul = $('#Note-list');
    var liNote = '<li class="list-group-item bg-primary text-justify">'
            + '<button class="Note-delete pull-right"type="button">x</button><br>'
            + '<div class="Note" name="">'
            + '<div class="Note__name text-white mt-2">' + _escapeHtml(data.title) + '</div>'
            + '<div class="Note__desc text-white">' + data.content + '</div>'
            + '<span class="Note__date text-white">' + "note du " + formatDate() + '</span>'
            + '</div>'
            + '</li><br>';
    ul.append(liNote);
}
