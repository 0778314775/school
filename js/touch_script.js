$(document).ready(function(){
  $('.land-slide').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
  // 
  $('.gallery-slide').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });
  $('.about-image-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
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
})