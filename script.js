$(function(){
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);


    $(window).on("scroll load resize", function(){
        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();
        checkScroll(scrollPos, introH);
    })
    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    $("[data-scroll]").on("click", function(ev){
        ev.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 500);
    })
    navToggle.on("click", function(ev){
        ev.preventDefault();

        nav.toggleClass("show");
    })
});