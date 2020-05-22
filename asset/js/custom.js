$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    
    // personal stories slider 
    $('.personal_stories_slider_active').owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        nav: false,
        smartSpeed: 700,
        autoplay:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    // klub stories slider 
    $('.klub_stories_slider_active').owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        nav: false,
        smartSpeed: 700,
        autoplay:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    var video = $('#CalenderVideo').get(0);
    $(document).delegate('.videoPlayBtn span', 'click', function() {
        video.play();
        $('.videoPlayBtn').fadeOut();
    });
    $('#CalenderVideo').on('pause', function() {
        $('.videoPlayBtn').fadeIn();
    });
    // scroll top
    $(".scrollTop").on('click', function(){
		$("html,body").animate({
			scrollTop:0
		}, 1000)
    });
    // active date piker
    $('#datePick').dateTimePicker();
    // video popup link
    $('.vieoPopUplink').on('click',function(){
        $('#videoPopUp').addClass('show');
        return false;
    })
    $('.videoPopUpClose').on('click',function(){
        video.pause();
        $('#videoPopUp').removeClass('show');
    })

    $('.videoMettingBtn').on('click',function(){
        $('#videoMetting').addClass('show');
        return false;
    })
    $('.videoMettngClose').on('click',function(){
        $('#videoMetting').removeClass('show');
    })
    $('.mobileHeader_toggle span').on('click',function(){
        $('#MobileSidebarMenu').addClass('show');
    })

    $('.sidebarMenuClose').on('click',function(){
        $('#MobileSidebarMenu').removeClass('show');
    })
    // klub offer slider mobile
    $('.klubOfferMobile_slider').owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        nav: false,
        smartSpeed: 700,
        autoplay:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    //header fix web
    school.on('scroll',function(){
        if (school.scrollTop() > 200) {
            $('#header_top').addClass('animated slideInDown fix')
        } else {
            $('#header_top').removeClass('animated slideInDown fix')
        }
    })


    //header fix mobile
    school.on('scroll',function(){
        if (school.scrollTop() > 50) {
            $('#mobileHeader').addClass('animated slideInDown fix')
        } else {
            $('#mobileHeader').removeClass('animated slideInDown fix')
        }
    })


















});