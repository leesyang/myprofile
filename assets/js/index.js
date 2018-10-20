$(document).ready(function() {

    $('.fadeInLoad').animate({'opacity': '1'}, 2500)

    var top = document.getElementById('welcome');
    setTimeout(function(){
        top.scrollIntoView({ block: 'start', behavior: 'smooth'})
    }, 2000);
    
    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
    
        /* Check the location of each desired element */
        $('.fadeIn').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});