const textWrapper = document.getElementById("contact")


textWrapper.style.display = "none"


jQuery(function($){
    $('.footer__button--cancel').click(function (){
        // $('.container').delay(250).fadeOut();
        // $('.container').hide(170)
        $('.container').slideUp(300)
    })
})

jQuery(function ($) {
    $('.input-button__radio').click(function (){
        if($ ('.input-button__radio').hasClass('active')){
            $('.input-button__radio').removeClass('active');
            $('.Text-Box').hide(100);
        } else {
            $('.input-button__radio').addClass('active');
            $('.Text-Box').show(100)
        }
    })
})

jQuery(function ($) {
    $('.messenger').click(function () {
        if($('.container').hasClass('active')){
            $('.container').removeClass('active');
            $('i.fa-times').hide();
            $('i.fa-comments').show();
            $('.container').delay(100).fadeOut();
        }  
        else {
            $('.container').addClass('active');
            $('i.fa-comments').hide();
            $('.container').delay(100).fadeIn();
            $('i.fa-times').delay(50).fadeIn();
        }
    })
})