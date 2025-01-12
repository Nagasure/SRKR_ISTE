(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		
		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.elkevent-nav').addClass("is-sticky");
            }
            else{
                $('.elkevent-nav').removeClass("is-sticky");
            }
        });

        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 46){  
                $('.header-area').addClass("header-is-sticky");
            }
            else{
                $('.header-area').removeClass("header-is-sticky");
            }
        });

         
        $(window).on('load',function() {
            // Home Slides
            $('.home-slides').owlCarousel({
                loop: false,
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                items: 1,
                navText: [
                    "<i class='icofont-rounded-left'></i>",
                    "<i class='icofont-rounded-right'></i>"
                ],
            });
            $(".home-slides").on("translate.owl.carousel", function(){
                $(".home-slides p").removeClass("animated fadeInDown").css("opacity", "0");
                $(".home-slides h1").removeClass("animated fadeInUp").css("opacity", "0");
                $(".home-slides ul").removeClass("animated zoomIn").css("opacity", "0");
                $(".home-slides .btn, .home-slides .video-btn").removeClass("animated fadeInDown").css("opacity", "0");
            });
            $(".home-slides").on("translated.owl.carousel", function(){
                $(".home-slides p").addClass("animated fadeInDown").css("opacity", "1");
                $(".home-slides h1").addClass("animated fadeInUp").css("opacity", "1");
                $(".home-slides ul").addClass("animated zoomIn").css("opacity", "1");
                $(".home-slides .btn, .home-slides .video-btn").addClass("animated fadeInDown").css("opacity", "1");
            });

            // Platinum Partner Slides
            $('.platinum-partner-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                navText: [
                    "<i class='icofont-rounded-left'></i>",
                    "<i class='icofont-rounded-right'></i>"
                ],
                responsive: {
                    0: {
                        items:2,
                    },
                    576: {
                        items:3,
                    },
                    768: {
                        items:3,
                    },
                    1200: {
                        items:5,
                    }
                }
            });
            
            // Gold Partner Slides
            $('.gold-partner-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                navText: [
                    "<i class='icofont-rounded-left'></i>",
                    "<i class='icofont-rounded-right'></i>"
                ],
                responsive:{
                    0: {
                        items:2,
                    },
                    576: {
                        items:3,
                    },
                    768: {
                        items:3,
                    },
                    1200: {
                        items:5,
                    }
                }
            });
            
            // Blog Slides
            $('.blog-slides').owlCarousel({
                loop: false,
                margin: 30,
                nav: false,
                dots: true,
                autoplayHoverPause: true,
                autoplay: true,
                navText: [
                    "<i class='icofont-rounded-left'></i>",
                    "<i class='icofont-rounded-right'></i>"
                ],
                responsive:{
                    0: {
                        items:1,
                    },
                    768: {
                        items:2,
                    },
                    1200: {
                        items:3,
                    }
                }
            });
            
            // Schedule Slides
            $('.schedule-slides').owlCarousel({
                loop: false,
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                items: 1,
                navText: [
                    "<i class='icofont-rounded-left'></i>",
                    "<i class='icofont-rounded-right'></i>"
                ],
            });

            // Speakers Slides JS
            $('.m-speakers-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                margin: 30,
                autoplayHoverPause: true,
                autoplay: true,
                
                responsive:{
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 4,
                    }
                }
            });

            // M Testimonial Slides JS
            $('.m-testimonial-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                margin: 30,
                autoplayHoverPause: true,
                autoplay: true,
                items: 1,
            });

            // Gallery Slides JS
            $('.e-gallery-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                margin: 30,
                autoplayHoverPause: true,
                autoplay: true,
                autoHeight: true,
                responsive:{
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 4,
                    }
                }
            });

            // E Testimonial Slides JS
            $('.e-testimonial-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                margin: 30,
                autoplayHoverPause: true,
                autoplay: true,
                
                responsive:{
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 2,
                    }
                }
            });

            // H Testimonial Slides JS
            $('.h-testimonial-slides').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                margin: 30,
                autoplayHoverPause: true,
                autoplay: true,
                items: 1,
            });
        });

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });
        
        // Counter
        $(".count").counterUp({
            delay: 20,
            time: 1500
        });

        // Popup Gallery
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });

        // Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);
        
        // Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });

        // Tooltip JS
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        
        // Check distance to top and display back-to-top.
        jQuery( window ).on('scroll', function() {
            if ( $( this ).scrollTop() > 800 ) {
                $( '.back-to-top' ).addClass( 'show-back-to-top' );
            } else {
                $( '.back-to-top' ).removeClass( 'show-back-to-top' );
            }
        });
        $('.back-to-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });

	});

	// Lax JS
	window.onload = function() {
		lax.setup() // init
		const updateLax = () => {
			lax.update(window.scrollY)
			window.requestAnimationFrame(updateLax)
		}
		window.requestAnimationFrame(updateLax)
    }

    // Count Down Time
    var countDown = function() {
		console.log(datedata);
		simplyCountdown('.simply-countdown', {
			year: datedata.year,
			month: datedata.month,
			day: datedata.day
		});
	};
	
	$(function(){
		countDown();
	});

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader Area
	jQuery(window).on('load', function() {
	    $('.preloader').fadeOut();
	});
}(jQuery));