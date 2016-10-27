var owlCarousel = require('owl.carousel/dist/owl.carousel');
//var breakpointsJson = require('../../../../globals/global-variables.json');
require('owl.carousel/dist/assets/owl.carousel');

$(document).ready(function() {
    $('.Carousel:not(".Carousel--multiple")')
        .addClass('owl-carousel')
        .owlCarousel({
            'items': 1,
            'loop': false,
            'center': true,
            'nav': true,
            'dots': true,
            'autoplay': false,
            'navContainerClass': 'Carousel-navContainer',
            'dotsClass': 'Carousel-dotsContainer',
            'lazyload': false,
            'navText': ['', ''],
            'navClass': ['owl-prev Icon Icon-plainarrowleft-yellowButtercup', 'owl-next Icon Icon-plainarrowright-yellowButtercup']
        });

    $('.Carousel--multiple')
        .addClass('owl-carousel')
        .owlCarousel({
            'stagePadding': 50,
            'responsive': {
                '0': {
                    'items': 2
                },
                '992': {
                    'items': 4
                },
                '1280': {
                    'items': 6
                }
            },
            'loop': true,
            'center': true,
            'nav': true,
            'dots': false,
            'autoplay': false,
            'navContainerClass': 'Carousel-navContainer',
            'lazyload': false,
            'navText': ['', ''],
            'navClass': ['owl-prev Icon Icon-plainarrowleft-yellowButtercup', 'owl-next Icon Icon-plainarrowright-yellowButtercup']
        });
});
