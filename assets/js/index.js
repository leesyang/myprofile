$(document).ready(function() {

    $('.fadeInLoad').animate({'opacity': '1'}, 2500);

    $('#about').click(function() {
        $('.bio-container').fadeIn("slow");
    })

    let top = document.getElementById('welcome');
    
    setTimeout(function(){
        top.scrollIntoView({ block: 'start', behavior: 'smooth'})
    }, 2000);
    
    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
    
        /* Check the location of each desired element */
        $('.fadeIn').each( function(i){
            
            let bottom_of_object = $(this).position().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});

let projects = document.getElementById('projects');
let contact = document.getElementById('contact');
let about = document.getElementById('about');

$('#myprojects-button').click(function() {
    projects.scrollIntoView({ behavior: 'smooth', block: 'start'});
})

$('#contact-button').click(function() {
    contact.scrollIntoView({ behavior: 'smooth', block: 'start'});
})

$('#about-button').click(function() {
    about.scrollIntoView({ behavior: 'smooth', block: 'start'});
})