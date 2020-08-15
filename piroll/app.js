$(function(){

    // Fixex header 
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop()
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos >= introH-60){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    })

    

    // Smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700)
    });



    // Nav Toggle
    navToggle.on("click", function(){
        event.preventDefault();

        nav.toggleClass("show");
    });



    // Testimonials
    let slider = $("#testimonialsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

})