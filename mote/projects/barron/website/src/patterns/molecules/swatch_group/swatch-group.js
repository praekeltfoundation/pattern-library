(function() {
    var swatchGroups = $('.SwatchGroup');

    for (var i = 0; i < swatchGroups.length; i++) {
        var groupName = $(swatchGroups[i]).attr('name');
        var selection = swatchGroups[i].querySelector('.SwatchGroup-selection');

        $('input[name="' + groupName + '"]:radio').change(function(e) {
            selection.textContent = $(e.target).attr('id'); // IE9+ & mobile
        });
    };
}());
