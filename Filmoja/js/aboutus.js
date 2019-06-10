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


function openNav() {
    document.getElementById("mySidepanel").style.width = "auto";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
