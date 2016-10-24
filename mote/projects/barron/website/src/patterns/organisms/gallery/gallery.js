let nodeExists = require('../../../utils/prk-js-utils/node-exists');
let nodeHasClass = require('../../../utils/prk-js-utils/has-class');
let nodeAddClass = require('../../../utils/prk-js-utils/add-class');
let nodeRemoveClass = require('../../../utils/prk-js-utils/remove-class');
let nodeDelete = require('../../../utils/prk-js-utils/remove-element');
let globalVars = require('../../../globals/global-variables.json');

class Gallery {
    constructor() {
        this.galleryElem = document.querySelector('.Gallery');
        this.thumbnailsContainer = document.querySelector('.Gallery .Gallery-thumbnails');
        this.thumbnails = document.querySelector('.Gallery .Gallery-thumbnails').children;
        this.thumbnailsToggler = document.querySelector('.Gallery .Gallery-thumbnailsToggler');

        this.maxThumbs = 3;
        this.minimisedThumbnails = this.getThumbState();
        this.windowWidth = this.getWindowWidth();
        this.mobileSize = globalVars.breakpoints.delta;

        this.thumbnailsOpenClass = 'is-open';
        this.thumbnailsMinimisedClass = 'is-minimised';

        this.activeThumb = this.thumbnailsContainer.querySelectorAll('.is-active');
    }

    init() {
        this.minimisedThumbnails = this.getThumbState();
        this.resizeListen();
        this.toggleThumbsState();

        this.thumbnailsToggler.addEventListener('click', () => {
            this.toggleThumbsOpen();
        });

        this.handleThumbnailClick();
    }

    getWindowWidth() {
        return window.innerWidth;
    }

    getThumbLimit() {
        return this.thumbnails.length > this.maxThumbs;
    }

    getThumbState() {
        return this.getThumbLimit() || this.windowWidth < this.mobileSize;
    }

    applyMinimisedThumbs() {
        nodeAddClass(this.thumbnailsContainer, this.thumbnailsMinimisedClass);
    }

    resetMinimisedThumbs() {
        nodeRemoveClass(this.thumbnailsContainer, this.thumbnailsMinimisedClass);
    }

    openThumbs() {
        nodeAddClass(this.thumbnailsContainer, this.thumbnailsOpenClass);
        nodeAddClass(this.thumbnailsToggler, 'is-active');
    }

    closeThumbs() {
        nodeRemoveClass(this.thumbnailsContainer, this.thumbnailsOpenClass);
        nodeRemoveClass(this.thumbnailsToggler, 'is-active');
    }

    toggleThumbsState() {
        if (this.minimisedThumbnails === true) {
            if (!nodeHasClass(this.thumbnailsContainer, this.thumbnailsMinimisedClass)) {
                this.applyMinimisedThumbs();
            }
        } else {
            if (nodeHasClass(this.thumbnailsContainer, this.thumbnailsMinimisedClass)) {
                this.resetMinimisedThumbs();
            }
        }
    }

    toggleThumbsOpen() {
        if (nodeHasClass(this.thumbnailsContainer, this.thumbnailsOpenClass)) {
            this.closeThumbs();
        } else {
            this.openThumbs();
        }
    }

    resizeListen() {
        window.addEventListener('resize', () => {
            this.windowWidth = this.getWindowWidth();
            this.minimisedThumbnails = this.getThumbState();
            this.toggleThumbsState();
        });
    }

    handleThumbnailClick() {
        let thumbnails = this.thumbnailsContainer.children;

        $('.Gallery-thumbnail').on('click', function(e) {
            e.preventDefault();

            if ($(this).not('.is-active')) {
                $(this).siblings('.Gallery-thumbnail').removeClass('is-active');
                $(this).addClass('is-active');

                let imageSrcset = $(this).attr('data-gallery-image-srcset');

                $('.Gallery-image').find('.SquareImage-graphic').removeClass('lazyloaded').addClass('lazyload');
                $('.Gallery-image').find('picture').find('source').attr('srcset', '').attr('data-srcset', imageSrcset);
                $('.Gallery-imageLink').attr('href', $(this).attr('href'));
            }
        });
    }
}

let ProductGallery = new Gallery;

ProductGallery.init();
