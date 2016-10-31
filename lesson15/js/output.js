function AjaxFormRequest(result_id,form_id,url) {
    jQuery.ajax({
        url:     url, //Адрес подгружаемой страницы
        type:     "POST", //Тип запроса
        dataType: "html", //Тип данных
        data: jQuery("#"+form_id).serialize(),
        success: function(response) { //Если все нормально
            document.getElementById(result_id).innerHTML = response;
        },
        error: function(response) { //Если ошибка
            document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
        }
    });
}
$(document).ready(function() {
    $('.field input').keyup(function() {

        var empty = false;
        $('.field input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('.actions input').attr('disabled', 'disabled');
        } else {
            $('.actions input').removeAttr('disabled');
        }
    });
    function ActionWrongLink() {
        $("#link-wrong").click(function () {
            var login = document.getElementById('login').innerHTML;
            var name = document.getElementById('name').innerHTML;
            var surname = document.getElementById('surname').innerHTML;

            document.getElementById('input-login').value = login;
            document.getElementById('input-surname').value = surname;
            document.getElementById('input-name').value = name;

            document.getElementById('php-output').style.display = 'none';
        });
    }
    function WellDone() {
        $("#welldone").click(function () {
            document.body.innerHTML = "<h1 class='text-center'>Спасибо за регистрацию! <span class='fa fa-cog fa-spin icon'></span></h1>" +
                "<div class='fin-links text-center'>" +
                "<ul>" +
                "<li>" +
                "<a href='/lesson15' class='btn btn-primary'>Зарегистрировать еще</a>" +
                "</li>" +
                "<a href='#' onclick='window.close();' class='btn btn-primary'>Закрыть вкладку</a>" +
                "</li>" +
                "</ul>"
            "</div>"

        });
    }
    WellDone();
    ActionWrongLink();
});

