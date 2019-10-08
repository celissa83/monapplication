/*===================================================================================================

 - TEMPLATE : PROTOTIPO
 - DESCRIPTION : MODERN BOOTSTRAP 4 ADMIN TEMPLATE - FULLY RESPONSIVE
 - AUTHOR : SNAZZYSHEET (http://www.snazzysheet.com/)
 - VERSION : 1.0
 - FILE : PAEGS LOCK JS

 ===================================================================================================*/

$(document).ready(function () {

    //---------------------------------------------------------------------------------------------
    // - NOTIFICATION -----------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    $.notify("Password is : 0000", {align:"center", verticalAlign:"top",type:"info"});

    //---------------------------------------------------------------------------------------------
    // - FORM SUBMIT ------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    $('form').submit(function () {
        if ( $("#password").val()  !== '0000') {
            return false;
        }
    });

    //---------------------------------------------------------------------------------------------
    // - KEY UP TEST ------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    $("#password").keyup(function () {
        $("#form").submit();
    });

});