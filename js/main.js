(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

function translateToEnglish(){
    translateHomePage("eng");
}

function translateToSerbian(){
    translateHomePage("srb");
}

function translateHomePage(language){
    var documentTexts;
    if(language == "eng"){
        documentTexts = new HomeTranslations();  
    }
    else {
        documentTexts = new HomeSRBTexts();
    }
    
    document.getElementById("indexTextId8").innerText = documentTexts.IndexTextId8;

    document.getElementById("workingTimeId").innerText = documentTexts.WorkingTimeId;   
    document.getElementById("indexHomePageId").innerText = documentTexts.IndexHomePageId;
    document.getElementById("indexAboutPageId").innerText = documentTexts.IndexAboutPageId;
    document.getElementById("indexServicePageId").innerText = documentTexts.IndexServicePageId;
    document.getElementById("indexContactPageId").innerText = documentTexts.IndexContactPageId;
    document.getElementById("indexTextReadMoreId1").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId2").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId3").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId4").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId5").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId6").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId7").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextReadMoreId8").innerText = documentTexts.IndexTextReadMoreId;
    document.getElementById("indexTextId1").innerText = documentTexts.IndexTextId1;
    document.getElementById("indexTextId2").innerText = documentTexts.IndexTextId2;
    document.getElementById("indexTextId3").innerText = documentTexts.IndexTextId3;
    document.getElementById("indexTextId4").innerText = documentTexts.IndexTextId4;
    document.getElementById("indexTextId5").innerText = documentTexts.IndexTextId5;
    document.getElementById("indexTextId6").innerText = documentTexts.IndexTextId6;
    document.getElementById("indexTextId7").innerText = documentTexts.IndexTextId7;
    document.getElementById("indexTextId8").innerText = documentTexts.IndexTextId8;
    document.getElementById("indexTextId9").innerText = documentTexts.IndexTextId9;
    document.getElementById("indexTextId10").innerText = documentTexts.IndexTextId10;
    document.getElementById("indexTextId11").innerText = documentTexts.IndexTextId11;
    document.getElementById("indexTextId12").innerText = documentTexts.IndexTextId12;
    document.getElementById("indexTextId13").innerText = documentTexts.IndexTextId13;
    document.getElementById("indexTextId14").innerText = documentTexts.IndexTextId14;
    document.getElementById("indexTextId15").innerText = documentTexts.IndexTextId15;
    document.getElementById("indexTextId16").innerText = documentTexts.IndexTextId16;
    document.getElementById("indexTextId17").innerText = documentTexts.IndexTextId17;
    document.getElementById("indexTextId18").innerText = documentTexts.IndexTextId18;
    document.getElementById("indexTextId19").innerText = documentTexts.IndexTextId19;
    document.getElementById("indexTextId20").innerText = documentTexts.IndexTextId20;
    document.getElementById("indexTextId21").innerText = documentTexts.IndexTextId21;
    document.getElementById("indexTextId22").innerText = documentTexts.IndexTextId22;
    document.getElementById("indexTextId23").innerText = documentTexts.IndexTextId23;
    document.getElementById("indexTextId24").innerText = documentTexts.IndexTextId24;
    document.getElementById("indexTextId25").innerText = documentTexts.IndexTextId25;
    document.getElementById("indexTextId26").innerText = documentTexts.IndexTextId26;
    document.getElementById("indexTextId27").innerText = documentTexts.IndexTextId27;
    document.getElementById("indexTextId28").innerText = documentTexts.IndexTextId28;
    document.getElementById("indexTextId29").innerText = documentTexts.IndexTextId29;
    document.getElementById("indexTextId30").innerText = documentTexts.IndexTextId30;
    document.getElementById("indexTextId31").innerText = documentTexts.IndexTextId31;
    document.getElementById("indexTextId32").innerText = documentTexts.IndexTextId32;
    document.getElementById("indexTextId33").innerText = documentTexts.IndexTextId33;
    document.getElementById("indexTextId34").innerText = documentTexts.IndexTextId34;
    document.getElementById("indexTextId35").innerText = documentTexts.IndexTextId35;
    document.getElementById("indexTextId36").innerText = documentTexts.IndexTextId36;
    document.getElementById("indexTextId37").innerText = documentTexts.IndexTextId37;
    document.getElementById("indexTextId38").innerText = documentTexts.IndexTextId38;
    document.getElementById("indexTextId39").innerText = documentTexts.IndexTextId39;
    document.getElementById("indexTextId40").innerText = documentTexts.IndexTextId40;
    document.getElementById("indexTextId41").innerText = documentTexts.IndexTextId41;
    document.getElementById("indexTextId42").innerText = documentTexts.IndexTextId42;
    document.getElementById("indexTextId43").innerText = documentTexts.IndexTextId43;
    document.getElementById("indexTextId44").innerText = documentTexts.IndexTextId44;
    document.getElementById("indexTextId45").innerText = documentTexts.IndexTextId45;
    document.getElementById("indexTextId46").innerText = documentTexts.IndexTextId46;
    document.getElementById("indexTextId47").innerText = documentTexts.IndexTextId47;
    document.getElementById("indexTextId48").innerText = documentTexts.IndexTextId48;
    document.getElementById("indexTextId49").innerText = documentTexts.IndexTextId49;
    document.getElementById("indexTextId50").innerText = documentTexts.IndexTextId50;
    document.getElementById("indexTextId51").innerText = documentTexts.IndexTextId51;
    document.getElementById("indexTextId52").innerText = documentTexts.IndexTextId52;
    document.getElementById("indexTextId53").innerText = documentTexts.IndexTextId53;
}

