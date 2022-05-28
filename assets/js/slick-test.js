$(function(){
    $('.myslider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true

    });
});


// setTimeout(function () {
//     document.getElementsByTagName("html")[0].classList.add("loading-delay");
// }, 500);

$(document).ready(function() {
    // Whenever the window is scrolled ... 
    $(window).scroll( function(){
        // Check the location of the object
        $('.fade-in').each( function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            // If the object is inside the window, fade it in!
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
});