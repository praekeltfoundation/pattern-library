let nodeExists = require('../../../utils/prk-js-utils/node-exists');
let nodeHasClass = require('../../../utils/prk-js-utils/has-class');
let nodeAddClass = require('../../../utils/prk-js-utils/add-class');
let nodeRemoveClass = require('../../../utils/prk-js-utils/remove-class');
let nodeDelete = require('../../../utils/prk-js-utils/remove-element');
let template = require('lodash/fp/template');
require('classlist/classList');

class MastheadMethods {
    constructor() {
        this.logoStateVal;
        this.mastheadStateVal;
        this.menuCarouselStateVal;
        this.masthead;
        this.logo;
        this.menuCarousel;
    }

    init(logoState, mastheadState, menuCarouselState) {
        this.masthead = document.querySelector('.Masthead');
        this.logo = document.querySelector('.Masthead .Logo');
        this.menuCarousel = document.querySelector('.Masthead .MenuCarousel');
        this.search = document.querySelector('.Masthead .Search');

        this.logoStateVal = this.getLogoState();
        this.mastheadStateVal = this.getMastheadState();
        this.menuCarouselStateVal = this.getMenuCarouselState();
        this.currentActiveMenuItem = this.getNavState();
    }

    // Get Item States
    getLogoState() {
        return nodeHasClass(this.logo, 'is-expanded');
    }
    getMastheadState() {
        return nodeHasClass(this.masthead, 'is-open');
    }
    getMenuCarouselState() {
        return nodeHasClass(this.menuCarousel, 'is-open');
    }
    getSearchState() {
        return nodeHasClass(this.search, 'is-open');
    }

    getNavState() {
        return document.querySelector('.Masthead .PrimaryNav-item.is-active');
    }

    setNavState(obj) {
        for (let child of obj.parentNode.children) {
            if (child !== obj && nodeHasClass(child, 'is-active')) {
                nodeRemoveClass(child, 'is-active');
            }
        }

        nodeAddClass(obj, 'is-active');
    }
    resetNavState() {
        let menuItems = document.querySelectorAll('.Masthead .PrimaryNav-item');

        for (let child of menuItems) {
            nodeRemoveClass(child, 'is-active');
        }

        // Check that there actually is a currently active menu item that exists on page load.
        if (this.currentActiveMenuItem) {
            nodeAddClass(this.currentActiveMenuItem, 'is-active');
        }
    }

    closeLogo() {
        nodeRemoveClass(this.logo, 'is-expanded');
    }
    openLogo() {
        nodeAddClass(this.logo, 'is-expanded');
    }
    closeMasthead() {
        nodeRemoveClass(this.masthead, 'is-open');
    }
    openMasthead() {
        nodeAddClass(this.masthead, 'is-open');
    }
    closeCarousel() {
        nodeRemoveClass(this.menuCarousel, 'is-open');
        $('.Masthead .MenuCarousel').slideUp();
    }
    openCarousel() {
        nodeAddClass(this.menuCarousel, 'is-open');
        $('.Masthead .MenuCarousel').slideDown();
    }
    closeSearch() {
        nodeAddClass(this.search, 'is-open');
        $('.Masthead .Search').slideUp();
    }
    openSearch() {
        nodeAddClass(this.search, 'is-open');
        $('.Masthead .Search').slideDown();
    }

    toggleLogoState() {
        if (this.logoStateVal === true) {
            this.closeLogo();
        } else {
            this.openLogo();
        }
    }
    toggleMastheadState() {
        if (this.logoStateVal === true) {
            this.closeMasthead();
        } else {
            this.openMasthead();
        }
    }
    toggleMenuCarouselState() {
        if (this.logoStateVal === true) {
            this.closeCarousel();
        } else {
            this.openCarousel();
        }
    }
}

