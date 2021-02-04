//При клике по panel-wrapper добавляется box-shadow
$(".panel-wrapper").click(function () {
    $(".panel-wrapper").removeClass('line');
    $(this).addClass('line');
});

//После клика по main-form-block-declarant-btn становится доступным блок main-form-block-data-wrapper
//Меняется background у main-form-block-data-second
//Меняется цвет шрифта у main-form-block-data-second-h2
$(".main-form-block-declarant-btn").click(function () {
    $(".main-form-block-data-wrapper").css("pointer-events", "painted");
    $(".main-form-block-data-second").css("background-color", "#0061D9");
    $(".main-form-block-data-second-h2").css("color", "#3B4256");
    $(".main-form-block-data-wrapper-panel").removeClass("panel");
    $(".main-form-block-declarant-panel").addClass("panel-declarant-none");
});

//Реализация аккордеона для блока main-form-block-declarant-wrapper
$(".main-form-block-declarant-wrapper").click(function () {
    $(".main-form-block-declarant-panel").toggleClass('panel-declarant-none');
});

//Реализация аккордеона для блока main-form-block-data-wrapper
$(".main-form-block-data-wrapper").click(function () {
    $(".main-form-block-data-wrapper-panel").toggleClass('panel');
});


//После клика по main-form-block-data-btn становится доступным блок main-form-block-consent-wrapper
//Меняется background у main-form-block-consent-third
//Меняется цвет шрифта у main-form-block-consent-third-h2
//После нажатия на кнопку закрываем блок main-form-block-data-wrapper-panel и открываем main-form-block-consent-wrapper-panel
$(".main-form-block-data-btn").click(function () {
    $(".main-form-block-consent-wrapper").css("pointer-events", "painted");
    $(".main-form-block-consent-third").css("background-color", "#0061D9");
    $(".main-form-block-consent-third-h2").css("color", "#3B4256");
    $(".main-form-block-data-wrapper-panel").addClass("panel");
    $(".main-form-block-consent-wrapper-panel").removeClass("panel");
});

//Реализация аккордеона для блока main-form-block-consent-wrapper-panel
$(".main-form-block-consent-wrapper").click(function () {
    $(".main-form-block-consent-wrapper-panel").toggleClass('panel');
});

//При клике по panel-wrapper добавляется box-shadow
$(".notification").click(function () {
    $(".notification").toggleClass('line');
});

//Добавление svg флажка для пункта confirm
$('.confirm label').click(function () {
    $('.confirm input[type="checkbox"]:checked + span *').html("<img src='img/vector.svg' alt='vector'>").toggle();
});
//Добавление svg флажка для пункта notification
$('.notification label').click(function () {
    $('.notification input[type="checkbox"]:checked + span *').html("<img src='img/vector.svg' alt='vector'>").toggle();
});



//Добавление svg флажков для заголовков
$('.main-form-block-declarant-btn').click(function () {
    $('.main-form-block-declarant-first').html("<span class='main-form-block-declarant-first'><img src='img/vector.svg' alt='vector'></span>");
    $('.main-form-block-declarant-first').css("background-color", "#1BC400");
});

$('.main-form-block-data-btn').click(function () {
    $('.main-form-block-data-second').html("<span class='main-form-block-data-second'><img src='img/vector.svg' alt='vector'></span>");
    $('.main-form-block-data-second').css("background-color", "#1BC400");
});

//Добавление флажка выполнения пункта в блоке main-form-block-consent-third
//Меняется background у main-form-block-consent-third
//Скрываются блоки main-form-block-declarant, main-form-block-data, main-form-block-consent
//Скрывается блок main-form-block-data
//Открывается блок form-sent
$('.main-form-block-consent-btn').click(function () {
    $('.main-form-block-consent-third').html("<span class='main-form-block-consent-third'><img src='img/vector.svg' alt='vector'></span>");
    $('.main-form-block-consent-third').css("background-color", "#1BC400");
    $('.main-form-block-declarant').css("display", "none");
    $('.main-form-block-data').css("display", "none");
    $('.main-form-block-consent').css("display", "none");
    $('.form-sent').css("display", "block");
});

/*
Тут извините, боролся с нерабочим required как мог, в общем я решил при клике по main-form-block-declarant-btn
блокировать кнопку main-form-block-data-btn, чтобы юзер дальше не пошел и начал заполнять форму.
*/

$('.main-form-block-declarant-btn').click(function () {
    if ($('input[value=""]')) {
        $('input[type=text],[type=tel],[type=email]').css('border', '1px solid red');
        $('.main-form-block-data-btn').css("pointer-events", "none");
    }
});

/*
А вот тут костыль ну или фича, как угодно. В общем пока он не дойдет до последнего поля не сможет пойти дальше.
*/
$('#year').click(function () {
    if ($('input[value=""]')) {
        $('input[type=text],[type=tel],[type=email]').css('border', '1px solid rgba(59, 66, 86, 0.5)');
        $('.main-form-block-data-btn').css("pointer-events", "painted");
    }
});