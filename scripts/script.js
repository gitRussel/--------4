$(document).ready(function(){
    $(".menu__link").on("click", function (e) {
        $(".menu__link").removeClass("menu__link_state_active");
        $(this).addClass("menu__link_state_active");

        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    });
});