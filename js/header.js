$(function () {
    $('header').mouseenter(function () {
        $('header').addClass('he')
    })
    $('header').mouseleave(function () {
        $('header').removeClass('he')
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1000) {
            $('.gotop').addClass('show')
        } else {
            $('.gotop').removeClass('show')
        }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop : 0
        },500)
    })
})