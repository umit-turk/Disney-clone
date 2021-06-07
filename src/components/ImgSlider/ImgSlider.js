import React from 'react'
import { Carousel, Wrap } from './imgSliderStyle'

function ImgSlider() {
    let settigs = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settigs}>
           <Wrap>
                <img src="/images/slider-badging.jpg" />
           </Wrap>
           <Wrap>
                <img src="/images/slider-badag.jpg" />
           </Wrap>
        </Carousel>
    )
}

export default ImgSlider
