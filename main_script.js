// PopUp settings
$('.call__button').click(function () {
    $('.popup-overlay').addClass('active')
})

$('.popup__close').click(function () {
    $('.popup-overlay').removeClass('active')
})


// Slider settinngs
var currentSlide = 1
var rightButton = $('.slider__item_arrow-right')
var leftButton = $('.slider__item_arrow-left')
var sliderTrack = $('.slider__track')
var sliderItem = $('.slider__item_content')



rightButton.click(function () {
    console.log(currentSlide)
    currentSlide = currentSlide + 1
    
    if (currentSlide <= sliderItem.length) {
        sliderTrack.css({
            transition: '.7s',
            marginLeft: '-=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
    }
    else {
        sliderTrack.css({
            transition: '0.7s',
            marginLeft: '+=' + sliderItem.width() * 2 + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
        currentSlide = 1
    }
    $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
    $(`.slider__pagination .pagination__dot:nth-child(${currentSlide})`).addClass('pagination__dot-active')
})

leftButton.click(function () {
    console.log(currentSlide)
    currentSlide = currentSlide - 1
    
    if (currentSlide >= 1) {
        sliderTrack.css({
            transition: '.7s',
            marginLeft: '+=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
    }
    else {
        sliderTrack.css({
            transition: '.7s',
            marginLeft:'-='+ sliderItem.width()*2 + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(800)
        currentSlide = 3
    }
    $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
    $(`.slider__pagination .pagination__dot:nth-child(${currentSlide})`).addClass('pagination__dot-active')
})


// Mobile menu setttings
var burgerMenu = $('.burger-menu')
var mobileMenu = $('.mobile-menu')
var headerClose = $('.mobile-menu__header-close')
var body = $('body')

burgerMenu.click(function(){
    mobileMenu.css({
        transition:'.7s',
        transform:'translateX(0%)',
    })
})

headerClose.click(function(){
    mobileMenu.css({
        transition:'.7s',
        transform:'translateX(105%)',
    })
})
