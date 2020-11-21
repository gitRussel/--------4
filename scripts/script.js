$(document).ready(function(){
    $(".menu__link").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    });

    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });

    $(window).scroll(function() {
        var windowScroll =   $(window).scrollTop();
        $(".menu__link").removeClass("menu__link_state_active");

        $(".section").each(function(){
            var elementTop = $(this).offset().top;
            var elementHeight = $(this).height();
            if(windowScroll >= elementTop && windowScroll < (elementTop + elementHeight)) {
                var itemId = $(this).attr("id");
                $("a[href='#" + itemId + "']").addClass("menu__link_state_active");
            }
        });
       
    });
});
