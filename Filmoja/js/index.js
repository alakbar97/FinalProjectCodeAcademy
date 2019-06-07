$('body').on('mouseenter mouseleave', '.dropdown-hover', function (e) {
    let dropdown = $(e.target).closest('.dropdown-hover');
    dropdown.addClass('show');

    setTimeout(function () {
        dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 300);
});

$('.mainNav a').on('click', function () {
    $('.mainNav').find('.active').removeClass('active');
    $(this).addClass('active');
});

$(".arrow").hover(
    function () {
        $(this).addClass("animated fadeInLeft").css("opacity", "1");
    })




$("#exampleModal").on('hidden.bs.modal', function (e) {
    $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
});



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})