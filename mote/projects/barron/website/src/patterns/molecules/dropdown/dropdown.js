let SumoSelect = require('sumoselect/jquery.sumoselect');

$(document).ready(function() {
    var handle = $('.Dropdown').children();
    handle.SumoSelect();

    if (handle.parent().hasClass('Dropdown--inverted')) {
        $('.SumoSelect i')
            .addClass('Icon Icon-chevronbottom-whiteGainsboro');
    } else {
        $('.SumoSelect i')
            .addClass('Icon Icon-chevronbottom-whiteGainsboro');
    }
});
