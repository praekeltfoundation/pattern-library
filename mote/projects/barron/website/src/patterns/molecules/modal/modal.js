require('script!vex/js/vex.combined.min.js');
require('vex/css/vex.css');

vex.defaultOptions.className = 'Modal';
vex.defaultOptions.overlayClassName = 'Modal-overlay';
vex.defaultOptions.contentClassName = 'Modal-content';
vex.defaultOptions.closeClassName = 'Modal-close Icon Icon-close-white';

$(document).on('click', '[data-modal-content="image"]', function(e) {
    e.preventDefault();

    let image = $(this).attr('href');
    let bindTarget = $(this).attr('data-modal-appendto-group') || 'body';
    let appendLocation = $('[data-modal-group="' + bindTarget + '"]');

    vex.open({
        'className': bindTarget !== 'body' || undefined ? vex.defaultOptions.className + ' Modal--nested Modal--image' : vex.defaultOptions.className + ' Modal--image',
        'appendLocation': bindTarget !== 'body' || undefined ? appendLocation : 'body',
        'content': '<img src="' + image + '"/>'
    });
});

$(document).on('click', '[data-modal-content="youtube"]', function(e) {
    e.preventDefault();

    let videoUrl = $(this).attr('href');
    console.log('videoUrl', videoUrl);
    let bindTarget = $(this).attr('data-modal-appendto-group') || 'body';
    let appendLocation = $('[data-modal-group="' + bindTarget + '"]');

    vex.open({
        'className': bindTarget !== 'body' || undefined ? vex.defaultOptions.className + ' Modal--nested Modal--video' : vex.defaultOptions.className + ' Modal--video',
        'appendLocation': bindTarget !== 'body' || undefined ? appendLocation : 'body',
        'content': '<div class="Modal-videoWrapper"><iframe width="1280" height="720" src="' + videoUrl + '" frameborder="0" allowfullscreen autoplay></iframe></div>'
    });
});

$(document).on('click', '[data-modal-content="element"]', function(e) {
    e.preventDefault();

    let parent = $($(this).attr('href')).parent();
    let element = $($(this).attr('href')).detach();
    let bindTarget = $(this).attr('data-modal-appendto-group') || 'body';
    let appendLocation = $('[data-modal-group="' + bindTarget + '"]');

    vex.open({
        'content': element,
        'className': bindTarget !== 'body' || undefined ? vex.defaultOptions.className + ' Modal--nested Modal--element' : vex.defaultOptions.className + ' Modal--element',
        'appendLocation': bindTarget !== 'body' || undefined ? appendLocation : 'body',
        'afterClose': function() {
            element.appendTo($(parent));
        }
    })
})
