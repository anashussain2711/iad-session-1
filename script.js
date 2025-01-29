$(document).ready(function () {
    // Toggle menu
    $("#toggle-btn").click(function () {
        $(".menu").toggleClass("active");
        $(this).toggleClass("active");
        $("body").toggleClass("overflow-hidden");
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        loop: true, // Makes the slider loop
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15, // Gap for screens >= 640px
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30, // Gap for screens >= 1024px
            },
        },
    });

    // Initialize Slick sliders
    $(".slider.overview_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
    });

    // Tab functionality
    $(".tab p").click(function () {
        // Remove active class from all tabs
        $(".tab p").removeClass("active");

        // Add active class to the clicked tab
        $(this).addClass("active");

        // Hide all sliders
        $(".code-slider-wrap").removeClass("active");

        let slider = $(this).attr("slider");
        $(slider).addClass("active");

    });

    $(".menu-links a").click(function (e) {
        const target = $(this).attr("href"); 
        
        // Allow default anchor behavior before closing menu
        setTimeout(() => {
            $(".menu").removeClass("active");
            $("#toggle-btn").removeClass("active");
            $("body").removeClass("overflow-hidden");
        }, 500); // 300ms delay to ensure scrolling happens first
    });
});
