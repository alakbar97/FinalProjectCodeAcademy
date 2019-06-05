$(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open1');
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open1');
        });
});




 $(".arrow").hover(
    function(){
     $(this).addClass("animated fadeInLeft").css("opacity","1");
 })




 $("#exampleModal").on('hidden.bs.modal', function (e) {
    $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})