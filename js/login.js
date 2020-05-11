$(document).ready(function () {
    $('#login_form').parsley();

    $('#login_form').on('submit', function () {
        $(this).parsley().validate();
        if($('#login_form').parsley().isValid()){
            return true;
        }else{
            console.log('wa');
        }
    });
    $('input').on('focusout', function () {
        if($('#login_form').parsley().isValid()){
            $('#errorwindow-login').css('display', 'none');
        }
    });
    $('#login_form').parsley().on('field:error', function() {
        if($('#errorwindow-login').css('display') == 'none'){
            $('#errorwindow-login').css('display', 'block');
            $('#errorwindow-login').text(translations.emptyfields);
        }
    });
});

