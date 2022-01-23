$(document).ready(function(){
    $('#x-flowerring').hide();
    $('#x-storage').hide();
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
    screenSmall();
    $(window).resize(screenSmall);
    /* $(window).on('resize', screenSmall); */
    /* $(window).onresize(function(){
        screenSmall();
    }); */
    /* $(window).addEventListener("resize", screenSmall, false); */
});

function screenSmall(){
    if (matchMedia('(max-width: 768px)').matches){
        $('.burger-case, .nav a').click(function(){
            $('.burger-shadow').toggleClass('show');
            $('.nav').fadeToggle(500);
        });
        $('.nav a').click(function(){
            $('input').prop('checked',false);
        });
        console.log ('成功1');
    }else {
        $('.burger-case, .nav a').unbind('click');
        $('.nav').show();
        console.log ('成功2');
    }
}
/* function screenSmall(){
    if (matchMedia('(max-width: 768px)').matches){
        $('.burger-case, .nav a').onclick=function(){
            $('.burger-shadow').toggleClass('show');
            $('.nav').fadeToggle(500);
        };
        $('.nav a').onclick=function(){
            $('input').prop('checked',false);
        };
        console.log ('成功1');
    }else {
        $('.burger-case, .nav a').unbind('click');
        $('.nav').fadeIn(500);
        console.log ('成功2');
    }
} */