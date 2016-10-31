<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>PHP + Form</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="js/output.js"></script>
</head>
<body>
<header>
    <div class="container text-center">
        <h1>Registration form</h1>
    </div>
</header>
<section id="main">
    <div class="container">
        <form  method="POST"  id="form_id" class="col-xs-12 col-md-6">
            <fieldset class="short">
                <legend>Регистрационные данные: </legend>
                <ul>
                    <li class="field">
                        <label>Логин: </label>
                        <input type="text" name="login" class="form-control" id="input-login" autocomplete="off">
                    </li>
                    <li class="field">
                        <label>Имя: </label>
                        <input type="text" name="name" class="form-control" id="input-name" autocomplete="off">
                    </li>
                    <li class="field">
                        <label>Фамилия: </label>
                        <input type="text" name="surname" id="input-surname" class="form-control" autocomplete="off">
                    </li>
                    <li class="field">
                        <label>Пол: </label>
                        <label class="form-control">
                            <input type="radio" name="sex" value="1">
                            мужской</label>
                        <label class="form-control">
                            <input type="radio" name="sex" value="2">
                            женский</label>
                    </li>
                    <li class="field">
                        <label>Дата рождения: </label>
                        <input type="date" name="age" class="form-control" autocomplete="off">
                    </li>
                </ul>
            </fieldset>
            <div class="actions">
                <input type="submit" id="submit" class="btn btn-primary" value="Зарегистрировать!"  onclick="AjaxFormRequest('result_div_id', 'form_id', 'output.php')" disabled="disabled" title="Пожалуйста, заполните все поля!">
            </div>
        </form>
        <div id="php-output" class="output col-xs-12 col-md-6">
            <?php
            include("output.php");
            ?>
        </div>
    </div>
</section>

</body>
</html>