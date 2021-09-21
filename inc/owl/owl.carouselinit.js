jQuery(document).ready(function(){
    jQuery('.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
            }
        }
    });
});