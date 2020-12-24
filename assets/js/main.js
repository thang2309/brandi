$(document).ready(function() {
    $(".hide-menu-btn").click(function() {
        $(".header__menu").fadeOut();
    })
})

$(document).ready(function() {
    $(".show-menu-btn").click(function() {
        $(".header__menu").fadeIn();
    })
})


$('a[href*="#"]')
    .not('[href="#"]')
    .click(function(e) {
        var data_id = $(this).attr('href');
        console.log(data_id);
        $('html , body').animate({
            scrollTop: $(data_id).offset().top
        }, 500);
    })