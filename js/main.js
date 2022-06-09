jQuery(function () {
	
	
/*===============================================
    Foundation
==================================================*/ 	 
    jQuery(document).foundation()
	
	
/*===============================================
    Fix header
==================================================*/ 

    jQuery(window).scroll(function() {
        scroll = jQuery(window).scrollTop();
        if (scroll >= 98) {
            jQuery('.main-outercon').addClass('fixed');
        } else {
            jQuery('.main-outercon').removeClass('fixed');
        }
    });
	
    
/*==================================================
   	input field
=====================================================*/
    
    jQuery('.form-floating-label input, .form-floating-label textarea').focusin(function(){
        jQuery(this).parent().addClass('has-value');
    });

    jQuery('.form-floating-label input, .form-floating-label textarea').blur(function(){
        if(!jQuery(this).val().length > 0) {
            jQuery(this).parent().removeClass('has-value');
        }
    });
    
 
/*===============================================
  	Search
==================================================*/ 

    jQuery(".search-outer a").click(function() {
        jQuery("body").addClass('overlay');
        jQuery(".header-form").fadeIn("slow");
        jQuery(".form-fields input:text").first().focus();
    });
    jQuery(".form-close").click(function() {
        jQuery(".header-form").fadeOut("slow");
        jQuery("body").removeClass('overlay');
    });
	
	
/*===============================================
  	Search
==================================================*/ 

    jQuery(".title-bar-left").click(function() {
        jQuery(this).toggleClass('menu-active'); 
    }); 

	
/*===============================================
   Mobile Submenu Display
==================================================*/ 

    jQuery(".sliding-navigation li .arrow").click(function() {
        if (jQuery(this).siblings("ul").length) {
            jQuery(this).siblings("ul").stop().slideToggle();
            jQuery(this).siblings().toggleClass('active');
            jQuery(this).toggleClass('opennav');
            return false;
        }
    }); 
	
	
    
/*===============================================
	Background
==================================================*/
	// $imgSrc = jQuery('.background__imgblk').children('img').attr('src');
	// jQuery('.background__imgblk').css({
		// 'background-image': 'url('+$imgSrc+')'
	// });
	// $imgSrc = jQuery('.background__imgblk').children('img').css({
		// 'opacity': 0
	// });
	
    
/*===============================================
	Slider
==================================================*/
	if (jQuery.fn.slick) {
		jQuery('.with-slider .slider-item').slick({
			autoplay:false,
			dots:true,
			arrows: false,
            speed: 1200,
			infinite: true,
            fade: true,
            adaptiveHeight: false
		});
		jQuery('.logoslider-blk ul').slick({
              infinite: true,
			  dots:false,
              slidesToShow: 6,
              slidesToScroll:1,
            responsive: [
                {
                  breakpoint: 1249,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true, 
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll:1
                  }
                } 
            ]
            
            
        });
        
/*===============================================
    Up and Down slider.
==================================================*/ 
        jQuery('.vert__slider-blk ul.slider__down').slick({
			infinite: true,
			autoplay: true,
			slidesToShow: 5,
            arrows:false,
			vertical: true,
			slidesToScroll: 1, 
            responsive: [ 
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll:1,
			         vertical: false,
                  }
                }, 
                {
                  breakpoint: 479,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
			         vertical: false,
                  }
                }
            ]
		});
		
		jQuery('.vert__slider-blk ul.slider__up').slick({
			infinite: true,
			autoplay: true,
			infinite: 0,
			slidesToShow: 5,
            arrows:false,
			vertical: true,
			cssEase: 'linear',
			slidesToScroll: 1, 
            responsive: [ 
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll:1,
			         vertical: false,
                  }
                }, 
                {
                  breakpoint: 479,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
			         vertical: false,
                  }
                }
            ]
		});

	}
    
/*==================================================
    Footer MobileMenu    
=====================================================*/
    jQuery(".footer__container .footer_commonblk .title_h6").click(function (e) {
        e.preventDefault();
        if (jQuery(".mb-trigger").is(":visible")) {
            jQuery(this).parent().children(".footer__container .footer__middle .footer-link").slideToggle("slow");
        }
    });

    jQuery(window).on("debouncedresize", function (event) {
        if (jQuery(".mb-trigger").is(":visible")) {
            jQuery(".footer__container .footer__middle .footer-link").hide();
        } else {
            jQuery(".footer__container .footer__middle .footer-link").show();
        }
    });
    
	
