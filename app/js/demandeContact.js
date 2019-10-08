$(document).ready(function () {
    $('#demandeContact').on('click', function () {
        $.ajax({
            url: './ajax/demandeContact.php',
            type: 'POST',
            dataType: 'text',
            data:{
                email: $('#emailContact').val(),
                nom : $('#nomContact').val(),
                contact : $('#contact').val(),
                message : $('#messageContact').val(),
            },
            success: function (response) {
                if (response === 'ok') {
                    var url = './index.php';
                    window.location = url;
                }
            }
        })
    });
});