$(document).ready(function(){
    $('#x-flowerring').hide();
    $('#x-storage').hide();
    screenSize();
    $(window).resize(function(){
        if ($(window).width()!=windowWidth) {
            windowWidth = $(window).width();
            screenSize();
        }
    });
    //lightbox optional settings are down here.
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'disableScrolling': true,
        'fadeDuration':400,
        'imageFadeDuration':400,
        'resizeDuration':300,
        'wrapAround':true,
    });
});
var windowWidth = $(window).width();
function screenSize(){
    if (matchMedia('(max-width: 768px)').matches){
        $('.nav').hide();
        $('.dropdown-content').show();
        $('.dropdown').off(); //螢幕寬變窄時，.dropdown還被綁著hover時slideToggle所以+off，成功了！
        /* $('.lang').css( "display", "flex" );    這樣好嗎 */
        $('.burger-case, .nav a').off();
        $('.burger-case, .nav a').click(function(){
            $('.burger-shadow').toggleClass('show');
            $('.nav').fadeToggle(500);
        });
        productsButtons();
        $('.nav a').click(function(){
            $('input').prop('checked',false);
        });
        PorL();
    }else {
        $('.nav').show();
        $('.dropdown-content').hide();
        $('.burger-case, .nav a').off();
        dropdownContentSlide();
        productsButtons();
        PorL();
    }
}
function PorL(){
    if (matchMedia('(orientation: landscape)').matches){
        lightbox.option({
            'positionFromTop':50
        });
    }else if(matchMedia('(orientation: portrait)').matches){
        lightbox.option({
            'positionFromTop':150
        });
    }
}
function productsButtons(){
    $('.x-stand-btn').click(function(){
        $('#x-stand').fadeIn();
        $('#x-flowerring').hide();
        $('#x-storage').hide();
        $('#products .x-stand-btn').addClass('active');
        $('#products .x-flowerring-btn').removeClass('active');
        $('#products .x-storage-btn').removeClass('active');
    });
    $('.x-flowerring-btn').click(function(){
        $('#x-flowerring').fadeIn();
        $('#x-stand').hide();
        $('#x-storage').hide();
        $('#products .x-flowerring-btn').addClass('active');
        $('#products .x-stand-btn').removeClass('active');
        $('#products .x-storage-btn').removeClass('active');
    });
    $('.x-storage-btn').click(function(){
        $('#x-storage').fadeIn();
        $('#x-stand').hide();
        $('#x-flowerring').hide();
        $('#products .x-stand-btn').removeClass('active');
        $('#products .x-flowerring-btn').removeClass('active');
        $('#products .x-storage-btn').addClass('active');
    });
}
function dropdownContentSlide(){
    $('.dropdown').hover(function(){
        $('.dropdown-content', this).stop(true,true).slideToggle();
    });
}


/* 

scroll smooth

*/