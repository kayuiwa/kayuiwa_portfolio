$(function(){
    $('.modal').hide();
    // モーダルウィンドウを開く
    $('.js-modal-open').on('click', function(){
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        scrollPosition = $(window).scrollTop();
    
        $('body').addClass('fixed').css({'top': -scrollPosition});
        $(modal).fadeIn();
        return false;
    });
  
    // モーダルウィンドウを閉じる
    $('.js-modal-close').on('click', function(){
        // $('body').removeClass('fixed');
        // window.scrollTo( 0 , scrollPosition );
        $('.js-modal').fadeOut();
        return false;
    });

    $('.modal').click(function(){
        $(this).fadeOut();
        });
    $('.modal-content').on('click',function( e ){
        e.stopPropagation();
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