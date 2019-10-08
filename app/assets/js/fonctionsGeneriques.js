$(document).ready(function () {

    //select2
    $('.inputSelect2').select2({
        width: '100%'
    });

    //initialisation summernote
    $('.summerNote').summernote({
        "focus": true,
        "lang": "fr-FR",
        "minHeight": 300,
        "maxHeight": 300
    });

    //date du jour
    function formatDate() {
        var dateDuJour = new Date();
        dateDuJour.getDate();
        var dateDuJour = dateDuJour.toLocaleDateString("fr-FR");
        var reDate = dateDuJour.replace(/\//g, "-"); //voir avec le datepicker
        return reDate;
    }

    //configuraion du datepicker
    $.datepicker.setDefaults({
        buttonImageOnly: true,
        altField: "#dateInstall",
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekHeader: 'Sem.',
        dateFormat: 'dd-mm-yy',
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 12); //Controls the size of the calendar.
        }
    });
});

//fontion de vérification des champs des formulaire
