'use strict';

export default class Slider {

    slides  = [];
    current = 0;

    constructor(el) {

        this.slider     = el;
        this.track      = this.slider.querySelector('.slider__track');

        this.slides     = this.slider.querySelectorAll('.slider__slide');

        this.prev       = this.slider.querySelector('.slider__prev');
        this.next       = this.slider.querySelector('.slider__next');

        this._control();

    }

    _control() {

        this.prev.addEventListener('click', e => {
            if(this.current > 0) this.current--;
            this.track.style.transform = `translateX(-${ 100 * this.current }%)`;
        });

        this.next.addEventListener('click', e => {
            if(this.current < this.slides.length-1) this.current++;
            this.track.style.transform = `translateX(-${ 100 * this.current }%)`;
        });

    }

}