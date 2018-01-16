(function ($) {
    "use strict";

	  	/*----------- For sticky ------------*/
	  	$(window).on('scroll',function(){
		   if($(this).scrollTop() > 50){
		   $('header').addClass('sticky');
		}
		else{
		   $('header').removeClass('sticky');
		}
		});

	  	/*----------- For Mobile Menu ------------*/
		 $(document).on('click', '.navbar-collapse.in', function (e) {
	        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
	            $(this).collapse('hide');
	        }
	    });
	    $('body').scrollspy({
	        target: '.navbar-collapse',
	        offset: 195
	    });

	    /*----------- For Vbackground ------------*/
	    var bgVideo = $('.background_video'),
	        videoId = bgVideo.attr('data-video');
	    	bgVideo.each(function () {
	        $(this).YTPlayer({
	            fitToBackground: true,
	            videoId: videoId,
	            pauseOnScroll: false
	        });
	    });

	    /*----------- For Isotope ------------*/
	    jQuery(window).load(function (){
			var $grid = $('.portfolio_item').isotope({
			});
			$('.portfolio_menu').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			 $('.portfolio_menu button').on('click', function(event) {
		        $(this).siblings('.active').removeClass('active');
		        $(this).addClass('active');
		        event.preventDefault();
			});

			 $('.preloader').fadeOut('slow');
		});

		/*----------- For owlCarousel ------------*/
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    dot:false,
		    autoplay:true,
			autoplayTimeout:3000,
			smartSpeed:1000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		/*----------- For Scrollspy ------------*/
	    $("a").on('click', function(event) {
	      if (this.hash !== "") {
	        event.preventDefault();
	        var hash = this.hash;$('html, body').animate({
	          scrollTop: $(hash).offset().top
	        }, 1000, function(){
	          window.location.hash = hash;
	        });
	      }
	    });

	    /*----------- For Parallax ------------*/
	     $(window).stellar({
	        responsive: true,
	        positionProperty: 'position',
	        horizontalScrolling: false
	    });

		/*----------- For Scroll Top ------------*/
		$(window).on('scroll',function(){
	    if($(this).scrollTop() > 600){
	        $('.scroll_top').removeClass('not_visible');
	    }
	    else{
	        $('.scroll_top').addClass('not_visible');
	    }
		});
	    $('.scroll_top').on('click',function (event){
	        $('html,body').animate({
	            scrollTop:0
	        },1000);
	    });

	    /*----------- For Style Switcher ------------*/
	    $('.switcher_icon').on('click', function (){
        	$('.switcher_area').toggleClass('switcher_toggle');
    	});

})(jQuery);