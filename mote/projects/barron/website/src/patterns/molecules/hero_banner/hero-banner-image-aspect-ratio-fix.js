var debounce = require('lodash/debounce');

class Hero {
    constructor(element) {
        this.parent = element;
        this.background = element.querySelectorAll('.HeroBanner-background');
        this.image = element.querySelectorAll('.HeroBanner-background img');
        this.size = this.getSize();
    }

    getSize() {
        return {
            'bgw': this.background[0].offsetWidth,
            'bgh': this.background[0].offsetHeight,
            'imgw': this.image[0].offsetWidth,
            'imgh': this.image[0].offsetHeight
        };
    }

    setSize() {
        this.size = this.getSize();

        if(this.size.imgw < this.size.bgw) {
            if (this.image[0].classList) {
                this.image[0].classList.add('is-stretchedToWidth');
                this.image[0].classList.remove('is-stretchedToHeight');
            } else {
                this.image[0].className += ' is-stretchedToWidth';
                this.image[0].className = this.image[0].className.replace(' is-stretchedToHeight', ' ');
            }
        } else if (this.size.imgh < this.size.bgh) {
            if (this.image[0].classList) {
                this.image[0].classList.add('is-stretchedToHeight');
                this.image[0].classList.remove('is-stretchedToWidth');
            } else {
                this.image[0].className += ' is-stretchedToHeight';
                this.image[0].className = this.image[0].className.replace(' is-stretchedToWidth', ' ');
            }
        }
    }

    init() {
        this.setSize();

        if (this.image[0].addEventListener) {
            this.image[0].addEventListener('load', () => {
                this.setSize();
            });
        } else {
            this.image[0].attachEvent('onload', () => {
                this.setSize();
            });
        }
    }
}

let heroes = document.querySelectorAll('.HeroBanner');

for (let i = 0; i < heroes.length; i++) {
    let hero = new Hero(heroes[i]);
    hero.init();

    window.onresize = debounce(function() {
        hero.init();
    }, 100);
}
