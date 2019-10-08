//chargment du dOM
$(document).ready(function () {

    //select2
    $('.inputSelect2').select2({
        width: '100%'
    });

    //insertion sélect variables dans summernote
    var barre = $('.note-toolbar');
    var newBtn = $('<div class="note-btn-group btn-group note-select">\n\
     <button type="button" class="note-btn btn btn-white btn-sm" tabindex="-1" data-toggle="dropdown">\n\
     <span>Variables</span><i class="fa fa-angle-down ml-2"></i></button>\n\
     <div class="dropdown-menu note-check"><a class="dropdown-item" href="#" data-value="{raison}">Raison sociale</a>\n\
     <a class="dropdown-item" href="#" data-value="{id}">Identifiant</a>\n\
     <a class="dropdown-item" href="#" data-value="{mdp}">Mot de passe</a>\n\
     <a class="dropdown-item" href="#" data-value="{nom}">Nom du contact</a>\n\
     <a class="dropdown-item" href="#" data-value="{prenom}">Prénom du contact</a>\n\
 </div>\n\
     \n\
     </div>');

    barre.append(newBtn);

    $('.dropdown-item').click(function () {
        var variables = $(this).attr('data-value');
        $('#summerNote').summernote('editor.saveRange');
        $('#summerNote').summernote('editor.restoreRange');
        $('#summerNote').summernote('editor.focus');
        $('#summerNote').summernote('editor.insertText', variables);
    });

    //affichage des options dans le sélect
    var listTypesMails = ['Mail client', 'Mail factures', 'Mail autres'];
    $('#modeleEmail').hide();
    var selectMail = $('#selectMail');
    var option = $('<option>');

    var mails = [{
            "type": "Mail factures",
            "nomExp": "Jean",
            "emailExp": "jean@testfr",
            "objet": "facture",
            "contenu": "&lt;h2 style=&quot;font-style:italic&quot;&gt;&lt;u&gt;&lt;em&gt;&lt;strong&gt;&lt;span class=&quot;marker&quot;&gt;balbala&lt;/span&gt;&lt;/strong&gt;&lt;/em&gt;&lt;/u&gt;&lt;/h2&gt;↵"
        },
        {
            "type": "Mail client",
            "nomExp": "Pierre",
            "emailExp": "pierre@testfr",
            "objet": "client",
            "contenu": "document"
        },
                   {
            "type": "Mail autres",
            "nomExp": "Martine",
            "emailExp": "mart@ff.com",
            "objet": "informations",
            "contenu": ""
        }
]


    selectMail.append((option).text("Sélectionnez le mail"));
    $(listTypesMails).each(function (idx, val) {
        option = $('<option>');
        selectMail.append((option).text(val));
    });

    $('#selectMail').on('change', function () {
        var selection = $('#selectMail option:selected').text();
        $(mails).each(function (id, val) {
            var typeMail = val.type;
            if(typeMail === selection){
                $('#nomExpe').val(val.nomExp);
            $('#mailExpe').val(val.emailExp);
            $('#objetMail').val(val.objet);
            $('#summerNote').summernote('code', val.contenu);
        }
        });

    });



});