// Generate Carousel Nav from Fallback Nav
(function() {
    if (nodeExists('.FallbackNav') && nodeExists('.Masthead')) {
        let fallbackNavGroups = document.querySelectorAll('.FallbackNav > .FallbackNav-group');

        if (fallbackNavGroups) {
            // Delete the fallback menu link.
            nodeDelete(document.querySelector('.Masthead .PrimaryNav-item'));

            let menuItemTemplate = template(
                '<li class="PrimaryNav-item <%= state %>" role="menu">' +
                '<a class="PrimaryNav-link" href="<%= href %>">' +
                '<%= text %>' +
                '</a>' +
                '</li>'
            );

            let carouselSectionTemplate = template(
                '<section class="MenuCarousel-group" id="<%= id %>">' +
                '<div class="Carousel Carousel--multiple" role="complementary"></div>' +
                '</section>'
            );

            let itemImageTemplate = template(
                '<figure class="SquareImage">' +
                '<div class="SquareImage-viewbox">' +
                '<picture>' +
                '<!--[if IE 9]><video style="display: none;"><![endif]-->' +
                '<source data-srcset="<%= srcset %>">' +
                '<!--[if IE 9]></video><![endif]-->' +
                '<img alt="<%= imagealt %>" class="SquareImage-graphic lazyload" data-sizes="auto" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">' +
                '<noscript>' +
                '<img src="<%= noscriptImage %>" class="SquareImage-graphic" alt="<%= imagealt %>">' +
                '</noscript>' +
                '</picture>' +
                '</div>' +
                '</figure>'
            );

            let itemCardTemplate = template(
                '<div class="Carousel-item">' +
                '<a href="<%= href %>" class="CategoryCard <%= state %>">' +
                '<div class="CategoryCard-graphic">' +
                '<%= image %>' +
                '</div>' +
                '<span class="CategoryCard-title"><%= text %></span>' +
                '</a>' +
                '</div>'
            );

            for (let item of fallbackNavGroups) {
                let groupTitle = item.children[0];
                let groupTitleText = groupTitle.textContent;
                // If the menu item has children, apply an ID anchor, else use the href of the top-level title.
                let groupTitleHref = item.children[1] ? '#masthead-' + groupTitleText.replace(/\s+/g, '-').toLowerCase() : groupTitle.children[0].getAttribute('href');
                let groupItems = item.children[1] || false;

                // If the group has an active item, send back an active class for the generated primary nav link.
                function groupHasActiveItem() {
                    if (groupItems) {
                        for (let item of groupItems.children) {
                            if (nodeHasClass(item, 'is-active')) {
                                return ' is-active';
                            } else {
                                return '';
                            }
                        }
                    }
                }

                // GENERATE PRIMARY NAV
                let renderedItem = menuItemTemplate({
                    'state': groupHasActiveItem(),
                    'href': groupTitleHref,
                    'text': groupTitle.textContent
                });
                document.querySelector('.Masthead .PrimaryNav').innerHTML += renderedItem;

                // GENERATE MENU CAROUSEL
                if (groupItems) {
                    // Generate a MenuCarousel-group element for each group in the fallback nav, and append it.
                    let renderedCarouselSection = carouselSectionTemplate({
                        'id': groupTitleHref.replace('#', '')
                    });
                    document.querySelector('.Masthead .MenuCarousel').innerHTML += renderedCarouselSection;

                    // Generate Items
                    for (let navItem of groupItems.children) {
                        // console.log('navItem', navItem);
                        let itemClasslist = navItem.classList;
                        let itemIsActive = itemClasslist.contains('is-active');
                        let itemImageSrcset = navItem.children[0].getAttribute('data-carousel-image-srcset');
                        let itemImageNoscript = navItem.children[0].getAttribute('data-carousel-image-noscript');
                        let itemImageAlt = navItem.children[0].getAttribute('data-carousel-image-alt');
                        let itemText = navItem.children[0].textContent;
                        let itemHref = navItem.children[0].getAttribute('href');
                        let parentCarouselGroup = document.getElementById(groupTitleHref.replace('#', ''));
                        let parentCarousel = parentCarouselGroup.children[0];

                        let renderedCard = itemCardTemplate({
                            'state': itemIsActive ? 'is-active' : '',
                            'href': itemHref,
                            'text': itemText,
                            'image': itemImageTemplate({
                                'srcset': itemImageSrcset,
                                'noscriptImage': itemImageNoscript,
                                'imagealt': itemImageAlt
                            })
                        });

                        parentCarousel.innerHTML += renderedCard;

                        // Add State to Active Category
                        if (itemIsActive) {
                            nodeAddClass(parentCarouselGroup, 'is-visible');
                        }
                    }
                }
            }

            nodeAddClass(document.querySelector('.FallbackNav'), 'is-hidden');
        }
    }
}());

// Initialise the masthead.
(function() {
    if (nodeExists('.Masthead')) {
        let Masthead = new MastheadMethods;

        Masthead.init();

        if (Masthead.getMenuCarouselState() === true) {
            Masthead.openCarousel();
        } else {
            Masthead.closeCarousel();
        }

        document
            .querySelector('.Masthead .PrimaryNav')
            .addEventListener('click', function(e) {
                if (e.target.classList.contains('PrimaryNav-link')) {
                    // Only prevent default on masthead menu carousel links.
                    if (e.target.getAttribute('href').indexOf('#masthead') !== -1) {
                        e.preventDefault();
                    }

                    Masthead.setNavState(e.target.parentNode);

                    if (Masthead.getMastheadState() === false) {
                        Masthead.openMasthead();
                        Masthead.openLogo();
                        Masthead.openCarousel();
                    } else {
                        if (Masthead.getSearchState() === true) {
                            Masthead.closeSearch();
                            Masthead.openCarousel();
                        }
                    }

                    let targetGroup = document.getElementById(e.target.getAttribute('href').replace('#', ''));

                    if (targetGroup) {
                        nodeAddClass(targetGroup, 'is-visible');

                        for (let child of targetGroup.parentNode.children) {
                            if (child !== targetGroup) {
                                nodeRemoveClass(child, 'is-visible');
                            }
                        }
                    }
                }
            });

        document
            .querySelector('.Masthead .MenuCarousel-close')
            .addEventListener('click', function(e) {
                Masthead.resetNavState();
                Masthead.closeLogo();
                Masthead.closeMasthead();
                Masthead.closeCarousel();
            });

        // initialise searchButton
        document
            .querySelector('.Masthead .Masthead-searchButton')
            .addEventListener('click', function(e) {
                e.preventDefault();
                // Masthead.setNavState(e.target.parentNode);
                if (Masthead.getMastheadState() === false) {
                    Masthead.openMasthead();
                    Masthead.openLogo();
                    Masthead.openSearch();
                } else {
                    if (Masthead.getMenuCarouselState() === true) {
                        Masthead.resetNavState();
                        Masthead.closeCarousel();
                        Masthead.openSearch();
                    }
                }
            });

        document
            .querySelector('.Masthead .Search-close')
            .addEventListener('click', function(e) {
                Masthead.closeLogo();
                Masthead.closeMasthead();
                Masthead.closeSearch();
            });
    }
}());
