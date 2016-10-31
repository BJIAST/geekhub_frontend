<?php

$login = $_POST['login'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$sex = $_POST['sex'];

$dateNow = date(Y);
$birthday = $_POST['age'];
$level = $dateNow-$birthday;

if ($sex = 1){
    $sex = "Мужчина";
}else {
    $sex = "Женщина";
}
?>

<?php
if (isset($_POST["name"])) {
    echo "<h3>Ваши данные:</h3>";
    echo "<pre>";
    echo "Здравствуйте, " . "<span id='surname'>" .$surname . "</span> " . "<span id='name'>". $name ."</span>.";
    echo "<br>Ваш логин: <span id='login'>" . $login . "</span>";
    echo "<br>" . $sex ." возраста ". $level . " лет, верно?";
    echo "</pre>";
    echo "<a id='welldone' class='btn btn-primary link'>Верно</a>";
    echo "<a class='link' id='link-wrong'>Что-то пошло не так</a>";
}
?>
