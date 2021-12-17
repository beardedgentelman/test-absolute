$(document).ready(function () {
    $('.slick-slider').slick({
        dots: true,
        speed: 500,
        easing: 'ease-in-out',
        infinite: false,
        responsive: [{
        breakpoint: 533,
            settings: {
                arrows: false
            }
        }]
    });

    if (window.matchMedia("(max-width: 1024px)").matches) {
    //     $('.header-all__header-nav').hide();
    //     // $('.checkbox').is(':checked', function () {
    //     //     $('.header-all__header-nav').show();
    //     // })
    //     $('.checkbox').on('click', function () {
            
    //         if ($(this).is(':checked')) {
    //             $('.header-all__header-nav').show();
    //         }
    //         else {
    //         $('.form-search').hide();
    //         }
    //     });
        $('.header-all__search').hide();
        $('.checkbox-search').on('click', function () {
            
            if ($(this).is(':checked')) {
                $('.header-all__search').show();
            }else {
                $('.header-all__search').hide();
            }
        });

        $('.footer-ul').on('click', function () {
            $(this).find('.footer-li').slideToggle(300);
            $(this).find('.footer-li-main>i').toggleClass('active-mobile-arrow');
        })
    }

    $('.checkbox').on('click', function () {
        if ($(this).is(':checked')) {
            $('.header-all__header-nav').fadeIn();
        } else {
           $('.header-all__header-nav').fadeOut(); 
        }
    });


    const ratings = document.querySelectorAll('.rating');
    if (ratings.length > 0) {
        initRatings();
    }

    function initRatings() {
        let ratingActive, ratingValue;
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        }

        function initRating(rating) {
            initRatingVars(rating);

            setRatingActiveWidth();

            if (rating.classList.contains('rating-set')) {
                setRating(rating);
            }
        }

        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }

        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }

        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item');
            for (let index = 0; index < ratingItems.length; index++) {
                const ratingItem = ratingItems[index];
                ratingItem.addEventListener("mouseenter", function (e) {
                    initRatingVars(rating);
                    setRatingActiveWidth(ratingItem.value);
                });
                ratingItem.addEventListener("mouseleave", function (e) {
                    setRatingActiveWidth();
                });
                ratingItem.addEventListener("click", function (e) {
                    initRatingVars(rating);
                    if (rating.dataset.ajax) {
                        setRatingValue(ratingItem.value, rating);
                    } else {
                        ratingValue.innerHTML = index + 1;
                        setRatingActiveWidth();
                    }
                });
            }
        }
    }
});