$(function(){

    var delay = 2000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider() {
        amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width', sizeBoxSingle+'%');
        $('.scroll-wrapper').css('width', sizeContainer+'%');
    }

    function autoPlay() {
        setInterval(function(){ 
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170)');
        $('.scrollEquipe').animate({'scrollLeft': offSetX+'px'});
    }

    $(window).resize(function(){ 
        $('.scrollEquipe').stop().animaet({'scrollLeft':0});
    })

})