//dropdown language
jQuery(document).ready(function($) {
    $(".header__language").click(function() {
        $(".header__language .header__option__list").toggleClass("active");
    });
    $(".header__language .header__option__list .header__option__item").click(function() {
        var text = $(this).html();
        $(".header__option__first").html(text);
    });
});

//dropdown search
jQuery(document).ready(function($) {
    $(".dropdown").click(function() {
        $(".dropdown ul").toggleClass("active");
    });
    $(".dropdown ul li").click(function() {
        var text = $(this).text();
        $(".default__category").text(text);
    });
});

//setting js
jQuery(document).ready(function($) {
    $(".header__setting").click(function() {
        $(".header__setting--responsive").show();
        $(".overlay").show();
    });
    $(".header__setting--responsive li").click(function() {
        $(".header__setting--responsive").hide();
        $(".overlay").hide();
    });
    $(".overlay").click(function() {
        $(".header__setting--responsive").hide();
        $(".overlay").hide();
    });
});

//shoping bag js
jQuery(document).ready(function($) {
    $(".header__shopping-bag").click(function() {
        $(".header__shopping--responsive").show();
        $(".overlay").show();
    });
    $(".header__shopping--responsive li").click(function() {
        $(".header__shopping--responsive").hide();
        $(".overlay").hide();
    });
    $(".overlay").click(function() {
        $(".header__shopping--responsive").hide();
        $(".overlay").hide();
    });
});


//menu navbar
jQuery(document).ready(function($) {
    $(".list-category-left").click(function() {
        $(".navbar__responsive").show();
        $(".overlay").show();
    });
    $(".navbar__responsive li").click(function() {
        $(".navbar__responsive").hide();
        $(".overlay").hide();
    });
    $(".overlay").click(function() {
        $(".navbar__responsive").hide();
        $(".overlay").hide();
    });
});

//menu navbar responsive
jQuery(document).ready(function($) {
    $(".header__responsive__nav").click(function() {
        $(".header__nav--responsive").show();
        $(".overlay").show();
    });
    $(".header__nav--responsive li").click(function() {
        $(".header__nav--responsive").hide();
        $(".overlay").hide();
    });
    $(".overlay").click(function() {
        $(".header__nav--responsive").hide();
        $(".overlay").hide();
    });
});


$('.carousel__wapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    prevArrow: $(".carousel__arrows--left"),
    nextArrow: $(".carousel__arrows--right")
});

// countdown
$('#dountdown--active').countdown('2022/05/05', function(event) {
    $(this).html(event.strftime('<div class="countdown-day"><span class="num">%D</span><br/> days</div><div class="countdown-hou"><span class="num">%H</span><br/> hrs</div><div class="countdown-min"><span class="num">%M</span><br/> mins</div><div class="countdown-sec"><span class="num">%S</span><br/> sec</div> '));
});




// product item
$('.product__item').slick({
    dots: false,
    infinite: true,
    arrow: true,
    slidesToShow: 4,
    rows: 2,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 2,
            }
        },
        {
            breakpoint: 845,
            settings: {
                slidesToShow: 2,
                rows: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 625,
            settings: {
                slidesToShow: 1,
                rows: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


//Hot news
$('.news__items').slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 845,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 625,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});