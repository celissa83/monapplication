//initialisation des variables

var idcontact = $('#idContact').val();
var idRaison = $('#idRaisSoc').val();

//attente du DOM

$(document).ready(function () {

//affichage sur menu gauche raison sociale & nom prénom
    getInfoProfil(idcontact).done(function (listProfil) {
  $('#nomUtili').html(listProfil.nomContact + ' ' + listProfil.PrenomContact);
        $('.nomUtilisat').html(listProfil.nom + ' ' + listProfil.prenom);
        $('#raisonSoc').html(listProfil.raisonSociale);
         $('#nomUser').html(listProfil.nomContact + ' ' + listProfil.PrenomContact);
    });

//affichage des modules

    var ulListe = $("#menuModules");
    getModules().done(function (listModules) {
        $(listModules).each(function (key, modules) {
            var ulMod = $('#menuModules');
            var cible = modules.module;
            var texte = modules.lblModule;
            ulMod.append('<li><a class="redirection nav-link" href="index.php?page=' + cible + ' " >\n\
<i class="fa fa-angle-right mr-2 text-white"></i>\n\
<span class="link-text modules">' + texte + '</span> </a> </li>');
        } );
    });

    //end chargement DOM
});

function getModules() {
    return $.getJSON('./modules/index/model/menuModules.php');
}
function getInfoProfil(ident) {
    return $.getJSON('./modules/parametrages/model/getOneProfil.php?id=' + ident);
}

