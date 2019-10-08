$(document).ready(function () {
    $('.email').inputmask();
    $('#connexion').on('click', function () {
        var email = $('#email').val();
        var mdp = $('#mdp').val();
        if (!mdp) {
            $.notify('Veuillez saisir votre mot de passe', {
                type: "danger"
            });
        }
        if (!email) {
            $.notify('Veuillez saisir votre email', {
                type: "danger"
            });
        }
        if (email && mdp) {


            $.ajax({
                url: './ajax/connexion.php',
                type: 'POST',
                dataType: 'text',
                data: 'email=' + email + '&mdp=' + mdp,
                success: function (response) {
                    if (response === 'ok') {
                        var url = './index.php';
                        window.location = url;
                    } else {
                        $.notify(response, {
                            type: "danger"
                        })
                    }

                }
            });

        }
    });
});