/*===============================================
	Language Switcher
==================================================*/
    jQuery(".switch-dropdown a.selected-world").click(function(){		
		jQuery(".switch-dropdown ul").slideToggle();
		return false;
	});
	jQuery(".switch-dropdown ul li a").click(function(){
		jQuery(".switch-dropdown a.selected-world").removeClass().addClass("selected-world");
		var new_text = jQuery(this).text();
		console.log(new_text);
		jQuery(".switch-dropdown a.selected-world").text(new_text);
		jQuery(".switch-dropdown ul").slideToggle();
		return false;
	});
    
    
    /*==================================================
	video
=====================================================*/	

	var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
	
	jQuery('.play-btn').click(function(e) {
        e.preventDefault();
        jQuery('#player').addClass('play');
        jQuery('.play-btn').addClass('hide');
        jQuery('.video-blk .popup-icons').addClass('hide');
    });
    
    /*===============================================
    popup
==================================================*/ 

	if(jQuery.fn.bPopup){
        jQuery( "#slideshow" ).click(function() {
            jQuery('.gallery-popup').bPopup({
                follow: [false, false],
                position: [0, 0],
                closeClass:'close-btn',
                onOpen: function () {
					setTimeout(function () {
						imageslider('#image-only-slider');
					}, 500);
				},
            });
        });
        jQuery( "#slideshow1" ).click(function() {
            jQuery('.video-popup').bPopup({
                follow: [false, false],
                position: [0, 0],
                closeClass:'close-btn',
                onOpen: function () {
					setTimeout(function () {
						imageslider('#video-slider');
					}, 500);
				},
            });
         jQuery('.center-slider').slick('unslick');
         jQuery('.center-slider').slick('reinit');
        });
    }
    
    if( jQuery('#myModal').length ) {
        var $modal = jQuery('#myModal');
        var delay = 5000;

        modalHandler($modal,delay);
    }
    
    
    /*===============================================
    Validate
==================================================*/ 

	if((jQuery.fn.validate)){
        
		jQuery("#contact-form").validate({
			onfocusout: function(element) {
				this.element(element);  
			},
			rules: {
				'name': {
					required: true
				},
				'email': {
					required: true,
					email: true
				},
				'contact-number': {
					required: true
				},
				'message': {
					required: true
				}
			},
			onsubmit: true,
			debug: false,
			focusInvalid: false,
			errorElement: "span",
			errorClass: "hs-error-alert",
			messages: {
				'name': {
					// required: 'Name is required'
					required: ''
				},
				'email': {
					// required: 'Email is required',
					// validateEmail: 'Please enter a valid email address'
					required: '',
					email: ''
				},
				'contact-number': {
					// required: 'Contact number is required'
					required: ''
				},
				'message': {
					// required: 'Your message is required'
					required: ''
				}
			},
			highlight: function(element) {
				jQuery(element).parent().addClass('error__input--blk');
			},
			unhighlight: function(element) {
				jQuery(element).parent().removeClass('error__input--blk')
			},
			submitHandler: function(form) {	
				// return true;
			}
		});
		
    }
    
}); 

/*===============================================
    Input Blur effect.
==================================================*/ 
(function() { 
	if (!String.prototype.trim) {
		(function() { 
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[]
	.slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
	 
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} ); 

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}
})();

// image slider function
function imageslider($elementId) {

    jQuery($elementId+' .center-slider').on('init', function () {
        $next_src = jQuery($elementId+' .single-block.slick-active').next().children('img').attr('src');
        jQuery($elementId+' .hs-slider-next .slider-control-image').css({
            backgroundImage: 'url(' + $next_src + ')'
        });
        jQuery($elementId+' .hs-slider-prev').addClass('hide-controle');
    });

    jQuery($elementId+' .center-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $next_index = nextSlide + 1;
        if ($next_index <= slick.slideCount) {
            $next_src = jQuery($elementId+' .center-slider .single-block').eq($next_index).children('img').attr('src');
            jQuery($elementId+' .hs-slider-next .slider-control-image').css({
                backgroundImage: 'url(' + $next_src + ')'
            });
        } else {
        }
        if (nextSlide + 1 >= slick.slideCount) {
            jQuery($elementId+' .hs-slider-next').addClass('hide-controle');
        } else {
            jQuery($elementId+' .hs-slider-next').removeClass('hide-controle');
        }
    });

    jQuery($elementId+' .center-slider').on('afterChange', function (event, slick, currentSlide) {
        $prev_index = currentSlide - 1;
        if ($prev_index < 0) {
            jQuery($elementId+' .hs-slider-prev').addClass('hide-controle')
        } else {
            jQuery($elementId+' .hs-slider-prev').removeClass('hide-controle')
        }
        $prev_src = jQuery($elementId+' .center-slider .single-block').eq($prev_index).children('img').attr('src');
        jQuery($elementId+' .hs-slider-prev .slider-control-image').css({
            backgroundImage: 'url(' + $prev_src + ')'
        });
    });

    jQuery($elementId+' .center-slider').slick({
        infinite: false,
        slidesToShow: 1,
        dots: true,
        dotsClass: 'custom_paging',
        arrows: false,
        customPaging: function (slider, i) {
            console.log(slider);
            return (i + 1) + '/' + slider.slideCount;
        }
    });

    jQuery('#hs-slider-prev,#hs-slider-prev1').click(function (e) {
        e.preventDefault();
        jQuery($elementId+' .center-slider').slick('slickPrev');
    });
    jQuery('#hs-slider-next,#hs-slider-next1').click(function (e) {
        e.preventDefault();
        jQuery($elementId+' .center-slider').slick('slickNext');
    });
}

function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            fitToBackground: true,
            height: '479',
            width: '500',
            videoId: 'Ex8Q1WWh2jo',
            playerVars: {
                'showinfo': 0,
                'rel': 0,
                'controls': 0,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });
    }

function onPlayerReady(event) {
    jQuery('.play-btn').click(function() {
        event.target.playVideo();
    });
}

function onPlayerStateChange(event) {        
    if(event.data === 0) {          
        jQuery('#player').removeClass('play');
        jQuery('.play-btn').removeClass('hide');
        jQuery('.video-blk .popup-icons').removeClass('hide');
    }
}

function modalHandler($modal,delay){
    setTimeout(function(){
    $modal.foundation('open');
    },delay);
}
 