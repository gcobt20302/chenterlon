$(document).ready(function(){
    $('#x-flowerring').hide();
    $('#x-storage').hide();
    screenSize();
    $(window).on('resize',function(){
        if ($(window).width()!=windowWidth) {
            windowWidth = $(window).width();
            screenSize();
        }
    });
});
var windowWidth = $(window).width();
function screenSize(){
    if (matchMedia('(max-width: 768px)').matches){
        $('.nav').hide();
        $('.burger-case, .nav a').unbind('click');
        $('.burger-case, .nav a').on('click', function(){
            $('.burger-shadow').toggleClass('show');
            $('.nav').fadeToggle(500);
        });
        productsButtons();
        $('.nav a').on('click', function(){
            $('input').prop('checked',false);
        });
    }else {
        $('.nav').show();
        $('.burger-case, .nav a').unbind('click');
        productsButtons();
    }
}
function productsButtons(){
    $('.x-stand-btn').on('click', function(){
        $('#x-stand').fadeIn();
        $('#x-flowerring').hide();
        $('#x-storage').hide();
        $('#products .x-stand-btn').addClass('active');
        $('#products .x-flowerring-btn').removeClass('active');
        $('#products .x-storage-btn').removeClass('active');
    });
    $('.x-flowerring-btn').on('click', function(){
        $('#x-flowerring').fadeIn();
        $('#x-stand').hide();
        $('#x-storage').hide();
        $('#products .x-flowerring-btn').addClass('active');
        $('#products .x-stand-btn').removeClass('active');
        $('#products .x-storage-btn').removeClass('active');
    });
    $('.x-storage-btn').on('click', function(){
        $('#x-storage').fadeIn();
        $('#x-stand').hide();
        $('#x-flowerring').hide();
        $('#products .x-stand-btn').removeClass('active');
        $('#products .x-flowerring-btn').removeClass('active');
        $('#products .x-storage-btn').addClass('active');
    });
}