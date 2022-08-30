
const textWrapper = document.getElementById("contact")

textWrapper.style.display = "none";

const container = document.querySelector('.feedback-container');

container.style.display = "none"


jQuery(function($){
    $('.footer__button--cancel').click(function (){
        $('.feedback-container').slideUp(300)
    })
})

jQuery(function ($) {
    $('.input-button__radio').click(function (){
        if($ ('.input-button__radio').hasClass('active')){
            $('.input-button__radio').removeClass('active');
            // $('.Text-Box').hide(100);
        } else {
            $('.input-button__radio').addClass('active');
            $('.Text-Box').show(100)
        }
    })
})

jQuery(function ($) {
    $('.messenger').click(function () {
        if($('.feedback-container').hasClass('active')){
            $('.feedback-container').removeClass('active');
            $('.cancel-icon').hide();
            $('.chat-icon').show();
            $('.feedback-container').delay(100).fadeOut();
        }  
        else {
            $('.feedback-container').addClass('active');
            $('.chat-icon').hide();
            $('.feedback-container').delay(100).fadeIn();
            $('.cancel-icon').delay(50).fadeIn();
        }
    })
})