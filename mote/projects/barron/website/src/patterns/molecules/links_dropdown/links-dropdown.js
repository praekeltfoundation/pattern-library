(function() {
    var $LinksDropdown = $('.LinksDropdown');

    for (var i = 0; i < $LinksDropdown.length; i++) {
        var $resultText = $LinksDropdown[i].querySelector('.LinksDropdown-label-text');
        var $checkbox = $LinksDropdown[i].querySelector('.LinksDropdown-checkbox');
        var $links = $($LinksDropdown[i]).find('.LinksDropdown-options-item-link');
        $($links).click(function(e) {
            $resultText.textContent = e.target.innerText; // IE9+ & mobile
            $checkbox.checked = false;
        });
    };
}());
